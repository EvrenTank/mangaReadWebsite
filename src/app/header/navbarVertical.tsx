import Link from "next/link";

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
            <div className="w-[100vw] flex flex-col justify-between">
            <form className=' h-full w-[100%] flex content-between items-center '>
                <input  type='text' placeholder="Manga Ara" required
                className="p-[10px] mr-[10px] ml-[15px] outline-none m-0 w-[85%]"
                ></input>
                <button type='submit'>GÖNDER</button>
            </form>
            <button className="w-[100%] mt-[15px] mb-[15px] border-[1px] h-[40px]" type="button">GİRİŞ YAP</button>
            </div>
        </nav>
    );
};
export default NavbarVertical;