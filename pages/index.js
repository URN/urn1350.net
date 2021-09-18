import Header from '../components/header';
import ImageHeader from '../components/index/imageHeader';
import Footer from '../components/footer';
import NowPlaying from '../components/index/nowPlaying';

import Settings from '../settings.json';

export default function Home() {
  return (
    <>
    <Header title={Settings.siteTitle}/>
    <ImageHeader/>
    <NowPlaying />
    <Footer/>
    </>
  )
}
