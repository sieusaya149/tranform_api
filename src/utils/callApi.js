const axios = require('axios');

const getApi  = async (url) =>
{
    try {
        const result = await axios.get(url)
        return result.data
    } catch (error) {
        return null
    }
}

module.exports = {getApi}