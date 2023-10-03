import TooltipTitle from "./tooltipTitle";
import CustomTooltip from "../additionalComponents/customizedTooltip";
import Link from "next/link";

const Card = ({imgSrc,mangaName,addingDate,episodeNumber}:any)=>{
    return (
<CustomTooltip 

// Buradaki lastFiveEpisodes degerini de prop olarak alacagim.
title={
        <TooltipTitle  lastFiveEpisodes={[
    { number:'700', name:'İç Savaş', addingDate:'27.08.2023'},
    { number:'699', name:'Gerilim', addingDate:'27.08.2023'},
    { number:'698', name:'Geri Dönüş', addingDate:'27.08.2023'},
    { number:'697', name:'Saldırı:2', addingDate:'27.08.2023'},
    { number:'696', name:'Saldırı:1', addingDate:'27.08.2023'}
  ]}/>
} >
<Link href='/mangaPageComponents'>
        <div className={`aspect-[3/4] shadow-xl bg-white overflow-hidden relative rounded-[10px]`}>
            <img src={imgSrc} className="w-[100%] h-auto text-center opacity-80" ></img>
            <div className="absolute left-0 bottom-[8%] w-[100%] h-[20%] "
            style={{
                background: "linear-gradient(to right,rgba(104,94,255,0.95) 0%,rgba(104,94,255,0.01) 99%,rgba(104,94,255,0) 100%)"
            }}>
                <span className=" w-[100%] text-white h-[50%] flex items-center pl-[10px]"><small className="text-[60%]">{addingDate} önce eklendi.</small></span>
                <span className=" w-[100%] text-white h-[50%] flex items-center pl-[10px]"><small className="text-[60%]">Bölüm {episodeNumber}</small></span>
            
            </div>
        </div>
        <div className="mt-[10px] text-[rgba(0,0,0,0.5)] text-center text-[80%]">{mangaName}
        </div>
        </Link>
</CustomTooltip>

    );
}

export default Card;