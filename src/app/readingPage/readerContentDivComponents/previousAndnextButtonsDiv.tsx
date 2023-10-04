import Link from "next/link";

const PreviousandNextButtonsDiv = ()=> {
    return (
        <div className="w-full mb-[40px] flex text-white text-[14px] flex-row justify-between text-center">
            <Link href='/' className="w-[20%]"><div className="w-[100%] min-w-[200px] py-[10px] bg-[#17a2b8] hover:bg-[#148FA2] duration-300 rounded-[5px]">Önceki Bölüm</div></Link>
            <Link href='/' className="w-[20%]"><div className="w-[100%] min-w-[200px] py-[10px] bg-[#17a2b8] hover:bg-[#148FA2] duration-300 rounded-[5px]">Sonraki Bölüm</div></Link>
        </div>
    )
}

export default PreviousandNextButtonsDiv;
