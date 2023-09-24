import Link from "next/link";

const Navbar = ({clickEvent}:any) => {



    return (
        <>
        <nav className='flex flex-row grow  justify-around items-center bg-violet-600 max-[1000px]:hidden'>
            <ul className=" h-[100%] flex flex-row items-stretch ">
                <li className='text-white pr-[10px] pl-[10px] hover:bg-violet-800 border-l-[1px] font-bold text-[14px] flex justify-center items-center'><Link href="https://anizm.net" target="_blank">ANİME</Link></li>
                <li className='text-white pr-[10px] pl-[10px] hover:bg-violet-800 border-l-[1px] font-bold text-[14px] flex justify-center items-center'><Link href="https://felisnovel.com" target="_blank">NOVEL OKU</Link></li>
                <li className='text-white pr-[10px] pl-[10px] hover:bg-violet-800 border-l-[1px] font-bold text-[14px] flex justify-center items-center'><Link href="https://yeppuu.com/" target="_blank">ANİME HABER</Link></li>
                <li className='text-white pr-[10px] pl-[10px] hover:bg-violet-800 border-l-[1px] font-bold text-[14px] flex justify-center items-center'><Link href='https://serimanga.com/fansublar' target="_blank">ÇEVİRİ GRUPLARI</Link></li>
                <li className='text-white pr-[10px] pl-[10px] hover:bg-violet-800 border-l-[1px] font-bold text-[14px] flex justify-center items-center'><Link href='https://serimanga.com/sikca-sorulan-sorular' target="_blank">S.S.S</Link></li>
                <li className='text-white pr-[10px] pl-[10px] hover:bg-violet-800 border-l-[1px] font-bold text-[14px] flex justify-center items-center'><Link href='https://serimanga.com/mangalar' target="_blank">MANGA LİSTESİ</Link></li>
                <li className='text-white pr-[10px] pl-[10px] hover:bg-violet-800 border-l-[1px] font-bold text-[14px] flex justify-center items-center'><Link href=''>GECE MODU</Link></li>
            </ul>
            <div className="flex justify-between">
            <form className=' mr-[20px] h-full flex justify-center items-center '>
                <input  type='text' placeholder="Manga Ara" required
                className="p-[10px]  outline-none m-0 "
                ></input>
                <button type='submit'></button>
            </form>
            <button type="button">GİRİŞ YAP</button>
            </div>
        </nav>
        <nav className='min-[1001px]:hidden max-[1001px]:flex h-[100%]  justify-center items-center bg-violet-600 '
        onClick={clickEvent}>
        <div className='h-[50%] aspect-square bg-red-600 mr-[30px]'>
        </div>
        </nav>
        </>
    );
};
export default Navbar;