import React from 'react';
import Axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardActionArea } from '@material-ui/core';

import PlusIcon from '@material-ui/icons/Add'

import PodcastCard from './podcastCard'
import Settings from '../settings.json';

import podcastInfo from "../public/podcasts.json";

export default class PodcastBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
            return (
                <>
                {
                  (this.props.full?<></>:<h1>Podcasts</h1>)
                }
                  <div className={`podcast-holder ${this.props.full?"full":""}`}>
                  {
                    Object.keys(podcastInfo).map(x => <PodcastCard data={podcastInfo[x]} key={x}/>)
                  }
                  
                  {this.props.full?<></>:<Card className="podcast-card">
        <CardActionArea href="podcasts">
        <PlusIcon className="large-icon" color="primary" />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              More Podcasts
            </Typography>
            <Typography noWrap>
                View all our podcasts
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>}
      </div> </>);
    }
}
