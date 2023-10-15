'use client'

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import SlidingDiv from './slidingDiv';
import { useState } from 'react';

const MangaSlider = ({lastEpisodes}:any) => {

    const [translation,setTranslation] = useState(0);
    const [istrue,setTrue] = useState(false);
    const rightSlide = () => {
        setTranslation( (prevTranslation) => (prevTranslation + 1) % 5);
        setTrue(false);
        if(translation === 4){
            setTrue(true);
        }
    }
    const leftSlide = () => {
        setTranslation( (prevTranslation) => (prevTranslation + 4) % 5);
        setTrue(false);
        if(translation === 0) {
            setTrue(true);
        }
    }
    const translateValue = translation * -100;

    const findElement = (name:string)=>{
        const lastEpisode = lastEpisodes.find((episode:any) => episode.name === name);
        return {lastEpisodeNumber:lastEpisode?.episodeNumber, lastAddingDate:lastEpisode?.addingDate} ;
    }



    return (
        <div id='topDiv' className={` w-full bg-amber-400 relative overflow-hidden `} >
            <span id='leftArrowSpan' className='border-[1px]  absolute w-[30px] h-[30px] top-[110px] left-[10px]  flex justify-center items-center z-30'
            onClick={leftSlide}>
                <ArrowBackIosNewIcon/></span>
            <span id='rightArrowSpan' className='border-[1px]  absolute w-[30px] h-[30px] top-[110px] right-[10px] flex justify-center items-center z-20'
                  onClick={rightSlide}
            >
                <ArrowForwardIosIcon/></span>
                
            <div id='500vwDiv' className ={`w-[500vw]  flex flex-row`}
            style={{
                transform : `translateX(${translateValue}vw)`,
                transitionDuration: istrue  ? '0s' : '1s'
            }}>
                <SlidingDiv color={'bg-gray-100'} imgSrc='/mangaSliderImages/naruto.png' episodeNumber={findElement("naruto").lastEpisodeNumber} date={`19:41 - ${findElement("naruto").lastAddingDate}`} />
                <SlidingDiv color={'bg-green-400'} imgSrc='/mangaSliderImages/onePiece.png' episodeNumber={findElement("onepiece").lastEpisodeNumber} date={`19:05 - ${findElement("onepiece").lastAddingDate}`}/>
                <SlidingDiv color={'bg-blue-400'} imgSrc='/mangaSliderImages/blackclover.png' episodeNumber={findElement("blackclover").lastEpisodeNumber} date={`19:41 - ${findElement("blackclover").lastAddingDate}`}/>
                <SlidingDiv color={'bg-red-100'} imgSrc='/mangaSliderImages/onepunchman.png' episodeNumber={findElement("onepunchman").lastEpisodeNumber} date={`08:41 - ${findElement("onepunchman").lastAddingDate}`}/>
                <SlidingDiv color={'bg-lime-500'} imgSrc='/mangaSliderImages/beelzebub.png' episodeNumber={findElement("beelzebub").lastEpisodeNumber} date={`19:41 - ${findElement("beelzebub").lastAddingDate}`}/>

            </div>

        </div>
    );
}

export default MangaSlider;