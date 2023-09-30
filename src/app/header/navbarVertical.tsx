import Link from "next/link";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const NavbarVertical = ({open}:any) => {
    return (
        // Bundaki acilisi daha sonradan serimanga.com'daki ile ayni yapmaya calismam lazim. Simdilik boyle kalsin.
        <nav className={`${open ? 'max-[1000px]:flex':'max-[1000px]:hidden'} 
                         ${!open && 'max-[1000px]:h-0'} 
                         ${open ? 'min-[1000px]:hidden':'min-[1000px]:hidden'} 
                         
                         flex-col  w-[100vw] justify-center items-center bg-violet-700  min-[1001px]:hidden'`}>
            <ul className="w-[100vw] flex flex-col">
                <li className='text-white p-[15px] w-[100vw] hover:bg-violet-800 border-l-[1px] font-bold text-[14px] flex justify-start items-center'><Link href="https://anizm.net" target="_blank">ANİME</Link></li>
                <li className='text-white p-[15px] w-[100vw] hover:bg-violet-800 border-l-[1px] font-bold text-[14px] flex justify-start items-center'><Link href="https://felisnovel.com" target="_blank">NOVEL OKU</Link></li>
                <li className='text-white p-[15px] w-[100vw] hover:bg-violet-800 border-l-[1px] font-bold text-[14px] flex justify-start items-center'><Link href="https://yeppuu.com/" target="_blank">ANİME HABER</Link></li>
                <li className='text-white p-[15px] w-[100vw] hover:bg-violet-800 border-l-[1px] font-bold text-[14px] flex justify-start items-center'><Link href='https://serimanga.com/fansublar' target="_blank">ÇEVİRİ GRUPLARI</Link></li>
                <li className='text-white p-[15px] w-[100vw] hover:bg-violet-800 border-l-[1px] font-bold text-[14px] flex justify-start items-center'><Link href='https://serimanga.com/sikca-sorulan-sorular' target="_blank">S.S.S</Link></li>
                <li className='text-white p-[15px] w-[100vw] hover:bg-violet-800 border-l-[1px] font-bold text-[14px] flex justify-start items-center'><Link href='https://serimanga.com/mangalar' target="_blank">MANGA LİSTESİ</Link></li>
                <li className='text-white p-[15px] w-[100vw] hover:bg-violet-800 border-l-[1px] font-bold text-[14px] flex justify-start items-center'><Link href=''>GECE MODU</Link></li>
            </ul>
            <div className="w-[100vw] flex flex-col justify-between mb-[10px]">
            <form className=' w-[100%]  h-full flex justify-center items-center relative'>
                <input  type='text' placeholder="Manga Ara" required
                className="p-[15px] text-[90%]  w-[100%]  outline-none m-0 bg-[rgba(0,0,0,0.2)] rounded-md text-white placeholder:text-white placeholder:text-[90%]"
                ></input>
                <button type='submit' className="absolute right-[10px] h-[100%] aspect-square flex justify-center items-center"> 
                <SearchRoundedIcon  className="text-[28px] text-white"/></button>
            </form>
            <button type="button" className=" h-[40px] p-[7px] text-[80%] mt-[10px] rounded-[20px] text-violet-800 font-bold bg-white tracking-wider
            hover:bg-[#22e5de] mx-[15px] hover:text-white">
                GİRİŞ YAP</button>
            </div>            
        </nav>
    );
};
export default NavbarVertical;