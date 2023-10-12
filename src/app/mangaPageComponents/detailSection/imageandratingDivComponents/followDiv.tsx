import Link from "next/link";
import AddIcon from '@mui/icons-material/Add';

const FollowDiv = ({takipciSayisi}:any)=> {
    return (
        <div className="w-[100%] mt-4 bg-[#22e5de] hover:bg-[#685EFF] p-[5px] rounded-[5px] flex items-center justify-center content-center">
            <Link href='/' className="flex flex-row justify-center items-center content-center py-[2px]">
                <span className="text-[20px] leading-[20px] h-[20px] text-white flex items-center justify-center"><AddIcon/></span>
                <span className="text-[16px] leading-[16px] h-[16px] text-white font-semibold flex flex-row items-center justify-center">TAKİP ET ({takipciSayisi})</span>
            </Link>
        </div>
    )
}

export default FollowDiv;