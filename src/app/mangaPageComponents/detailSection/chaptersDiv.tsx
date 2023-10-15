import PageNumberSelector from "@/app/pageComponents/lastMangaEpisodes/pageNumberSelector/pageNumberSelector";
import ChapterListElement from "./chaptersDivComponents/chapterListElement";
import SeeComments from "./chaptersDivComponents/seeComments";
import axios from 'axios';
import { useState, useEffect } from "react";

const ChaptersDiv = ({mangaName}:any) => {

    const [lastEpisodes,setLastEpisodes] = useState([
        {
            name:'',
            title:'',
            episodeNumber:'',
            episodeName:'',
            addingDate:''
        }
    ])
    const [loaded,setLoaded] = useState(false);
    useEffect(()=>{
        axios.get(`https://manga-images-api-1.vercel.app/lastEpisodes`)
        .then((response)=>{

            //console.log('Bulunan manga==', response.data.lastEpisodes);
            console.log('manga Name=',mangaName);
            const filteredEpisodes = response.data.lastEpisodes.filter( (episode:any) => {
            //console.log('episode.name=',episode.name);  
                return episode.name == mangaName});            
            //console.log("filtered Episodes==", filteredEpisodes);
            //console.log("Episodes==", lastEpisodes);
            setLastEpisodes(filteredEpisodes);
            setLoaded(true);
          //console.log("Last five episodes ::", lastFiveEpisodes);
        })
      },[mangaName]); 

    return (
        <div className="w-[100%] p-[10px] flex flex-col items-center bg-white mt-[20px]">
            <ul className='w-[100%] h-full grid grid-cols-2 gap-4 max-[500px]:grid-cols-1'>

                { 
                    lastEpisodes.map((episode,index) =>{
                        return (
           
                            <ChapterListElement key={index} mangaName={mangaName} episodeNumber={episode.episodeNumber} episodeName={episode.episodeName} okunmaSayisi='11200' eklenmeTarihi={episode.addingDate}></ChapterListElement>

                        )
                    })
                }
            </ul>
            <PageNumberSelector />
            <SeeComments/>


        </div>
    )

}
export default ChaptersDiv;