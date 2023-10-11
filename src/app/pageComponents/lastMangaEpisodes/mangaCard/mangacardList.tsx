"use client";
import Card from "./mangaCard";
import axios from "axios";
import { useState, useEffect } from "react";

const MangaCardList = () => {
    const [lastepisodes,setLastepisodes] = useState([
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
          setLastepisodes(response.data.lastEpisodes);   
        })
      },[]); 

      const findDayDifference =(addingDate:any)=> {
        
        var today = new Date();
        var dateArray = addingDate.split('.');
        var arrangedDate = new Date(Number(dateArray[2]), Number(dateArray[1]) - 1, Number(dateArray[0]));
        var dayDifference = Math.floor((arrangedDate.getTime()) - today.getTime()) / (1000 * 60 * 60 * 24);
        return dayDifference;

      }



    return (
        <div className="w-[85%] bg-white  grid grid-cols-4 p-[15px] gap-[15px] max-[800px]:grid-cols-2 max-[1200px]:grid-cols-3 rounded-[5px] relative " >
            {
                lastepisodes.map((episode,index)=>{
                    return (
                    <Card key={index} imgSrc={`/lastMangaEpisodes/${episode.name}.jpg`} mangaName={episode.name} episodeNumber={episode.episodeNumber} 
                    addingDate={()=>{findDayDifference(episode.addingDate)}} />
                    )
                })
            }
        </div>
        
    );
}

export default MangaCardList;