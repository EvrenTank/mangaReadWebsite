import PageNumberSelector from "@/app/pageComponents/lastMangaEpisodes/pageNumberSelector/pageNumberSelector";
import ChapterListElement from "./chaptersDivComponents/chapterListElement";

const ChaptersDiv = () => {
    return (
        <div className="w-[100%] p-[10px] flex flex-col items-center bg-white mt-[20px]">
            <ul className='w-[100%] h-full grid grid-cols-2 gap-4'>
            <ChapterListElement episodeNumber='100' episodeTitle='Mücadele' okunmaSayisi='11200' eklenmeTarihi='08.09.2023'></ChapterListElement>
            <ChapterListElement episodeNumber='100' episodeTitle='Mücadele' okunmaSayisi='11200' eklenmeTarihi='08.09.2023'></ChapterListElement>
            <ChapterListElement episodeNumber='100' episodeTitle='Mücadele' okunmaSayisi='11200' eklenmeTarihi='08.09.2023'></ChapterListElement>
            <ChapterListElement episodeNumber='100' episodeTitle='Mücadele' okunmaSayisi='11200' eklenmeTarihi='08.09.2023'></ChapterListElement>
            <ChapterListElement episodeNumber='100' episodeTitle='Mücadele' okunmaSayisi='11200' eklenmeTarihi='08.09.2023'></ChapterListElement>
            <ChapterListElement episodeNumber='100' episodeTitle='Mücadele' okunmaSayisi='11200' eklenmeTarihi='08.09.2023'></ChapterListElement>
            <ChapterListElement episodeNumber='100' episodeTitle='Mücadele' okunmaSayisi='11200' eklenmeTarihi='08.09.2023'></ChapterListElement>
            <ChapterListElement episodeNumber='100' episodeTitle='Mücadele' okunmaSayisi='11200' eklenmeTarihi='08.09.2023'></ChapterListElement>
            </ul>
            <PageNumberSelector />


        </div>
    )

}
export default ChaptersDiv;