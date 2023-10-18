import PageNumberSelector from "@/app/pageComponents/lastMangaEpisodes/pageNumberSelector/pageNumberSelector";
import ChapterListElement from "./chaptersDivComponents/chapterListElement";
import SeeComments from "./chaptersDivComponents/seeComments";
import axios from 'axios';
import { useState, useEffect } from "react";

const ChaptersDiv = ({mangaName}:any) => {

    const [index,setIndex] = useState(1);
    const cn = 1; // componentNumberInaList

    const [slicedEpisodes,setSlicedEpisodes] = useState([
        {
            name:'',
            title:'',
            episodeNumber:'',
            episodeName:'',
            addingDate:''
        }
    ]);
    const [filteredEpisodes,setFilteredEpisodes] = useState([
        {
            name:'',
            title:'',
            episodeNumber:'',
            episodeName:'',
            addingDate:''
        }
    ])
    useEffect(()=>{
        axios.get(`https://manga-images-api-1.vercel.app/lastEpisodes`)
        .then((response)=>{
            console.log('manga Name=',mangaName);
            const filteredEpisodes = response.data.lastEpisodes.filter( (episode:any) => {
                return episode.name == mangaName}
            );
            setFilteredEpisodes(filteredEpisodes);           
            setSlicedEpisodes(filteredEpisodes.slice((index-1)*cn, index*cn < filteredEpisodes.length ? index*cn : filteredEpisodes.length ));
        })
      },[mangaName,index]); 

    return (
        <div className="w-[100%] p-[10px] flex flex-col items-center bg-white mt-[20px]">
            <ul className='w-[100%] h-full grid grid-cols-2 gap-4 max-[500px]:grid-cols-1'>
                { 
                    slicedEpisodes.map((episode,i) =>{
                        return (
                            <ChapterListElement key={i} mangaName={mangaName} episodeNumber={episode.episodeNumber} episodeName={episode.episodeName} okunmaSayisi='11200' eklenmeTarihi={episode.addingDate}></ChapterListElement>
                        )
                    })
                }
            </ul>
            <PageNumberSelector index={index} setIndex={setIndex} insideComponents={filteredEpisodes} componentNumberInaList={cn}/>
            <SeeComments/>


        </div>
    )

}
export default ChaptersDiv;