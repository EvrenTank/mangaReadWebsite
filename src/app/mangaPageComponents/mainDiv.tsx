import ChaptersDiv from "./detailSection/chaptersDiv";
import DetailMainDiv from "./detailSection/detailMainDiv";
const MainDiv = ({mangaName}:any) => {
    return (
        <div id="container" className="w-[90%] left-[5%] relative flex flex-col justify-center items-end max-[1000px]:items-center  pt-[30px]">
            <DetailMainDiv imgSrc={`/detailSectionImages/${mangaName}.jpg`} mangaName={mangaName}/>
        </div>
    )
}

export default MainDiv;