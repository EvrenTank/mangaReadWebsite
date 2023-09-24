'use client'

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {useState} from 'react';

const MangaSlider = () => {

    const [translate,setTranslate]= useState(0);
    const rightSlide =() :void =>{
       setTranslate(translate=>translate+100);
    } 

    return (
        <div className="h-[300px] w-[500vw] bg-amber-400 relative" >
            <span className=' border-[1px] rounded-[50%] absolute w-[30px] h-[30px] top-[140px] left-[10px] flex justify-center items-center'>
                <ArrowBackIosIcon/></span>
            <div className ={`w-[500vw] h-full flex flex-row translate-x-[-${translate}vw] transition-transform duration-1000 `}>
                <div className='w-[100vw] bg-lime-500'></div>
                <div className='w-[100vw] bg-green-700'></div>
                <div className='w-[100vw] bg-blue-400'></div>
                <div className='w-[100vw] bg-red-800'></div>
                <div className='w-[100vw] bg-lime-900'></div>
            </div>
            <span className=' border-[1px] rounded-[50%] absolute w-[30px] h-[30px] top-[140px] right-[10px] flex justify-center items-center'
            >
                <ArrowForwardIosIcon/></span>
        </div>
    );
}

export default MangaSlider;