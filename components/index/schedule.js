import React from 'react';
import Paper from '@material-ui/core/Paper';

import Settings from '../../settings.json';
  
  export default class ImageHeader extends React.Component {
    render() {
      return (
        <Paper className="schedule"  elevation={3}>
            <h1>Today's Schedule</h1>
            There's a lot of stuff here.
        </Paper>
      );
    }
}11