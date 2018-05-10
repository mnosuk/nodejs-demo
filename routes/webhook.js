const express = require('express')
const chatbase = require('@google/chatbase')

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
    if(req.body.sender === process.env.BOT_NAME && req.body.msg_type === 'text') {
        const msg = chatbase.newMessage(process.env.CHATBASE_KEY)
            .setAsTypeAgent() // sets the message as type user
            .setPlatform('fs_production') // sets the platform to the given value
            .setMessage(req.body.msg) // the message sent by either user or agent
            .setVersion('1.0') // the version that the deployed bot is
            .setUserId(req.body.user_attr.user_id) // a unique string identifying the user which the bot is interacting with
            .send()
            .then(msg => console.log("BOT SAID:", msg.getCreateResponse()))
            .catch(err => console.error("BOT ERR:",err))
    }
    if(req.body.sender !== process.env.BOT_NAME && req.body.msg_type === 'text') {
        const msg = chatbase.newMessage(process.env.CHATBASE_KEY)
	    .setAsTypeUser() // sets the message as type user
	    .setPlatform('fs_production') // sets the platform to the given value
	    .setMessage(req.body.msg) // the message sent by either user or agent
	    .setVersion('1.0') // the version that the deployed bot is
        .setUserId(req.body.user_attr.user_id) // a unique string identifying the user which the bot is interacting with
        .send()
	    .then(msg => console.log("USER SAID:",msg.getCreateResponse()))
        .catch(err => console.error("USER ERR:", err))
    }
})

module.exports = router