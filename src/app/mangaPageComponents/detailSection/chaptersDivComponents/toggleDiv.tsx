'use client';
import DataSaver from '@mui/icons-material/DataSaverOffRounded';
import CheckCircle from '@mui/icons-material/CheckCircleRounded';
import {useState} from 'react';

const ToggleDiv = () => {

    const [read,setRead] = useState(false);//okundu - okunmadi

    return (  
        <div className={`w-full  ${read ? 'bg-[#3F3A87] rounded-[3px]':'bg-white rounded-[5px]'} px-[5px] flex flex-row justify-center items-center cursor-pointer`}
        onClick={()=>{setRead(read=>!read)}}
        >
            { !read ? 
            <>
            <DataSaver className='text-gray-700 text-[medium] mr-[2px]' />
            <span className='text-[#3f3a87] text-[11px] leading-[20px] inline-block h-min'>Okunmadı</span>
            </>
            :
            <>
            <CheckCircle className='text-white text-[medium] mr-[2px]' />
            <span className='text-white text-[11px] leading-[20px] inline-block h-min'>Okudum</span>
            </>
            }

        </div>
    )
}
export default ToggleDiv;