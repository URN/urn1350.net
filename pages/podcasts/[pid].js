import Header from "../../components/header";
import Footer from "../../components/footer";

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
          <h1 className="err">Unfortunately, the podcast you were looking for could not be found.</h1>
        <Footer />
      </>
    );
  }
  console.log(data);
  return (
    <>
      <Header
        title={`${data.title} - ${Settings.siteTitle}`}
        image={data.image}
        description={data.description}
      />
      <main>
        <h1>{data.title}</h1>
        <span className="description">{data.description}</span>
        {
            data.memberships.map(x=>(<PodcastEpisode data={x}/>))
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
    await Axios.get(`${Settings.apiUrl}/podcasts/${context.query.pid}/`)
  ).data;
  console.log(data);
   } catch (err){

   }
  if (data == null) {
  }


  // Pass data to the page via props
  return { props:  {data} };
}

