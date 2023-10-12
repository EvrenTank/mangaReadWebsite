"use client";
import TooltipTitle from "./tooltipTitle";
import CustomTooltip from "../additionalComponents/customizedTooltip";
import Link from "next/link";
import axios from "axios";
import {useState, useEffect} from 'react';
const Card = ({imgSrc,mangaName,addingDate,episodeNumber}:any)=>{
    const [lastFiveEpisodes,setLastFiveEpisodes] = useState([
        {
            name:'',
            episodeNumber:'',
            addingDate:''
        }
    ]);
    useEffect(()=>{
        axios.get(`https://manga-images-api-1.vercel.app/lastEpisodes`)
        .then((response)=>{
            console.log('Bulunan manga==', response.data.lastEpisodes);
            const filteredEpisodes = response.data.lastEpisodes.filter( (episode:any) => episode.name == mangaName);
          setLastFiveEpisodes(filteredEpisodes.slice(0,5));  
        })
      },[]); 


    return (
<CustomTooltip 

// Buradaki lastFiveEpisodes degerini de prop olarak alacagim.
title={
        <TooltipTitle mangaName={mangaName} lastFiveEpisodes={lastFiveEpisodes}/>
} >
<Link href={`/manga/${mangaName}`}>
        <div className={`aspect-[3/4] shadow-xl bg-white overflow-hidden relative rounded-[10px]`}>
            <img src={imgSrc} alt='image' className="w-[100%] h-auto text-center opacity-80" ></img>
            <div className="absolute left-0 bottom-[8%] w-[100%] h-[20%] "
            style={{
                background: "linear-gradient(to right,rgba(104,94,255,0.95) 0%,rgba(104,94,255,0.01) 99%,rgba(104,94,255,0) 100%)"
            }}>
                <span className=" w-[100%] text-white h-[50%] flex items-center pl-[10px]"><small className="text-[60%]">{addingDate} gün önce eklendi.</small></span>
                <span className=" w-[100%] text-white h-[50%] flex items-center pl-[10px]"><small className="text-[60%]">Bölüm {episodeNumber}</small></span>
            
            </div>
        </div>
        <div className="mt-[10px] text-[rgba(0,0,0,0.5)] text-center text-[80%]">{mangaName}
        </div>
        </Link>
</CustomTooltip>

    );
}

export default Card;