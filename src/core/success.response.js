'use strict'

const StatusCode = {
    OK: 200
}

const ReasonCode = {
    OK: "Success"
}

class SuccessResponse {
    constructor(
        {
            message,
            statusCode = StatusCode.OK, 
            reasonCode = ReasonCode.OK,
            metaData = []
        }
    )
    {
        this.message = !message ? reasonCode : message
        this.status = statusCode
        this.metaData = metaData
    }

    send (res, headers = {})
    {
        return res.status(this.status).json(this)
    }

}


class OK extends SuccessResponse{
    constructor({message, metaData})
    {
        super({message, metaData})
    }
}

module.exports = {
    OK
}