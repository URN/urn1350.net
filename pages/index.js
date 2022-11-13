import Header from '../components/header';
import ImageHeader from '../components/index/imageHeader';
import Footer from '../components/footer';
import NowPlaying from '../components/index/nowPlaying';
import Schedule from '../components/index/schedule';

import Settings from '../settings.json';
import PodcastBar from '../components/PodcastBar';
import Spotify from '../components/index/spotify';

export default function Home() {
  return (
    <>
      <Header title={Settings.siteTitle} />
      <ImageHeader />
      <main>
        <NowPlaying />
        <div className="index-container">

          <Schedule />
          <div className="schedule-parent">
            <Spotify />
          </div>
        </div>
        <PodcastBar />
      </main>
      <Footer />
    </>
  )
}
