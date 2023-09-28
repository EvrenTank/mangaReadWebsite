'use client'

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import SlidingDiv from './slidingDiv';
import { useState } from 'react';

const MangaSlider = () => {

    const [translation,setTranslation] = useState(0);
    const rightSlide = () => {
        setTranslation( (prevTranslation) => (prevTranslation + 1) % 5);
    }
    const leftSlide = () => {
        setTranslation( (prevTranslation) => (prevTranslation + 4) % 5);
    }
    const translateValue = translation * -100; // silme



    return (
        <div className={`h-[250px] w-full bg-amber-400 relative overflow-hidden `} >
            <span className='border-[1px]  absolute w-[30px] h-[30px] top-[110px] left-[10px]  flex justify-center items-center z-30'
            onClick={leftSlide}>
                <ArrowBackIosNewIcon/></span>
            <span className='border-[1px]  absolute w-[30px] h-[30px] top-[110px] right-[10px] flex justify-center items-center z-20'
                  onClick={rightSlide}
            >
                <ArrowForwardIosIcon/></span>
                
            <div className ={`w-[500vw] h-full flex flex-row`}
            style={{
                transform : `translateX(${translateValue}vw)`,
                transitionDuration: translation === 0 ? '0s' : '1s'
            }}>
                <SlidingDiv color={'bg-white'} imgSrc='/mangaSliderImages/naruto.png' episodeNumber='256' date='19:41 - 25.09.2023'/>
                <SlidingDiv color={'bg-green-700'} imgSrc='/mangaSliderImages/onePiece.png' episodeNumber='256' date='19:05 - 24.09.2023'/>
                <SlidingDiv color={'bg-blue-400'} imgSrc='/mangaSliderImages/blackclover.png' episodeNumber='256' date='20:41 - 25.09.2023'/>
                <SlidingDiv color={'bg-red-800'} imgSrc='/mangaSliderImages/onePunchMan.png' episodeNumber='256' date='08:41 - 26.08.2023'/>
                <SlidingDiv color={'bg-lime-900'} imgSrc='/mangaSliderImages/beelzebub.png' episodeNumber='256' date='19:41 - 25.09.2023'/>

            </div>

        </div>
    );
}

export default MangaSlider;