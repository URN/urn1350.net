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
      </AppBar>
      );
    }
}