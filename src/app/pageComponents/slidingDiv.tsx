import Image from "next/image";

const SlidingDiv = ({color,imgSrc,episodeNumber,date}:any) => {
    return (
        <div className = {`w-[100vw] h-full flex justify-center items-end relative ${color} `}>
            <div id='imageDiv' className="w-[20vw] min-w-[200px] h-[85%] border-[2px] flex justify-center">
                <img src={`${imgSrc}`} alt="image" className="w-auto h-[100%]" />
            </div>
            <div id='bolumNumberandDateDiv'
            className="h-full aspect-[3/4] absolute right-[60px]  border-x-2 border-white flex flex-col justify-center items-center 
            bg-[rgba(0,0,0,0.3)]" >
               <div className='w-[80%] aspect-square border-1 border-red-500'>
               <div className='w-[100%] h-[65%] border-2 '>
                    <span className="block text-center text-[20px] text-white ">BÖLÜM</span>
                    <span className="block text-center text-[40px] font-bold text-white">{episodeNumber}</span>
                </div>
                <div className='w-[100%] h-[35%] text-center border-2 text-[12px] text-white flex justify-center items-center'>
                <span className="">{date}</span>    
                </div>
                
               </div>
            </div>
        </div>

    );
}

export default SlidingDiv;