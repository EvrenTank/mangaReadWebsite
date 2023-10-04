'use client';
import Image from "next/image";
import {useState} from 'react';

const MangaPagesDiv = ({episodeImagesFilePath,manga}:any) => {
   
    const [number,setNumber] = useState(2);
    const rightClick = () => {
        setNumber (number => number+1);
    }
    const leftClick = () => {
        setNumber (number => number-1);
    }

    return(
        <div className="w-full min-h-[400px] flex justify-center relative">
        <div onClick={leftClick} className='absolute top-[50%] left-[30px] z-10 w-[40px] aspect-square bg-black'></div>
        <img className='w-[100%] h-auto' src={`${episodeImagesFilePath}/${number}.jpg`}>
        </img>
        <div onClick={rightClick} className='absolute top-[50%]  right-[30px] z-10 w-[40px] aspect-square bg-black' ></div>
        </div>

    )
}

export default MangaPagesDiv;
