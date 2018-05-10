const express = require('express')
const request = require('request-promise-native')
const router = express.Router()

const { BROADCAST_API_TOKEN } = process.env

router.get('/send', async (req, res) => {
    const userId = req.query.userId

    if (!userId || userId === '') {
        res.sendStatus(400)
        return
    }

    let broadcastBody = {
        "to": [
            userId
        ],
        "msg_type": "text",
        "msg": "This is a broadcast message",
        "buttons": [],
        "quick_reply" : []
     }

    try {
        await request
            .post(`https://hbotconnect.unicornonzen.com/api/sendmessage?accessToken=${BROADCAST_API_TOKEN}`)
            .json(broadcastBody)
        res.sendStatus(200)
    } catch (e) {
        console.error(e)
        res.sendStatus(500)
    }
})


module.exports = router