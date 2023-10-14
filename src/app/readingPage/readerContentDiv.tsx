import MangaPagesDiv from "./readerContentDivComponents/mangaPagesDiv";
import PreviousandNextButtonsDiv from "./readerContentDivComponents/previousAndnextButtonsDiv";

const ReaderContentDiv = ({ormp,tektek,setTektek,imgSrc,episodeNumber,pageNumber,mangaName,
    fileList,biggestEpisodeNumber,smallestEpisodeNumber}:any)=> {

    return (
        <div className="w-full flex justify-center bg-black pb-[50px]">
            <div id='PreviousandNextButtonsDiv ve MangaPagesDiv container' 
            className={`w-[70%] max-w-[1000px] ${ormp && 'blur-[4px]'} max-[1000px]:w-[100%] `}>
            <PreviousandNextButtonsDiv episodeNumber={episodeNumber} mangaName={mangaName} tektek={tektek} 
            sen={smallestEpisodeNumber} ben={biggestEpisodeNumber} />
            <MangaPagesDiv  
            tektek={tektek} imgSrc={imgSrc} pageNumber={pageNumber} episodeNumber={episodeNumber} mangaName={mangaName} fileList={fileList} />
            </div>
        </div>
    )
} 

export default ReaderContentDiv;
