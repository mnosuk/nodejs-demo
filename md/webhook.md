# Webhook API

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

For webhook verification

|              |                                   |
| ------------ | --------------------------------- |
| path         | http://localhost:3000/webhook     |
| method       | GET                               |
| content-type | application/x-www-form-urlencoded |

For webhook incoming request

|              |                               |
| ------------ | ----------------------------- |
| path         | http://localhost:3000/webhook |
| method       | POST                          |
| content-type | application/json              |

## Examples

### Example user incoming request

* get_started

```json
{
    "msg_type": "postback",
    "msg": "from_get_started",
    "sender": "USER_XXXXXXXXXXXXXXXXXXXXXXXX",
    "receiver": "Webhook API",
    "user_attr": {
      "user_id": "USER_XXXXXXXXXXXXXXXXXXXXXXXX",
      "first_name": "",
      "last_name": "",
      "profile_pic": "",
      "locale": "en_US",
      "timezone": 7,
      "gender": "male",
      "fb_id": "XXXXXXXXXXXXXXXX"
    },
    "timestamp": 1514764800
  }
}
```

* text

```json
{
    "msg_type": "text",
    "msg": "สวัสดีค่ะ",
    "sender": "USER_XXXXXXXXXXXXXXXXXXXXXXXX",
    "receiver": "Webhook API",
    "user_attr": {
      "user_id": "USER_XXXXXXXXXXXXXXXXXXXXXXXX",
      "first_name": "",
      "last_name": "",
      "profile_pic": "",
      "locale": "en_US",
      "timezone": 7,
      "gender": "male",
      "fb_id": "XXXXXXXXXXXXXXXX"
    },
    "timestamp": 1514764800
  }
}
```

* quick_reply

```json
{
    "msg_type": "postback",
    "msg": "QR_@_quick reply text_@_[\"0\"]",
    "sender": "USER_XXXXXXXXXXXXXXXXXXXXXXXX",
    "receiver": "Webhook API",
    "user_attr": {
      "user_id": "USER_XXXXXXXXXXXXXXXXXXXXXXXX",
      "first_name": "",
      "last_name": "",
      "profile_pic": "",
      "locale": "en_US",
      "timezone": 7,
      "gender": "male",
      "fb_id": "XXXXXXXXXXXXXXXX"
    },
    "timestamp": 1514764800
  }
}
```

## Example bot incoming request

* text

```json
{
    "msg_type": "text",
    "msg": "สวัสดีครับ",
    "sender": "Webhook API",
    "receiver": "USER_XXXXXXXXXXXXXXXXXXXXXXXX",
    "user_attr": {
      "user_id": "USER_XXXXXXXXXXXXXXXXXXXXXXXX",
      "first_name": "",
      "last_name": "",
      "profile_pic": "",
      "locale": "en_US",
      "timezone": 7,
      "gender": "male",
      "fb_id": "XXXXXXXXXXXXXXXX"
    },
    "timestamp": 1514764800
  }
}
```

* image

```json
{
    "msg_type": "image",
    "msg": "https://image-url.com",
    "sender": "Webhook API",
    "receiver": "USER_XXXXXXXXXXXXXXXXXXXXXXXX",
    "user_attr": {
      "user_id": "USER_XXXXXXXXXXXXXXXXXXXXXXXX",
      "first_name": "",
      "last_name": "",
      "profile_pic": "",
      "locale": "en_US",
      "timezone": 7,
      "gender": "male",
      "fb_id": "XXXXXXXXXXXXXXXX"
    },
    "timestamp": 1514764800
  }
}
```

* carousel

```json
{
    "msg_type": "carousel",
    "msg": [{
        "image_url": "https://image-url.com7",
        "subtitle": "",
        "title": ""
    }, {
        "image_url": "https://image-url.com",
        "subtitle": "",
        "title": ""
    }],
    "sender": "Webhook API",
    "receiver": "USER_XXXXXXXXXXXXXXXXXXXXXXXX",
    "user_attr": {
      "user_id": "USER_XXXXXXXXXXXXXXXXXXXXXXXX",
      "first_name": "",
      "last_name": "",
      "profile_pic": "",
      "locale": "en_US",
      "timezone": 7,
      "gender": "male",
      "fb_id": "XXXXXXXXXXXXXXXX"
    },
    "timestamp": 1514764800
  }
}
```