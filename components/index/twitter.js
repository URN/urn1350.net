import React from 'react';
import Paper from '@material-ui/core/Paper';

import Settings from '../../settings.json';
  
  export default class ImageHeader extends React.Component {
    render() {
      return <>
        <a className="twitter-timeline" data-width="400" data-height="800" href="https://twitter.com/URN1350?ref_src=twsrc%5Etfw">Tweets by URN1350</a>
        <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script></>;
    }}