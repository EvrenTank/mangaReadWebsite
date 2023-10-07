'use client';
import Image from "next/image";
import {useState} from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const MangaPagesDiv = ({episodeImagesFilePath,manga}:any) => {
   
    const [number,setNumber] = useState(2);
    const rightClick = () => {
        setNumber (number => number+1);
    }
    const leftClick = () => {
        setNumber (number => number-1);
    }

    return(
        <div id='mangaPagesDiv-component-enusttekidiv' className="w-full min-h-[400px] flex justify-center relative">
        <div className='group absolute top-[0] left-[0px] z-10 w-[80px] h-[100%] bg-transparent text-[#22E5DE]'>
            <div onClick={leftClick} className="w-[80px] aspect-square bg-white border-2 border-[#22E5DE]  absolute left-[calc(50%-25px)] top-[calc(50%-25px)]  opacity-0 group-hover:opacity-100 hover:text-[#1BB6B1] hover:border-[#1BB6B1] duration-1000 flex justify-center items-center rounded-[50%] cursor-pointer">
                <ArrowBackIosNewIcon className="text-[50px]"/>
            </div>
        </div>
        <img className='w-[100%] h-auto' src={`${episodeImagesFilePath}/${number}.jpg`}>
        </img>
        <div className='group absolute top-[0]  right-[0px] z-10 w-[80px] h-[100%] bg-transparent text-[#22E5DE]' >
            <div onClick={rightClick} className="w-[80px] aspect-square bg-white border-2 border-[#22E5DE] absolute right-[calc(50%-25px)] top-[calc(50%-25px)] opacity-0 group-hover:opacity-100 hover:text-[#1BB6B1] hover:border-[#1BB6B1] duration-1000 flex justify-center items-center rounded-[50%] cursor-pointer">
                <ArrowForwardIosIcon className="text-[50px]"/>
            </div>
        </div>
        </div>

    )
}

export default MangaPagesDiv;
