import Link from "next/link";
import StarIcon from '@mui/icons-material/Star';

const ListElement = ({mangaName,situation,lastEpisode,imgSrc,index,color}:any) => {
    return ( 
        <div className="w-[100%] h-[80px] border-b-[1px] border-gray-400 flex items-center mt-[5px]" >
        <Link href='' className="block w-[100%] h-[90%] relative " >
            <span className="inline-block  border-[1px] border-black h-[100%] aspect-square rounded-[4px] "
            style={{
                backgroundImage: `url(${imgSrc})`,
                backgroundSize: "cover"
            }}></span>
            <span className="inline-flex w-[calc(100%-72px)] h-[100%] flex-col absolute top-0 justify-center" >
                <span className="ml-[10px] font-semibold text-[125%] hover:text-purple-400" >{mangaName}</span>
                <span className="text-[70%] ml-[10px] text-gray-400">{situation}, {lastEpisode}.Bölüm</span>   
            </span>
            <span className="h-[40%] aspect-square absolute right-[20px] top-[30%]">
                <StarIcon className="text-purple-400"/>
            </span>
            <span className={`h-[50%] aspect-square absolute top-[25%] right-[-38px] ${color} rounded-[50%] flex justify-center items-center`}>
                <span className="font-bold text-white">{index}</span>
            </span>
            
        </Link>
        </div>
        
        )
    
 
    
}
export default ListElement;

