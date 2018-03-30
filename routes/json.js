const express = require('express')
const router = express.Router()

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

router.get('/', (req, resp) => {
    message = 'Your data ';
    for (let key in req.query) {
        message += `${key}: ${req.query[key]}`
    }
  
    let nodes = {
        'nodes': []
    };
    nodes['nodes'].push(nodeText(message));
  
    resp.send(nodes);
})

router.post('/', (req, resp) => {
    message = 'Your data ';
    for (let key in req.body) {
        message += `${key}: ${req.body[key]}`
    }
  
    let nodes = {
        'nodes': []
    };
    nodes['nodes'].push(nodeText(message));
  
    resp.send(nodes);
})

function nodeText(text) {
    const data = {
        "node_type": "node",
        "nodeResponse": {
            "type": "text",
            "response": text
        }
    }
    return data;
}

module.exports = router