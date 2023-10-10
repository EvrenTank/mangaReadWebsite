import Link from "next/link";

const PreviousandNextButtonsDiv = ({episodeNumber}:any)=> {
    return (
        <div className="w-full my-[40px] flex text-white text-[14px] flex-row max-[1000px]:flex-col justify-between text-center gap-y-4">
            <Link href='/' className="w-[20%] min-w-[200px] max-[1000px]:w-[100%] "><div className="w-[100%] py-[10px] bg-[#17a2b8] hover:bg-[#148FA2] duration-300 rounded-[5px]">Önceki Bölüm</div></Link>
            <Link href='/' className="w-[20%] min-w-[200px] max-[1000px]:w-[100%]"><div className="w-[100%]  py-[10px] bg-[#17a2b8] hover:bg-[#148FA2] duration-300 rounded-[5px]">Sonraki Bölüm</div></Link>
        </div>
    )
}

export default PreviousandNextButtonsDiv;
