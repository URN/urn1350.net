import Axios from 'axios';


export default async function handler(req, res) {
    var url = process.env.SLACK_URL
    var x = await  Axios.post(url, {text:req.body.msg})
    res.status(x.status).json(x.data)
  }
  