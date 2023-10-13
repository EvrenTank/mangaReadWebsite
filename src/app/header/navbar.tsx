import Link from "next/link";
import MenuIcon from '@mui/icons-material/Menu';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
const Navbar = ({clickEvent,hideEvent}:any) => {

    return (
        <>
        <nav className='flex flex-row grow  justify-around items-center bg-violet-600 max-[1000px]:hidden '>
            <ul className=" h-[100%] flex flex-row items-stretch ">
                <li className='text-white pr-[7px] pl-[7px] hover:bg-violet-800 border-l-[1px] font-semibold text-[13px] flex justify-center items-center'>
                    <Link className='max-[1200px]:w-min' href="https://anizm.net" target="_blank">ANİME</Link>
                    </li>
                <li className='text-white pr-[7px] pl-[7px] hover:bg-violet-800 border-l-[1px] font-semibold text-[13px] flex justify-center items-center'>
                    <Link className='max-[1200px]:w-min' href="https://felisnovel.com" target="_blank">NOVEL OKU</Link>
                    </li>
                <li className='text-white pr-[7px] pl-[7px] hover:bg-violet-800 border-l-[1px] font-semibold text-[13px] flex justify-center items-center'>
                    <Link className='max-[1200px]:w-min' href="https://yeppuu.com/" target="_blank">ANİME HABER</Link>
                    </li>
                <li className='text-white pr-[7px] pl-[7px] hover:bg-violet-800 border-l-[1px] font-semibold text-[13px] flex justify-center items-center'>
                    <Link className='max-[1200px]:w-min' href='https://serimanga.com/fansublar' target="_blank">ÇEVİRİ GRUPLARI</Link>
                    </li>
                <li className='text-white pr-[7px] pl-[7px] hover:bg-violet-800 border-l-[1px] font-semibold text-[13px] flex justify-center items-center'>
                    <Link className='max-[1200px]:w-min' href='https://serimanga.com/sikca-sorulan-sorular' target="_blank">S.S.S</Link>
                    </li>
                <li className='text-white pr-[7px] pl-[7px] hover:bg-violet-800 border-l-[1px] font-semibold text-[13px] flex justify-center items-center'>
                    <Link className='max-[1200px]:w-min' href='https://serimanga.com/mangalar' target="_blank">MANGA LİSTESİ</Link>
                    </li>
                <li className='text-white pr-[7px] pl-[7px] hover:bg-violet-800 border-l-[1px] font-semibold text-[13px] flex justify-center items-center border-r-[1px] mr-[5px]'>
                    <Link className='max-[1200px]:w-min' href=''>GECE MODU</Link>
                    </li>
            </ul>
            <div className="flex justify-between items-center">
            <form className=' mr-[20px]  h-full flex justify-center items-center relative'>
                <input  type='text' placeholder="Manga Ara" required
                className=" max-w-[220px] min-w-[110px] w-[15vw] p-[10px] text-[90%] outline-none m-0 bg-[rgba(0,0,0,0.2)] rounded-md text-white placeholder:text-white placeholder:text-[90%]"
                ></input>
                <button type='submit' className="absolute right-0 h-[100%] aspect-square"> 
                <SearchRoundedIcon  className="text-[28px] text-white"/></button>
            </form>
            <button type="button" className=" w-[120px] p-[10px] text-[80%] rounded-[20px] text-violet-800 font-bold bg-white tracking-wider
            hover:bg-[#22e5de] hover:text-white ">
                GİRİŞ YAP</button>
            </div>
        </nav>
        <nav className='min-[1001px]:hidden max-[1001px]:flex h-[100%]  justify-center items-center bg-violet-600 '
        onClick={()=>{
            hideEvent();
            clickEvent();
        }}>
        <div className='h-[50%] aspect-square mr-[30px] flex justify-center rounded-md items-center bg-[rgba(0,0,0,0.2)]'>
            <MenuIcon className="w-[60%] h-[60%] text-white"  />
        </div>
        </nav>
        </>
    );
};
export default Navbar;