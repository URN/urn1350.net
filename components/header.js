import React from 'react';
import Head from 'next/head';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Settings from '../settings.json';

function _Image(params) {
    if (params.image) {
      return (
        <Head>
          <meta property="og:image" content={params.image} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content={params.image} />
        </Head>
      );
    } else return <></>;
  }
  
  function _Title(params) {
    return (
      <Head>
        <title>{params.title}</title>
        <meta name="title" content={params.title} />
        <meta property="og:title" content={params.title} />
        <meta twitter="twitter:title" content={params.title} />
      </Head>
    );
  }
  
  function _Description(params) {
    if (params.description) {
      return (
        <Head>
          <meta name="description" content={params.description} />
          <meta property="og:description" content={params.description} />
          <meta name="twitter:description" content={params.description} />
        </Head>
      );
    } else return <></>;
  }
  
  export default class Header extends React.Component {
    render() {
      return (
        <>
          <_Title title={this.props.title} />
          <_Image image={this.props.image} />
          <_Description description={this.props.description} />
          <Head>
            <meta property="fb:app_id" content="966242223397117" />
            <meta charSet="utf-8" />
            <meta name="robots" content="index,follow" />
          </Head>
          <Box>
      <AppBar position="static" component="div">
        <Toolbar>
          <Typography variant="h6" component="span" className="title">
            <img src="/images/logo.png" />
            {Settings.siteTitle}
          </Typography>
        </Toolbar>
        </AppBar>
        <AppBar color="secondary" position="static" component="nav">
            <Toolbar>
            <Button>Home</Button>
            <Button>Podcasts</Button>
            <Button>Listen Now</Button>
          
        </Toolbar>
    
      </AppBar>
    </Box>
        </>
      );
    }
}