import Link from "next/link";
import MenuIcon from '@mui/icons-material/Menu';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';

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
            <form className=' mr-[20px] h-full flex justify-center items-center relative'>
                <input  type='text' placeholder="Manga Ara" required
                className="p-[10px]  outline-none m-0 bg-[rgba(0,0,0,0.2)] rounded-md text-white placeholder:text-white"
                ></input>
                <button type='submit' className="absolute right-0 h-[100%] aspect-square"> 
                <SearchTwoToneIcon  className="text-[35px] text-white"/></button>
            </form>
            <button type="button" className="p-[7px] text-[80%] rounded-[20px] text-violet-800 font-bold bg-white tracking-wider
            hover:bg-[#22e5de] hover:text-white">
                GİRİŞ YAP</button>
            </div>
        </nav>
        <nav className='min-[1001px]:hidden max-[1001px]:flex h-[100%]  justify-center items-center bg-violet-600 '
        onClick={clickEvent}>
        <div className='h-[50%] aspect-square mr-[30px] flex justify-center rounded-md items-center bg-[rgba(0,0,0,0.2)]'>
            <MenuIcon className="w-[60%] h-[60%] text-white "/>
        </div>
        </nav>
        </>
    );
};
export default Navbar;