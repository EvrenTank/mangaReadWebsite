const ImageDiv =  ({imgSrc,mangaName}:any) => {
    return (
        <div className="w-[90%] h-[400px] rounded-[5px] " 
        style={{
         backgroundImage: `url(${imgSrc})`,
         backgroundSize: "cover",
         backgroundPositionX: 'center',
     }}
 >
     <div className='w-full h-full relative rounded-[5px]'
     style={{
         background: 'linear-gradient(to bottom,rgba(104,94,255,0) 0%,rgba(104,94,255,0.85) 100%)'
     }}>
         <div className='w-full h-[25%] p-[20px] absolute bottom-0 tracking-wider'>
             <span className="font-semibold text-white text-[20px]">{mangaName}</span>
         </div>
     </div>
 </div>
    )
}

export default ImageDiv;