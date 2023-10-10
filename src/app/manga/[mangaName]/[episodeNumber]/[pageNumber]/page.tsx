'use client';
import ReaderContentDiv from "../../../../readingPage/readerContentDiv";
import TopDiv from "../../../../readingPage/topDiv";
import {useState} from 'react';

const Page =({params}:{
    params : {
        mangaName:string,
        episodeNumber:string,
        pageNumber:string
    }
})=> {

    const [ormp,setOrmp] = useState(false);  //ormp: open reading mode page
    const [tektek,setTektek] = useState(true); //tektek: teker teker okuma modu

    const imgSrc = `https://manga-images-api-1.vercel.app/manga/${params.mangaName}/${params.episodeNumber}/${params.pageNumber}`;

    return (
        <>
        <TopDiv  mangaName={params.mangaName} episodeNumber={params.episodeNumber} ormp={ormp} setOrmp={setOrmp} tektek={tektek} setTektek={setTektek}/>
        <ReaderContentDiv ormp={ormp} tektek={tektek} setTektek={setTektek} imgSrc={imgSrc} episodeNumber={params.episodeNumber}
        pageNumber={params.pageNumber} mangaName={params.mangaName} />
        </>
    )
}
export default Page;