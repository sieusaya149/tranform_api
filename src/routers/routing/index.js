'use strict'

const express = require('express')
const {asyncHanlder} = require('../../utils/asyncHandler')
const routingController = require('../../controllers/routing.controller')
const router = express.Router()
// signup
router.get('/tranform/:startFtDest', asyncHanlder(routingController.tranformApi))
module.exports = router