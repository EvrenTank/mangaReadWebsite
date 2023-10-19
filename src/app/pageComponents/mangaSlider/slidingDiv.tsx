import Link from "next/link";
const SlidingDiv = ({color,imgSrc,episodeNumber,date,name}:any) => {
    return (
        <div id='500vwicindeki100luk' className = {`w-[100vw] flex justify-center items-center max-[900px]:flex-col relative ${color}  `}>
            <Link href={`/manga/${name}`}>
                <div id='imageDiv' className="w-[20vw] min-w-[200px] h-[250px]  flex justify-center items-end">
                <img src={`${imgSrc}`} alt="image" className="w-auto h-[85%]" />
            </div>
            </Link>
            <div id='bolumNumberandDateDiv'
            className="h-full aspect-[3/4] absolute right-[60px]  flex flex-col justify-center items-center 
            bg-[rgba(0,0,0,0.3)]  max-[900px]:static max-[900px]:h-[200px] max-[900px]:w-[90%] max-[900px]:p-[20px] " >
               <div className='w-[80%] aspect-square border-1 border-red-500'>
               <div className='w-[100%] h-[65%] bg-[rgba(0,0,0,0.2)] flex flex-col items-center justify-center '>
                    <span className="block text-center text-[20px] text-white ">BÖLÜM</span>
                    <span className="block text-center text-[40px] font-bold text-white">{episodeNumber}</span>
                </div>
                <div className='w-[100%] h-[35%] text-center text-[14px] text-white flex justify-center items-center'>
                <span className="">{date}</span>    
                </div>
               </div>
            </div>
        </div>

    );
}

export default SlidingDiv;