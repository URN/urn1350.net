import Header from "../components/header";
import Footer from "../components/footer";

import Axios from 'axios';

import EpisodesTable from '../components/PodcastBar';


import Settings from '../settings.json';


export default function Page() {
  return (
    <>
      <Header
        title={`Podcasts - ${Settings.siteTitle}`}
      />
      <main>
        <h1>Podcasts</h1>
        <span className="description">Here are all our podcasts.</span>
        <EpisodesTable full={true}/>
        </main>
      <Footer/>
    </>
  );
}