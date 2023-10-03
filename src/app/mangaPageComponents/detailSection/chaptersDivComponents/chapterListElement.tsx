import Link from "next/link";

const ChapterListElement = ({episodeNumber,episodeTitle,okunmaSayisi,eklenmeTarihi}:any) => {
    return (
        <li className=" group h-[42px] leading-[42px] text-white rounded-[5px] ">
            <Link href='/' className="text-[12px] flex items-center rounded-[5px] ">
                <span className="group-hover:bg-[#A5B5F7] inline-block w-1/6 text-[14px] rounded-s-[5px] bg-[#cdd4ef] text-center font-[500]">{episodeNumber}</span>
                <span className="group-hover:bg-[#97A6E4] inline-block w-5/12 pl-[8px] bg-[#c0c7e3]">{episodeTitle}</span>
                <span className="group-hover:bg-[#97A6E4] inline-block w-5/12 bg-[#c0c7e3] rounded-e-[5px]">{okunmaSayisi}, {eklenmeTarihi}</span>

            
            </Link>
        </li>
    )
}
export default ChapterListElement;