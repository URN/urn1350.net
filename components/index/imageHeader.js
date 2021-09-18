import React from 'react';
import Head from 'next/head';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Settings from '../../settings.json';
  
  export default class ImageHeader extends React.Component {
    render() {
      return (
        <header>
          <div className="header-text blurred-container">
            <h1>{Settings.siteTitle}</h1>
            <span className="subtitle">{Settings.siteSubtitle}</span>
          </div>
        </header>
      );
    }
}