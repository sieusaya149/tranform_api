const polyline = require('polyline');
const {getApi} = require("./callApi")
const decodeGeometry = (resultApi) =>
{
    const geometry = resultApi.routes[0].geometry
    // console.log(geometry)
    const decodedPolyline = polyline.decode(geometry);
    return decodedPolyline
}


const tranformToOtherCoor = async (lat, lon, fromSrc = '4326', toSrc ='32618') =>
{
    const url = `https://epsg.io/srs/transform/${lon},${lat}.json?key=default&s_srs=${fromSrc}&t_srs=${toSrc}`
    const result = await getApi(url)
    return [result.results[0].x, result.results[0].y]
}

module.exports = {decodeGeometry, tranformToOtherCoor}