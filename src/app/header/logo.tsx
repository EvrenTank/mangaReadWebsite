import Image from "next/image";

const Logo = ()=>{
    return (
    <div className='w-[200px] min-w-[200px] h-full hover:cursor-pointer hover:shadow-lg'>
        <Image  className='w-[100%] h-full' src='/naruto.png' width={300} height={300} alt="Website logosu"   priority></Image>
    </div>
    );
}
export default Logo;