import DetailMainDiv from "./detailSection/detailMainDiv";
const MainDiv = () => {
    return (
        <div id="container" className="w-[90%] relative left-[5%] flex justify-center items-center pt-[30px]">
            <DetailMainDiv imgSrc='/detailSectionImages/naruto.jpg' mangaName='Naruto'/>
        </div>
    )
}

export default MainDiv;