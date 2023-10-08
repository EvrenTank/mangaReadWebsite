import MangaPagesDiv from "./readerContentDivComponents/mangaPagesDiv";
import PreviousandNextButtonsDiv from "./readerContentDivComponents/previousAndnextButtonsDiv";

const ReaderContentDiv = ({ormp,tektek,setTektek,imgSrc}:any)=> {

    return (
        <div className="w-full flex justify-center bg-black pb-[50px]">
            <div id='PreviousandNextButtonsDiv ve MangaPagesDiv container' 
            className={`w-[70%] max-w-[1000px] ${ormp && 'blur-[4px]'} max-[1000px]:w-[100%] `}>
            <PreviousandNextButtonsDiv/>
            <MangaPagesDiv episodeImagesFilePath='/mangaEpisodes/naruto/episode1' tektek={tektek} imgSrc={imgSrc}/>
            </div>
        </div>
    )
}

export default ReaderContentDiv;
