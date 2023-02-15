import React from 'react';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import Axios from 'axios';
import YAML from 'yaml';

import Settings from '../../settings.json';
import { Button, Card } from '@material-ui/core';

function pm(x)
{
  if(x == 12)
  return x;

  return x - 12;
}

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  
  export default class Schedule extends React.Component {
    constructor(props) {
      super(props);
      this.state = {schedule: null, rand: Math.floor(Math.random() * 1000)};
      Axios.get(`${Settings.cdnUrl}/schedule.yml?cb=${rand}`).then(r => {
        const schedule = YAML.parse(r.data)
        this.setState({
          ...this.state,
          schedule
        })
      })
    }

    render() {
      if(this.state.schedule == null){
      return (
        <Paper className="schedule"  elevation={3}>
            <h1>Today's Schedule</h1>
            <CircularProgress color="primary" />
            <Button color="primary">View Full Schedule</Button>
        </Paper>
      );
    }
  else {
    const d = new Date()
    let today = this.state.schedule[days[d.getDay()]]

    
    return (
    <Paper className="schedule"  elevation={3}>
      <h1>Today's Schedule</h1>
     {


       Object.keys(today).map(x => {
        let time = ""
        let s = today[x].start;
        let e = today[x].end;
          
        if ( e == 24){
          time = `${pm(s)}pm-12am`
        }
        else if(e >= 12)
        {
          if(s >= 12){
            time = `${pm(s)}-${pm(e)}pm`
          }
          else {
            time = `${s}am-${pm(e)}pm`
          }
        } else {
          time = `${s}-${e}am`
        }

       return (
       <div className={today[x].type + " show"}>
         <span className="show-time">{time}</span>
         <span className="show-name">{x}</span>
      </div>);
      })}
      <Button variant="contained" color="primary" href="/schedule">View Full Schedule</Button>
    </Paper>);
  }

  
}
}
