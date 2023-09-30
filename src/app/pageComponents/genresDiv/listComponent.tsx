/* bu li elementlerini ayri bir react component olarak ayarliyorum. Cunku ileride 
backend icin kullanirken proplarini kullanan fonksiyonlar turetmem gerekebilir.*/

import Link from "next/link"

const ListComponent = ({index,genre}:any) => {
    return (
        <li key={index} className= {` group hover:bg-[#22e5de] p-[4px] border-[1px] ${index == 1 && 'border-t-0'} first:border-none border-b-0 nth-child(2) border-r-0 odd:border-l-0 overflow-hidden text-ellipsis flex items-center`}
      >
            <Link href='/header' 
            className=' group-hover:text-white  flex items-center text-[14px] text-[#32323c] leading-[20px]
            before:content-["\1F892"] before:text-[24px] before:text-[#32323c] 
            group-hover:before:text-white before:m-[5px] ' >{genre}</Link>
        </li>
    )
}

export default ListComponent;