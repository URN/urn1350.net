import Header from "../components/header";
import Footer from "../components/footer";

import Axios from 'axios';

import NowPlaying from "../components/index/nowPlaying";

import { Typography } from "@material-ui/core";

import Settings from '../settings.json';


export default function Page() {
  return (
    <>
      <Header
        title={`Listen Now - ${Settings.siteTitle}`}
      />
      <main>
      <Typography gutterBottom variant="h1" component="div" key="title" className="h">Listen Now</Typography>
     <NowPlaying/>
        </main>
    </>
  );
}