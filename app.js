const express = require('express')

const broadcastRouter = require('./routes/broadcast.js')
const jsonRouter = require('./routes/json.js')
const livechatRouter = require('./routes/livechat.js')
const webhookRouter = require('./routes/webhook.js')

const app = express()

app.use('/broadcast', broadcastRouter)
app.use('/json', jsonRouter)
app.use('/livechat', livechatRouter)
app.use('/webhook', webhookRouter)

app.get('/', (req, res) => {
    res.sendStatus(200)
})

app.listen(3000, () => {
    console.log('Demo app listening on port 3000!')
})
