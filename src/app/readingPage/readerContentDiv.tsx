import MangaPagesDiv from "./readerContentDivComponents/mangaPagesDiv";
import PreviousandNextButtonsDiv from "./readerContentDivComponents/previousAndnextButtonsDiv";

const ReaderContentDiv = ()=> {
    return (
        <div className="w-full flex justify-center">
            <div className='w-[50%] '>
            <PreviousandNextButtonsDiv/>
            <MangaPagesDiv episodeImagesFilePath='/mangaEpisodes/naruto/episode1'/>
            </div>
        </div>
    )
}

export default ReaderContentDiv;
