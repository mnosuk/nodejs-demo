# Broadcast API

## Quick Start

Install dependencies:
```bash
$ npm install
```

Start the server:
```bash
$ BROADCAST_API_TOKEN="YOUR_BROADCAST_API"
$ npm start
```

Start the server with docker:
```bash
$ docker run \
    -it \
    --rm \
    --name nodejs-demo \
    -v `pwd`:/usr/src/app \
    -w /usr/src/app \
    -p 3000:3000 \
    -e BROADCAST_API_TOKEN="YOUR_BROADCAST_API" \
    node:alpine \
    sh -c "npm install; npm start"
```

## Usage


|              |                                   |
| ------------ | --------------------------------- |
| path         | https://hbotconnect.unicornonzen.com/api/pause?accessToken=`[Broadcast API TOKEN]`        |
| method       | POST                               |
| content-type | application/json                   |

---

## Request body

```json
{
    "user_id": "{USER_ID}",
    "event": "resume"
}
```
## Type
- Pause bot
- Unpause bot

### Pause bot

```json
{
    "user_id": "{USER_ID}",
    "event": "pause"
}
```
---
### Unpause bot

```json
{
    "user_id": "{USER_ID}",
    "event": "resume"
}
```
---

## Example

```json
https://hbotconnect.unicornonzen.com/api/pause?accessToken=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```
