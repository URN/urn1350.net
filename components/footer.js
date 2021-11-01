import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Settings from '../settings.json';
  
  export default class Header extends React.Component {
    render() {
      return (
      <AppBar color="primary" position="static" component="footer">
        <div>
            <strong>&copy; URN 2021</strong><br/>
            University Radio Nottingham<br/>
            <a href="/pages/competitions/">Competition Terms</a><br/>
        </div>
        <div>
            <strong>Winner of Best Student Radio Station at the Student Radio Awards 2010, 2011, 2012, 2013, 2014, 2016,
                2017 and 2018!</strong><br/>
            Contact the on-air presenters by messaging us on Instagram <a href="https://instagram.com/urn1350" target="_blank" rel="noopener">@URN1350</a>, or
            tweet <a href="https://twitter.com/urn1350" target="_blank" rel="noopener">@URN1350</a><br/>
            Find out more about us, and get in touch on our <a href="https://urn1350.net/pages/about">About</a> page. 
			<a href="https://urn1350.net/pages/branding-pack/">Branding Pack</a> <br/>
            Web Design &amp; Development by <a href="https://hacksoc.net">Hacksoc</a>
        </div>
    
      </AppBar>
      );
    }
}