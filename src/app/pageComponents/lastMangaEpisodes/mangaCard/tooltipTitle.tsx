import Link from "next/link";
const TooltipTitle = ({lastFiveEpisodes,mangaName}:any) => {
    return (
     <div id='tooltipTitle' className="w-[100%] max-w-[450px] h-[25vh] shadow-lg  z-20 bg-white  font-sans rounded-[5px] ">
        {
            lastFiveEpisodes.map((episode:any,index:number)=>{
                return (
                    <div key={index} className="w-[100%] h-[16%] text-[2vh] border-b-[1px] hover:bg-emerald-200 text-[rgba(0,0,0,0.7)] flex justify-between items-center">
                        <Link href={`/manga/${episode.name}/${episode.episodeNumber}/1`}><span className="pl-[10px]">{episode.episodeNumber} {episode.name}</span></Link>
                        <span className="pr-[10px]">{episode.addingDate}</span>
                    </div>
                )
            })
        }
        <div className="h-[20%] flex justify-center items-center">
            <Link className="text-blue-200 font-bold text-[2vh]  hover:text-blue-400" href={`/manga/${mangaName}`}>Tümünü Göster</Link>
        </div>
     </div>
    );
};

export default TooltipTitle;
