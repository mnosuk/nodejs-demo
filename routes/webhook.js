const express = require('express')
const bodyParser = require('body-parser')
const config = require('../config')

const router = express.Router()

// middleware : parsing application/json
router.use(bodyParser.json())

// middleware : parsing application/x-www-form-urlencoded ( body-value: [string, array] )
router.use(bodyParser.urlencoded({ extended: false }))

// middleware : log every incoming request
router.use((req, resp, next) => {
    if (process.env.NODE_ENV !== "production") {
        console.log(JSON.stringify({
            query: req.query,
            headers: req.headers,
            method: req.method,
            body: req.body
        }, null, 2))
    }
    next()
})

// webhook verification 
router.get('/', (req, resp) => {
    console.log(`send broadcast_api_token : ${config.BROADCAST_API_TOKEN}`)
    resp.send(config.BROADCAST_API_TOKEN)
})

// webhook incoming request
router.post('/', (req, resp) => {
    // do something
})

module.exports = router