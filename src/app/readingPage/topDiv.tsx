'use client';
import Logo from "../header/logo";
import Link from "next/link";
import {useRouter} from 'next/navigation';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import InfoSharpIcon from '@mui/icons-material/InfoSharp';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import ReadingModeSelector from "./readerContentDivComponents/readingModeSelector";
import { useState,useRef } from "react";

const TopDiv = ({mangaName, ormp, setOrmp, tektek, setTektek, episodeNumber, lastEpisodes}:any) => {
    
    const [clicked,setClicked] = useState(false);
    const router = useRouter();
    const myRef = useRef<null | HTMLSelectElement>(null);

    const onChangeEvent = () => {
        tektek ? router.push(`/manga/${mangaName}/${myRef.current?.value}/1`) : router.push(`/manga/${mangaName}/${myRef.current?.value}`); 
    }

    return (
        <>
        <div  className="px-[20px]  w-[100%] h-[120px] bg-black flex flex-row items-center max-[1000px]:flex-col gap-y-3 max-[1000px]:h-[280px] max-[1000px]:px-0 ">
            <div className="h-full w-1/3 max-[1000px]:h-[120px] max-[1000px]:w-full flex flex-row items-center justify-start gap-4" >
                <Logo/>
                <Link href={`/manga/${mangaName}`} className="text-white flex items-center text-[20px] font-semibold tracking-widest capitalize"><ArrowBackRoundedIcon/>{mangaName}</Link>
            </div>
            <div className="h-full w-1/3 max-[1000px]:h-[80px] max-[1000px]:w-full flex items-center justify-center">
            <select id='episodeSelector' ref={myRef} 
            onChange={onChangeEvent} 
            className="outline-none text-[18px] rounded-[5px] font-bold p-[8px] w-[250px] max-[1000px]:w-[100%]">
                {
                    lastEpisodes.map((episode:any, index:number)=>{
                        return (
                           <option key={index} value ={episode.episodeNumber} 
                           selected={episode.episodeNumber == episodeNumber ?  true: false}>Bölüm {episode.episodeNumber}</option>
                        )
                    })
                }
            </select>
                
            </div>
            <div className="h-full w-1/3 max-[1000px]:h-[80px]  max-[1000px]:w-full max-[1000px]:justify-between flex items-center justify-end   content-center gap-3 text-[19px] flex-wrap ">  
                <span className='text-white flex items-center gap-1 cursor-pointer' 
                onClick={()=>{setClicked(clicked=>!clicked);}} >{clicked?<CheckCircleRoundedIcon/>:<CircleRoundedIcon/>}Okudum</span>
                <span className="text-white hover:text-[#685EFF] duration-200 flex items-center gap-1 cursor-pointer"><InfoSharpIcon/>Sorun Bildir</span>
                <span onClick={()=>{setOrmp(true);}}
                className="text-white hover:text-[#685EFF] duration-200 flex items-center gap-1 cursor-pointer"><SettingsSharpIcon/>Okuma Modu</span>
            </div>
        </div>
        {ormp && 
              <ReadingModeSelector setTektek={setTektek} setOrmp={setOrmp} tektek={tektek} mangaName={mangaName} episodeNumber={episodeNumber}/>
        }
        </>
    )
}
export default TopDiv;