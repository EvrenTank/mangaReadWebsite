'use client';
import ReaderContentDiv from "../../../../readingPage/readerContentDiv";
import TopDiv from "../../../../readingPage/topDiv";
import {useState,useEffect} from 'react';
import axios from 'axios';
const Page =({params}:{
    params : {
        mangaName:string,
        episodeNumber:string,
        pageNumber:string
    }
})=> {

    const [ormp,setOrmp] = useState(false);  //ormp: open reading mode page
    const [tektek,setTektek] = useState(true); //tektek: teker teker okuma modu
    const [lastEpisodes,setLastEpisodes] = useState([]); //tektek: teker teker okuma modu

    useEffect(()=>{
        axios.get(`https://manga-images-api-1.vercel.app/lastEpisodes`)
        .then((response)=>{
            const filteredEpisodes = response.data.lastEpisodes.filter( (episode:any) => {
                return episode.name == params.mangaName});            
            setLastEpisodes(filteredEpisodes);
        })
      },[params.mangaName]); 

    const imgSrc = `https://manga-images-api-1.vercel.app/manga/${params.mangaName}/${params.episodeNumber}/${params.pageNumber}`;

    return (
        <>
        <TopDiv  mangaName={params.mangaName} episodeNumber={params.episodeNumber} ormp={ormp} setOrmp={setOrmp} tektek={tektek} setTektek={setTektek} lastEpisodes={lastEpisodes}/>
        <ReaderContentDiv ormp={ormp} tektek={tektek} setTektek={setTektek} imgSrc={imgSrc} episodeNumber={params.episodeNumber}
        pageNumber={params.pageNumber} mangaName={params.mangaName} />
        </>
    )
}
export default Page;