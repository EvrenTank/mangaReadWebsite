import Link from "next/link";

const FollowDiv = ({takipciSayisi}:any)=> {
    return (
        <div className="w-[100%] mt-4 bg-[#22e5de] hover:bg-[#685EFF] p-[5px] rounded-[5px] flex items-center justify-center">
            <Link href='/' className="flex flex-row justify-center items-center">
                <span className="text-[20px] leading-[30px] text-white flex items-center justify-center"></span>
                <span className="text-[14px] leading-[30px] text-white font-semibold flex items-center justify-center">TAKİP ET ({takipciSayisi})</span>
            </Link>
        </div>
    )
}

export default FollowDiv;