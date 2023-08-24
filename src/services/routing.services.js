const res = require("express/lib/response");
const {BadRequestError} = require("../core/failed.response")
const {getApi} = require("../utils/callApi")

const {decodeGeometry, tranformToOtherCoor} = require("../utils/tranformHelper")
class RoutingTranformService
{
    //https://routing.openstreetmap.de/routed-bike/route/v1/driving/-75.1660831223443,40.3694917788818;-75.1493812141649,40.3638508968099
                                                                    //long             lat
    static tranformApi = async (req) => {
        const startFtDest = req.params.startFtDest;
    
        const apiRoutingOSRM = `https://routing.openstreetmap.de/routed-bike/route/v1/driving/${startFtDest}`
        const result = await getApi(apiRoutingOSRM)
        var decodePolyline = decodeGeometry(result)
        let locations = []
        for (let element of decodePolyline)
        {
            const location = await tranformToOtherCoor(element[0],element[1])
            locations.push(location)
        }
        return locations
    }
}


module.exports = RoutingTranformService