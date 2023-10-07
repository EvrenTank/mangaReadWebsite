import MangaPagesDiv from "./readerContentDivComponents/mangaPagesDiv";
import PreviousandNextButtonsDiv from "./readerContentDivComponents/previousAndnextButtonsDiv";

const ReaderContentDiv = ()=> {
    return (
        <div className="w-full flex justify-center bg-black pb-[50px]">
            <div id='PreviousandNextButtonsDiv ve MangaPagesDiv container' className='w-[70%] max-w-[800px] '>
            <PreviousandNextButtonsDiv/>
            <MangaPagesDiv episodeImagesFilePath='/mangaEpisodes/naruto/episode1'/>
            </div>
        </div>
    )
}

export default ReaderContentDiv;
