'use client'

import SelectorDiv from './selectorDiv';
import {useState} from 'react';

const PageNumberSelector = ({}:any) => {
    
    const [firstpagenumber,setFirstpagenumber] = useState(1);
    
    return (

       <div className={`w-[85%] bg-white gap-[10px] flex flex-row justify-center flex-wrap mt-[10px]`}>
        <SelectorDiv iconOption='Left' firstpagenumber={firstpagenumber}
        onClickEvent={()=>{
            if(firstpagenumber > 1)
            {
                setFirstpagenumber(firstpagenumber => firstpagenumber-1);
            }
        }}
        />
        <SelectorDiv pageNumber={firstpagenumber} firstpagenumber={firstpagenumber} setFirstpagenumber={setFirstpagenumber} />
        <SelectorDiv pageNumber={firstpagenumber+1} firstpagenumber={firstpagenumber} setFirstpagenumber={setFirstpagenumber}   />
        <SelectorDiv pageNumber={firstpagenumber+2} firstpagenumber={firstpagenumber} setFirstpagenumber={setFirstpagenumber} />
        <SelectorDiv pageNumber={firstpagenumber+3} firstpagenumber={firstpagenumber} setFirstpagenumber={setFirstpagenumber} />
        <SelectorDiv pageNumber={firstpagenumber+4} firstpagenumber={firstpagenumber} setFirstpagenumber={setFirstpagenumber} />
        <SelectorDiv pageNumber={firstpagenumber+5} firstpagenumber={firstpagenumber} setFirstpagenumber={setFirstpagenumber} />
        <SelectorDiv pageNumber={firstpagenumber+6} firstpagenumber={firstpagenumber} setFirstpagenumber={setFirstpagenumber} />
        <SelectorDiv pageNumber={firstpagenumber+7} firstpagenumber={firstpagenumber} setFirstpagenumber={setFirstpagenumber} />
        <SelectorDiv pageNumber={firstpagenumber+8} firstpagenumber={firstpagenumber} setFirstpagenumber={setFirstpagenumber} />
        <SelectorDiv pageNumber={firstpagenumber+9} firstpagenumber={firstpagenumber} setFirstpagenumber={setFirstpagenumber} />
        <SelectorDiv iconOption='Right' firstpagenumber={firstpagenumber}
                onClickEvent={()=>{
                    setFirstpagenumber(firstpagenumber=>firstpagenumber+1);
                }}
                />

        </div>
    )
}

export default PageNumberSelector;