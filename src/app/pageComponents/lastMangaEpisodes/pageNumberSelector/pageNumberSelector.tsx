'use client'

import SelectorDiv from './selectorDiv';
import {useState} from 'react';

const PageNumberSelector = ({index,setIndex,insideComponents,componentNumberInaList}:any) => {
    
    const [firstpagenumber,setFirstpagenumber] = useState(1);
    const neededPageNumber = Math.ceil(insideComponents.length / componentNumberInaList);
    console.log("componentNumberInaList", componentNumberInaList);
    console.log("insideComponents.length", insideComponents.length);
    console.log("neededPageNumber", neededPageNumber);
    //const deneme = neededPageNumber > 9 ?
    var before = 0;
    var after = 0;
    if(neededPageNumber > 8) {
        if(firstpagenumber < 5){
            before = firstpagenumber -1;
        }
        else if(firstpagenumber >= 5){
            before = 4;
        }
        if((neededPageNumber -firstpagenumber)<4){
            after = neededPageNumber -firstpagenumber;
            before = 8-after;
        }
        else if(neededPageNumber-firstpagenumber >= 4){
            after = 8-before;
        }
    }
    else if(neededPageNumber <= 8){
        before = firstpagenumber-1;
        after = neededPageNumber - before-1;
    }




    const beforeArray = [];
    for (let i = 0; i < before; i++) {
    beforeArray.push(<SelectorDiv 
        pageNumber={firstpagenumber-before+i}
        firstpagenumber={firstpagenumber}
        setFirstpagenumber={setFirstpagenumber}
        setIndex={setIndex}
        neededPageNumber={neededPageNumber}
        ></SelectorDiv>);
    }
    const afterArray = [];
    for (let i = 0; i < after; i++) {
    afterArray.push(<SelectorDiv 
        pageNumber={firstpagenumber+(i+1)}
        firstpagenumber={firstpagenumber}
        setFirstpagenumber={setFirstpagenumber}
        setIndex={setIndex}
        neededPageNumber={neededPageNumber}
        ></SelectorDiv>);
    }
    return (

       <div className={`w-[85%] bg-white gap-[10px] flex flex-row justify-center flex-wrap mt-[10px]`}>
        <SelectorDiv iconOption='Left' firstpagenumber={firstpagenumber}
        onClickEvent={()=>{
            if(firstpagenumber > 1)
            {
                setFirstpagenumber(firstpagenumber => firstpagenumber-1);
                setIndex((index:number) => index-1);
            }
        }}
        />
        {
        beforeArray.map((selectorDiv,index:number) =>{
            return (
                selectorDiv
            )
        })
        }
        <SelectorDiv pageNumber={firstpagenumber} firstpagenumber={firstpagenumber} setFirstpagenumber={setFirstpagenumber} setIndex={setIndex} neededPageNumber={neededPageNumber} />
        {
        afterArray.map((selectorDiv,index:number) =>{
            return (
                selectorDiv
            )
        })
        }
        <SelectorDiv iconOption='Right' firstpagenumber={firstpagenumber}
                onClickEvent={()=>{
                    if(neededPageNumber > firstpagenumber){
                    setTimeout(()=>{
                      setFirstpagenumber(firstpagenumber=>firstpagenumber+1);
                      setIndex((index:number)=>index+1);
                    },1000);
                }
                }}
                />

        </div>
    )
}

export default PageNumberSelector;