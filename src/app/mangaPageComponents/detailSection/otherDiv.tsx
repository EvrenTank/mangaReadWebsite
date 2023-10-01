import Link from "next/link";

const OtherDiv = ({nedir,goruntuleme,yayinYili,ceviriTamamlanmis,yayinTamamlanmis,kategori,ceviriGrubu}:any) => {
    return (
        <div className="flex flex-col gap-2 bg-white p-[10px] rounded-[5px]">
            <div className="grid grid-cols-3 gap-2">
                <div className="bg-[#f0f3ff] rounded-[5px] p-[10px]">
                    <span className='block text-[14px] text-[#8992b7] mb-[5px]'>Nedir</span>
                    <span className='block text-[14px] text-[#32323c]'>{nedir}</span>
                </div>
                <div className="bg-[#f0f3ff] rounded-[5px] p-[10px]">
                    <span className='block text-[14px] text-[#8992b7] mb-[5px]'>Görüntüleme</span>
                    <span className='block text-[14px] text-[#32323c]'>{goruntuleme}</span>                   
                </div>
                <div className="bg-[#f0f3ff] rounded-[5px] p-[10px]">
                    <span className='block text-[14px] text-[#8992b7] mb-[5px]'>Yayınlanma Yılı</span>
                    <span className='block text-[14px] text-[#32323c]'>{yayinYili}</span>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-2 ">
                <div className="bg-[#f0f3ff] rounded-[5px] p-[10px]">
                    <span className='block text-[14px] text-[#8992b7] mb-[5px]'>Çeviri Durumu</span>
                    <span className={`py-[3px] px-[5px] rounded-[3px] text-[12px] text-white uppercase font-semibold ${ceviriTamamlanmis ? 'bg-[#9fe522]':'bg-[#22e5de]'}`}>{ceviriTamamlanmis ? 'Tamamlanmış' : 'Devam EDİYOR' }</span>
                </div>
                <div className="bg-[#f0f3ff] rounded-[5px] p-[10px]">
                    <span className='block text-[14px] text-[#8992b7] mb-[5px]'>Yayınlanması</span>
                    <span className={`py-[3px] px-[5px] rounded-[3px] text-[12px] text-white uppercase font-semibold ${yayinTamamlanmis ? 'bg-[#9fe522]':'bg-[#22e5de]'}`}>{yayinTamamlanmis ? 'Tamamlanmış':'Devam EDİYOR'}</span>
                </div>

            </div>
            <div className="grid grid-cols-2 gap-2">
                <div className="bg-[#f0f3ff] rounded-[5px] p-[10px]">
                    <span className='block text-[14px] text-[#8992b7] mb-[5px]'>Kategori</span>
                    <span className='block text-[14px] text-[#32323c]'>
                    {
                        kategori.map((category:string,index:number)=>{
                            return(
                                <Link key={index} href={`/${category}`}>{category} </Link>
                            )
                        })
                    }
                    </span>
                </div>
                <div className="bg-[#f0f3ff] rounded-[5px] p-[10px]">
                    <span className='block text-[14px] text-[#8992b7] mb-[5px]'>Çeviri Grubu</span>
                    <span className='block text-[14px]'>{ceviriGrubu}</span>
                </div>                
            </div>
        </div>

    )
}

export default OtherDiv;