'use client'
import ListElement from "./listElement";
import Link from "next/link";
import {useState} from 'react';

const TopFiveDiv = ({topFive,lastEpisodes}:any) => {

    const [topFiveManga, setTopFiveManga] = useState(
        [
    {
        mangaName:'naruto',
        situation:'Tamamlandı',
    },
    {
        mangaName:'onepiece',
        situation:'Tamamlanmadı',
    },
    {
        mangaName:'beelzebub',
        situation:'Tamamlanmadı',
    },
    {
        mangaName:'onepunchman',
        situation:'Tamamlanmadı',
    },
    {
        mangaName:'bleach',
        situation:'Tamamlandı',
    },
])

const findElement = (name:string)=>{
    const lastEpisode = lastEpisodes.find((episode:any) => episode.name === name);
    return {
         lastEpisodeNumber:lastEpisode?.episodeNumber,
         lastAddingDate:lastEpisode?.addingDate,
         title:lastEpisode?.title} ;
}
    
const colors = ['bg-purple-600','bg-purple-500','bg-purple-400','bg-purple-300','bg-purple-200'];


    return (
        <div className="w-[85%] min-w-[320px] bg-white shadow-2xl p-[15px] rounded-[5px]">
            <div className="h-[40px] w-[100%] pl-[5px] pr-[5px] border-b-[1px] border-gray-300 flex items-center justify-between">
                <span>
                <span className='w-[12px] inline-block aspect-square'  style={{
                    background: "linear-gradient(to right,#d8d7e6 2px,transparent 2px,rgba(255,255,255,0) 5px,#9d9bc2 5px,#9d9bc2 7px,rgba(255,255,255,0) 7px,#ffffff 10px,#363183 10px,#363183 12px,rgba(255,255,255,0))"
                }}></span>
                <h1 className="inline text-black ml-[3px]">TOP 5</h1>
                </span>
                <Link href='/'><h1 className="inline text-black ">TÜMÜNÜ GÖR</h1></Link>
            </div>
            <div className="px-[5px] w-[100%] ">
            {
                topFiveManga.map((manga,index)=>{
                    return (
                        <ListElement key={index} 
                        mangaName={manga.mangaName} situation={manga.situation} 
                        title={findElement(manga.mangaName).title}    
                        lastEpisode={findElement(manga.mangaName).lastEpisodeNumber} 
                        imgSrc={`/lastMangaEpisodes/${manga.mangaName}.jpg`} index={index+1} color={colors[index]} />
                    )
                })
            }

            </div>

        </div>
    )
}
export default TopFiveDiv;