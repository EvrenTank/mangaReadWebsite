import PageNumberSelector from "./pageNumberSelector/pageNumberSelector";
import MangaCardList from "./mangaCard/mangacardList";
import GenresDiv from "../genresDiv/genresDiv";
import TopDiv from "../topFiveSection/topFiveDiv";

const MainDiv = () => {
    return (
        <div className="w-[100%] flex flex-row pt-[20px] max-[1000px]:flex-col  " >
            <div className='w-[65%] flex flex-col items-center border-2 max-[1000px]:w-full '>
            <MangaCardList/>
            <PageNumberSelector/>
            </div>
            <div className="w-[35%] flex flex-col items-center max-[1000px]:w-[100%] ">
            <GenresDiv/>
            <TopDiv/>
            </div>

        </div>
        
    );
}

export default MainDiv;