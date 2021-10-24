import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Markdown from 'markdown-to-jsx';

import Settings from '../settings.json';

function DateString(date) {
  let d = new Date(date);
  return d.toLocaleString('en-GB', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}


export function PodcastEpisode({data, show}) {
  let img = "";
  if(true) {
    img = `${Settings.podcastUrl}/${show}/${data.slug}.jpg`;
  }
  else {
    img = `${Settings.podcastUrl}/${show}.jpg`
  }

  return (
  <Card className="podcast-episode" key={data.slug} elevation="3">
          <CardMedia
            component="img"
            image={img}
            alt={data.name}
            />
          <CardContent>
            <Typography gutterBottom variant="h3" component="div" key="title" className="h">
              {data.name}
            </Typography>
            <span className="show-time">{DateString(data.date)}</span>
            <audio src={`${Settings.podcastUrl}/${show}/${data.slug}.mp3`} controls key="audio" />
            <Markdown options={{ forceBlock: false }} key="text">
            {data.description}
          </Markdown>
          </CardContent>
  </Card>);
}