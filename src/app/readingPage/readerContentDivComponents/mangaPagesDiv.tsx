'use client';
import axios from 'axios';
import {useState,useEffect} from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Link from "next/link";
const MangaPagesDiv = ({episodeImagesFilePath,manga,tektek,imgSrc,episodeNumber,mangaName,pageNumber}:any) => {
   
    const [number,setNumber] = useState(1);
    const rightClick = () => {
        setNumber (number => number+1);
    }
    const leftClick = () => {
        setNumber (number => number-1);
    }
    console.log("imgSrc"+imgSrc);

    const [fileList, setFilelist] = useState([{
        dosyaAdi:'',
        sayiDegeri:''
    }])
    
     useEffect(()=>{
        axios.get(`https://manga-images-api-1.vercel.app/manga/${mangaName}/${episodeNumber}`)
        .then((response)=>{
          setFilelist(response.data.fileList);   
          console.log("deneme"+response.data.fileList);
        })
      },[mangaName,episodeNumber]); 


    const allEpisodes = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];

    return(
        <div id='mangaPagesDiv-component-enusttekidiv' className={`w-full min-h-[400px] flex justify-center relative ${!tektek && 'flex-col gap-y-5' }`}>
        <div className='group absolute top-[0] left-[0px] z-10 w-[80px] h-[100%] bg-transparent text-[#22E5DE]'>
            {tektek && 
            <Link href={`/manga/${mangaName}/${episodeNumber}/${pageNumber == 1 ? pageNumber :(parseInt(pageNumber)-1)}`}><div onClick={leftClick} className="w-[80px] aspect-square bg-white border-2 border-[#22E5DE]  absolute left-[calc(50%-25px)] top-[calc(50%-25px)]  opacity-0 group-hover:opacity-100 hover:text-[#1BB6B1] hover:border-[#1BB6B1] duration-1000 flex justify-center items-center rounded-[50%] cursor-pointer">
                <ArrowBackIosNewIcon className="text-[50px]"/>
            </div></Link>}
        </div>
        { tektek?
            
            <img className='w-[100%] h-auto' alt='image' src={imgSrc}></img> 
            :
            fileList.map((file:any,index)=>{
                return (
                    <img className='w-[100%] h-auto' alt='image' key={index} src={`https://manga-images-api-1.vercel.app/manga/${mangaName}/${episodeNumber}/${file.sayiDegeri}`}></img>
                )
            })
       
        }
        
        <div className='group absolute top-[0]  right-[0px] z-10 w-[80px] h-[100%] bg-transparent text-[#22E5DE]' >
            {tektek && 
            <Link href={`/manga/${mangaName}/${episodeNumber}/${ pageNumber == fileList[fileList.length-1].sayiDegeri ? pageNumber :(parseInt(pageNumber)+1)}`}><div onClick={rightClick} className="w-[80px] aspect-square bg-white border-2 border-[#22E5DE] absolute right-[calc(50%-25px)] top-[calc(50%-25px)] opacity-0 group-hover:opacity-100 hover:text-[#1BB6B1] hover:border-[#1BB6B1] duration-1000 flex justify-center items-center rounded-[50%] cursor-pointer">
                <ArrowForwardIosIcon className="text-[50px]"/>
            </div></Link> }
        </div>
        </div>

    )
}

export default MangaPagesDiv;
