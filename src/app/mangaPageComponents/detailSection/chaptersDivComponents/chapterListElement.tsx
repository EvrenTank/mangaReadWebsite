import Link from "next/link";
import ToggleDiv from "./toggleDiv";

const ChapterListElement = ({episodeNumber,episodeTitle,okunmaSayisi,eklenmeTarihi}:any) => {
    return (
        <li className=" group h-[42px] leading-[42px] text-white rounded-[5px] relative">
            <Link href='/' className="text-[12px] flex items-center rounded-[5px] max-[550px]:text-[9px] ">
                <span className="group-hover:bg-[#A5B5F7] inline-block w-1/6 text-[14px] rounded-s-[5px] bg-[#cdd4ef] text-center font-[500]">{episodeNumber}</span>
                <span className="group-hover:bg-[#97A6E4] flex flex-row  justify-between w-10/12 px-[10px] bg-[#c0c7e3] rounded-e-[5px]">
                <span className="group-hover:bg-[#97A6E4] inline-block text-ellipsis   bg-[#c0c7e3]">{episodeTitle}</span>
                <span className="group-hover:bg-[#97A6E4] inline-block text-ellipsis bg-[#c0c7e3] rounded-e-[5px] ">{okunmaSayisi}, {eklenmeTarihi}</span>
                </span>
 
            </Link>
            <div id='toggledivkapsayandiv' className="border-[1px] border-[#3F3A87] w-[80px]  bg-white absolute top-[-12px] right-[-8px] rounded-[5px]">
                <ToggleDiv></ToggleDiv>
            </div>
        </li>
    )
}
export default ChapterListElement;