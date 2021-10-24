import React from 'react';
import Paper from '@material-ui/core/Paper';

import Settings from '../../settings.json';
  
  export default class Twitter extends React.Component {
    render() {
      return <Paper elevation={3} className="twitter-card">
        <a className="twitter-timeline" data-width="30rem" data-height="45rem" href={`https://twitter.com/${Settings.twitter}?ref_src=twsrc%5Etfw`}>Tweets by URN1350</a>
        <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script></Paper>;
    }}