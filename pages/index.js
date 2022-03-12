import Header from '../components/header';
import ImageHeader from '../components/index/imageHeader';
import Footer from '../components/footer';
import NowPlaying from '../components/index/nowPlaying';
import Twitter from '../components/index/twitter';
import Schedule from '../components/index/schedule';

import Settings from '../settings.json';
import PodcastBar from '../components/PodcastBar';
import Spotify from '../components/index/spotify';
import ComicRelief from '../components/index/comicRelief.js';

export default function Home() {
  return (
    <>
    <Header title={Settings.siteTitle}/>
    <ImageHeader/>
    <main>
    <ComicRelief/>
    <NowPlaying />
    <div className="index-container">
      
    <Twitter/>
    <div className="schedule-parent">
    <Schedule/>
    <Spotify/>
    </div>
    </div>
    <PodcastBar/>
    </main>
    <Footer/>
    </>
  )
}
