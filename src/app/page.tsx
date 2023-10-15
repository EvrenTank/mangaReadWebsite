"use client";
import Header from "./header/header";
import MangaSlider from "./pageComponents/mangaSlider/mangaSlider";
import MainDiv from "./pageComponents/lastMangaEpisodes/mainDiv";
import axios from "axios";
import {useState,useEffect} from 'react';


const Home = ()=>{

  const [lastEpisodes,setLastEpisodes] = useState([{

  }]);

  useEffect(()=>{
    axios.get(`https://manga-images-api-1.vercel.app/lastEpisodes`)
    .then((response)=>{
        const episodes = response.data.lastEpisodes;           
        setLastEpisodes(episodes);
    })
  },[]); 
  
    return (
      <>
      <Header/>
      <MangaSlider lastEpisodes={lastEpisodes}/>
      <MainDiv lastEpisodes={lastEpisodes}/>
      </>
    );
}
export default Home;