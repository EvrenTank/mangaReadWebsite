import PageNumberSelector from "./pageNumberSelector/pageNumberSelector";
import MangaCardList from "./mangaCard/mangacardList";
import GenresDiv from "../genresDiv/genresDiv";
import TopDiv from "../topFiveSection/topFiveDiv";

const MainDiv = () => {
    return (
        <div className="w-[100%] flex row" >
            <div className='w-[65%]'>
            <MangaCardList/>
            <PageNumberSelector/>
            </div>
            <div className="w-[35%]">
            <GenresDiv/>
            <TopDiv/>
            </div>

        </div>
        
    );
}

export default MainDiv;