const express = require('express')

const request = require('request-promise-native')
const router = express.Router()

const { BROADCAST_API_TOKEN } = process.env
// pause bot
router.post('/', async (req, res) => {
    const userId = req.query.userId

    if (!userId || userId === '') {
        res.sendStatus(400)
        return
    }

    let livechatBody = {
      "user_id": "{USER_ID}",
      "event": "pause"
     }

    try {
        await request
            .post(`https://hbotconnect.unicornonzen.com/api/pause?accessToken=${BROADCAST_API_TOKEN}`)
            .json(livechatBody)
        res.sendStatus(200)
    } catch (e) {
        console.error(e)
        res.sendStatus(500)
    }
});

// resume bot
router.post('/', async (req, res) => {
  const userId = req.query.userId

  if (!userId || userId === '') {
      res.sendStatus(400)
      return
  }

  let livechatBody = {
    "user_id": "{USER_ID}",
    "event": "resume"
   }

  try {
      await request
          .post(`https://hbotconnect.unicornonzen.com/api/pause?accessToken=${BROADCAST_API_TOKEN}`)
          .json(livechatBody)
      res.sendStatus(200)
  } catch (e) {
      console.error(e)
      res.sendStatus(500)
  }
});
module.exports = router