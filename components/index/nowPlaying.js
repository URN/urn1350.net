import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Axios from 'axios';

import Settings from '../../settings.json';
  
  export default class ImageHeader extends React.Component {
    constructor(props) {
      super(props);
      this.state = { msg: ""};
      this.updateBasket = this.update.bind(this);
      this.proceedToPayment = this.send_message.bind(this);
    }

    send_message = async e => {
      e.preventDefault();
    // pass form data
    // get it from state
    let that = this;
    const formData = {msg: that.state.msg};
    var x = await Axios.post("/api/message" ,formData)

    this.setState({
      ...this.state,
      msg: ""
    })
    }


    update = async event => {
  this.setState({
    ...this.state,
    msg: event.target.value
  })

}

    render() {
      return (
        
        <Paper className="now-playing"  elevation={3}>
                
            <h1>Now Playing</h1>
            <span className="show-name">Get this from an API Saturday Rotational 1 - Reece Davis, Yalini Ravindra, Ioana Iftode, Dom Nolan</span>
            <span className="show-time">From TIME-TIME</span>
            <br/>
            <audio src="https://live.urn1350.net/listen"  controls />
            <form onSubmit={this.handleOnSubmit}>
            <TextField
          className="message-show"
          label="Message The Show"
          multiline
          rows={4}
          variant="standard"
          value={this.state.msg}
          onChange={this.update}
        />
        <Button variant="contained" color="primary" onClick={this.send_message}>Submit</Button>
        </form>
        </Paper>
      );
    }
}11