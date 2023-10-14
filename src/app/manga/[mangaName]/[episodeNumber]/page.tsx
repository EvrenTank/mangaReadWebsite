'use client';
import ReaderContentDiv from "../../../readingPage/readerContentDiv";
import TopDiv from "../../../readingPage/topDiv";
import {useState,useEffect} from 'react';
import axios from 'axios';

const Page =({params}:{
    params : {
        mangaName:string,
        episodeNumber:string
    }
})=> {

    const [ormp,setOrmp] = useState(false);  //ormp: open reading mode page
    const [tektek,setTektek] = useState(false); //tektek: teker teker okuma modu
    const [lastEpisodes,setLastEpisodes] = useState([
        {
            name:'',
            title:'',
            episodeNumber:'',
            addingDate:''
        }
    ]); //tektek: teker teker okuma modu

    useEffect(()=>{
        axios.get(`https://manga-images-api-1.vercel.app/lastEpisodes`)
        .then((response)=>{
            const filteredEpisodes = response.data.lastEpisodes.filter( (episode:any) => {
                return episode.name == params.mangaName});            
            setLastEpisodes(filteredEpisodes);
        })
      },[params.mangaName]); 

    const imgSrc = `https://manga-images-api-1.vercel.app/manga/${params.mangaName}/${params.episodeNumber}`;

    return (
        <>
        <TopDiv  mangaName={params.mangaName} episodeNumber={params.episodeNumber} ormp={ormp} setOrmp={setOrmp} tektek={tektek} setTektek={setTektek} lastEpisodes={lastEpisodes} />
        <ReaderContentDiv ormp={ormp} tektek={false} setTektek={setTektek} imgSrc={imgSrc} episodeNumber={params.episodeNumber}
         mangaName={params.mangaName} biggestEpisodeNumber={lastEpisodes[0].episodeNumber}
         smallestEpisodeNumber={lastEpisodes[lastEpisodes.length-1].episodeNumber} />
        </>
    )
}
export default Page;