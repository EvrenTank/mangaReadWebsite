/* bu li elementlerini ayri bir react component olarak ayarliyorum. Cunku ileride 
backend icin kullanirken proplarini kullanan fonksiyonlar turetmem gerekebilir.*/

import Link from "next/link"

const ListComponent = ({genre,index}:any) => {
    return (
        <li className= {` group hover:bg-[#22e5de] p-[4px] border-[1px] ${index == 1 && 'border-t-0'} first:border-0 border-b-0 
        border-r-0 odd:border-l-0 flex items-center max-[1250px]:border-0 max-[1250px]:border-b-[1px] max-[1250px]:first:border-b-[1px]
        max-[1250px]:last:border-b-0  `}
      >
            <Link href='/header' 
            className=' group-hover:text-white  flex items-center text-[14px] text-[#32323c] leading-[20px] 
            before:content-["\1F892"] before:text-[24px] before:text-[#32323c] 
            group-hover:before:text-white before:m-[5px] ' >{genre}</Link>
        </li>
    )
}

export default ListComponent;