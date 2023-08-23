const { OK } = require("../core/success.response")
const RoutingTranformService = require("../services/routing.services")
class RoutingTranformController
{
    tranformApi = async (req, res, next) => {
        new OK({
            message: "Tranform Success!",
            metaData: await RoutingTranformService.tranformApi(req)
        }).send(res)
    }
}

module.exports = new RoutingTranformController()