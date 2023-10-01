import DetailMainDiv from "./detailSection/detailMainDiv";
const MainDiv = () => {
    return (
        <div id="container" className="w-[90%] relative left-[5%] flex justify-center items-center pt-[30px]">
            <DetailMainDiv imgSrc='/detailSectionImages/onepiece.jpg' mangaName='One Piece'/>
        </div>
    )
}

export default MainDiv;