'use client';
import Logo from "../header/logo";
import Link from "next/link";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import InfoSharpIcon from '@mui/icons-material/InfoSharp';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { useState } from "react";

const TopDiv = ({mangaName}:any) => {
    const [clicked,setClicked] = useState(false);

    return (
        <div className="px-[20px]  w-[100%] h-[120px] bg-black flex flex-row items-center">
            <div className="h-full w-1/3 flex flex-row items-center justify-start gap-4" >
                <Logo/>
                <Link href={`/${mangaName}`} className="text-white flex items-center text-[20px] font-semibold tracking-widest"><ArrowBackRoundedIcon/>{mangaName}</Link>
            </div>
            <div className="h-full w-1/3 flex items-center justify-center">
            <select id='episodeSelector' className="outline-none text-[18px] rounded-[5px] font-bold p-[8px] w-[250px]">
                <option value='1'>Bölüm 1</option>
                <option value='2'>Bölüm 2</option>
                <option value='3'>Bölüm 3</option>
                <option value='4'>Bölüm 4</option>
                <option value='5'>Bölüm 5</option>

            </select>
                
            </div>
            <div className="h-full w-1/3 flex items-center justify-end content-center gap-3 text-[19px] flex-wrap ">  
                <span className='text-white flex items-center gap-1' 
                onClick={()=>{setClicked(clicked=>!clicked);}} >{clicked?<CheckCircleRoundedIcon/>:<CircleRoundedIcon/>}Okudum</span>
                <span className="text-white hover:text-[#685EFF] duration-200 flex items-center gap-1"><InfoSharpIcon/>Sorun Bildir</span>
                <span className="text-white hover:text-[#685EFF] duration-200 flex items-center gap-1"><SettingsSharpIcon/>Okuma Modu</span>


            </div>
        </div>
    )
}
export default TopDiv;