'use client'
import ListElement from "./listElement";
import Link from "next/link";
import {useState} from 'react';

const TopDiv = ({topFive}:any) => {

    const [topFiveManga, setTopFiveManga] = useState(
        [
    {
        mangaName:'Naruto',
        situation:'Tamamlandı',
        lastEpisode:'700',
        imgSrc:'/lastMangaEpisodes/naruto.jpg',
    },
    {
        mangaName:'One Piece',
        situation:'Tamamlanmadı',
        lastEpisode:'1092',
        imgSrc:'/lastMangaEpisodes/onepiece.jpg',
    },
    {
        mangaName:'Black Clover',
        situation:'Tamamlanmadı',
        lastEpisode:'350',
        imgSrc:'/lastMangaEpisodes/blackclover.jpg',
    },
    {
        mangaName:'One Punch Man',
        situation:'Tamamlanmadı',
        lastEpisode:'192',
        imgSrc:'/lastMangaEpisodes/onepunchman.jpg',
    },
    {
        mangaName:'Bleach',
        situation:'Tamamlandı',
        lastEpisode:'600',
        imgSrc:'/lastMangaEpisodes/bleach.jpg',
    },
])
    
const colors = ['bg-purple-600','bg-purple-500','bg-purple-400','bg-purple-300','bg-purple-200'];


    return (
        <div className="w-[30vw] box-content shadow-2xl p-[15px] rounded-[5px]">
            <div className="h-[40px] w-[100%] pl-[5px] pr-[5px] border-b-[1px] border-gray-300 flex items-center justify-between">
                <h1 className="inline">TOP 5</h1>
                <Link href='/'><h1 className="inline ">TÜMÜNÜ GÖR</h1></Link>
            </div>
            <div className="px-[5px] w-[100%] ">
            {
                topFiveManga.map((manga,index)=>{
                    return (
                        <ListElement key={index} mangaName={manga.mangaName} situation={manga.situation} 
                        lastEpisode={manga.lastEpisode} imgSrc={manga.imgSrc} index={index+1} color={colors[index]} />
                    )
                })
            }

            </div>

        </div>
    )
}
export default TopDiv;