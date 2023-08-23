const express = require ('express')
const cors = require('cors');
const morgan = require ('morgan')
const compress = require ('compression')
const app = express()

require('dotenv').config()
//A. init middeware
// allow all site can access the API
app.use(cors({
    origin: '*'
}));
// compression reduce the size of package
app.use(compress())

app.use(express.json())
app.use(express.urlencoded({extends: true}))
//init routes
app.use(require("./routers"))


// logging for server using morgan has 5 types (dev, combined, common, short, tiny)
app.use(morgan("common"))


//init routes
app.use(require("./routers"))

// handling error
app.use((req, res, next) => {
    const error = new Error('Not Found')
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    console.log("handling error")
    console.log(error)
    const statusCode = error.status || 500
    return res.status(statusCode).json({
        status: 'error',
        code: statusCode,
        message: error.message || "internal server error"
    })
})

module.exports = app