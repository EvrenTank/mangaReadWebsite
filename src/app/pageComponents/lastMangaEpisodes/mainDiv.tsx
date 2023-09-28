import PageNumberSelector from "./pageNumberSelector/pageNumberSelector";
import MangaCardList from "./mangaCard/mangacardList";

const MainDiv = () => {
    return (
        <div className="w-[50vw] ml-[25vw]" >
        <MangaCardList/>
        <PageNumberSelector/>
        </div>
        
    );
}

export default MainDiv;