const express = require('express')
const router = express.Router()

router.use('/v1/api/routing', require("./routing"))

module.exports = router