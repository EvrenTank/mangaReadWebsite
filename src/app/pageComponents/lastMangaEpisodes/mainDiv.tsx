import PageNumberSelector from "./pageNumberSelector";
import MangaCardList from "./mangacardList";

const MainDiv = () => {
    return (
        <div className="w-[50vw] ml-[25vw]" >
        <MangaCardList/>
        <PageNumberSelector/>
        </div>
        
    );
}

export default MainDiv;