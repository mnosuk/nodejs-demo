const express = require('express')

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
    console.log(`send broadcast_api_token : ${process.env.BROADCAST_API_TOKEN}`)
    resp.send(process.env.BROADCAST_API_TOKEN)
})

// webhook incoming request
router.post('/', (req, resp) => {
    console.log('อิอิ', req)
})

module.exports = router