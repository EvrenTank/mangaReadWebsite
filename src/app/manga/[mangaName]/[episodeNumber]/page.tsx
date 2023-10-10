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
    const imgSrc = `https://manga-images-api-1.vercel.app/manga/${params.mangaName}/${params.episodeNumber}`;

    return (
        <>
        <TopDiv  mangaName={params.mangaName} episodeNumber={params.episodeNumber} ormp={ormp} setOrmp={setOrmp} tektek={tektek} setTektek={setTektek}/>
        <ReaderContentDiv ormp={ormp} tektek={false} setTektek={setTektek} imgSrc={imgSrc} episodeNumber={params.episodeNumber}
         mangaName={params.mangaName} />
        </>
    )
}
export default Page;