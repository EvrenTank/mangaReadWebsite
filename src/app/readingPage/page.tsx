'use client';
import ReaderContentDiv from "./readerContentDiv";
import TopDiv from "./topDiv"
import {useState} from 'react';

const Page =()=> {

    const [ormp,setOrmp] = useState(false);  //ormp: open reading mode page
    const [tektek,setTektek] = useState(true); //tektek: teker teker okuma modu

    return (
        <>
        <TopDiv mangaName='Naruto' ormp={ormp} setOrmp={setOrmp} tektek={tektek} setTektek={setTektek}/>
        <ReaderContentDiv ormp={ormp} tektek={tektek} setTektek={setTektek} />
        </>
    )
}
export default Page;