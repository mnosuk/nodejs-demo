const express = require('express')
const config = require('../config')

const router = express.Router()

// middleware : log every incoming request
router.use((req, resp, next) => {
    if (process.env.NODE_ENV !== 'production') {
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