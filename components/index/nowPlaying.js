import React from 'react';
import Paper from '@material-ui/core/Paper';

import Settings from '../../settings.json';
  
  export default class ImageHeader extends React.Component {
    render() {
      return (
        <Paper className="now-playing"  elevation={3}>
            <h1>Now Playing</h1>
            <span class="show-name">Get this from an API Saturday Rotational 1 - Reece Davis, Yalini Ravindra, Ioana Iftode, Dom Nolan</span>
            <span class="show-time">From TIME-TIME</span>
            <br/>
            <audio src=""  controls />
        </Paper>
      );
    }
}