"use client";
import PageNumberSelector from "./pageNumberSelector/pageNumberSelector";
import MangaCardList from "./mangaCard/mangacardList";
import GenresDiv from "../genresDiv/genresDiv";
import TopFiveDiv from "../topFiveSection/topFiveDiv";
import {useState} from "react";
const MainDiv = ({lastEpisodes}:any) => {

    const [index,setIndex] = useState(1);

    return (
        <div className="w-[100%] flex flex-row pt-[20px] max-[1000px]:flex-col  " >
            <div className='w-[65%] flex flex-col items-center border-2 max-[1000px]:w-full '>
            <MangaCardList index={index} lastEpisodes={lastEpisodes} />
            <PageNumberSelector index={index} setIndex={setIndex} insideComponents={lastEpisodes} componentNumberInaList={12} />
            </div>
            <div className="w-[35%] flex flex-col items-center max-[1000px]:w-[100%] ">
            <GenresDiv/>
            <TopFiveDiv lastEpisodes={lastEpisodes} />
            </div>

        </div>
        
    );
}

export default MainDiv;