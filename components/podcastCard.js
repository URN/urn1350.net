import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardActionArea } from '@material-ui/core';
import Settings from '../settings.json';
  
  export default class PodcastCard extends React.Component {
    render() {
      return (
        <Card className="podcast-card">
        <CardActionArea href={`/podcasts/${this.props.data.slug}`}>
          <CardMedia
            component="img"
            image={this.props.data.image}
            alt={this.props.data.slug}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {this.props.data.title}
            </Typography>
            <Typography noWrap>
                {this.props.data.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      );
    }
}