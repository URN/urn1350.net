import Header from "../../components/header";
import Footer from "../../components/footer";

import Button from '@material-ui/core/Button';
import { Typography } from "@material-ui/core";

import Axios from 'axios';

import {PodcastEpisode} from '../../components/podcastEpisode';


import Settings from '../../settings.json';


export default function Page({data}) {
  if (!data) {
    return (
      <>
        <Header
          title={`Podcast Not found - ${Settings.siteTitle}`}
        />
         <Typography gutterBottom variant="h3" component="div" key="title" className="h err">
          Unfortunately, the podcast you were looking for could not be found.
          </Typography>
        <Footer />
      </>
    );
  }
  return (
    <>
      <Header
        title={`${data.name} - ${Settings.siteTitle}`}
        image={data.image}
        description={data.description}
      />
      <main>
      <Typography gutterBottom variant="h1" component="div" key="title" className="h">
              {data.name}
            </Typography>
            {
            data.links? Object.entries(data.links).filter(([k,v]) => k != "").map(([k,v])=>(<Button className="podcast-button" variant="contained" color="primary" href={v}>{k}</Button>)):<></>
            }
        <p className="description">{data.description}</p>
        {
            data.episodes.map(x=>(<PodcastEpisode data={x} show={data.slug} key={x.slug}/>))
        }
        </main>
      <Footer/>
    </>
  );
}

// This gets called on every request
export async function getServerSideProps(context) {
  // Fetch data from external API
  var data = null;
  try {
   data = (
    await Axios.get(`${Settings.podcastUrl}/${context.query.pid}.json`)
  ).data;
   } catch (err){

   }
  if (data == null) {
  }


  // Pass data to the page via props
  return { props:  {data} };
}

