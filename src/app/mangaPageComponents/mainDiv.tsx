import ChaptersDiv from "./detailSection/chaptersDiv";
import DetailMainDiv from "./detailSection/detailMainDiv";
const MainDiv = () => {
    return (
        <div id="container" className="w-[90%] left-[5%] relative flex flex-col justify-center items-end max-[1000px]:items-center  pt-[30px]">
            <DetailMainDiv imgSrc='/detailSectionImages/naruto.jpg' mangaName='Naruto'/>
        </div>
    )
}

export default MainDiv;