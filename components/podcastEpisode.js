import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';



const columns = [
  {
    field: 'title',
    headerName: 'Title',
    width: 300,
    editable: false,
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 500,
    editable: false,
  },
  {
    field: 'updated_at',
    headerName: 'Age',
    type: 'number',
    width: 150,
    editable: false,
  },

];

export function PodcastEpisode({data}){
  return (
  <Card className="podcast-episode">

          <CardMedia
            component="img"
            image={data.audio_clip.urls.image}
            alt={data.audio_clip.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h3" component="div">
              {data.audio_clip.title}
            </Typography>
            <audio src={data.audio_clip.urls.high_mp3} controls />
            <div dangerouslySetInnerHTML={{__html: data.audio_clip.formatted_description}} />
          </CardContent>
  </Card>);
}