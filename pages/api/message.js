import Axios from 'axios';
import requestIp from 'request-ip'


export default async function handler(req, res) {
    var url = process.env.SLACK_URL
    var x = await  Axios.post(url, {text:req.body.msg})

    const detectedIp = requestIp.getClientIp(req)
    
    var discord = process.env.DISCORD_URL
    var discordResp = await Axios.post(discord, {
      "content": null,
      "embeds": [
        {
          "title": "New Message",
          "description": req.body.msg,
          "color": 9002166,
          "fields": [
            {
              "name": "IP Address",
              "value": detectedIp,
              "inline": true
            },
            {
              "name": "On Campus",
              "value": "No :x:",
              "inline": true
            }
          ]
        }
      ],
    })
    res.status(x.status).json(x.data)
  }
  
