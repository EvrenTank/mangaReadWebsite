import Card from "./mangaCard";
import PageNumberSelector from "../pageNumberSelector/pageNumberSelector";
const MangaCardList = () => {
    return (
        <div className="w-[100%] border-2 grid grid-cols-4 p-[15px] gap-[15px] max-[800px]:grid-cols-2 max-[1200px]:grid-cols-3  relative " >
            <Card imgSrc='/lastMangaEpisodes/naruto.jpg' mangaName='Naruto Shippuden' addingDate='1 gün' episodeNumber='700'/>
            <Card imgSrc='/lastMangaEpisodes/onepiece.jpg' mangaName='One Piece' addingDate='2 gün' episodeNumber='1200'/>
            <Card imgSrc='/lastMangaEpisodes/onepunchman.jpg' mangaName='One Punch Man' addingDate='2 gün' episodeNumber='198'/>
            <Card imgSrc='/lastMangaEpisodes/bleach.jpg' mangaName='Bleach' addingDate='3 gün' episodeNumber='641'/>
            <Card imgSrc='/lastMangaEpisodes/beelzebub.jpg' mangaName='Beelzebub' addingDate='4 gün' episodeNumber='273'/>
            <Card imgSrc='/lastMangaEpisodes/blackclover.jpg' mangaName='Black Clover' addingDate='4 gün' episodeNumber='352'/>
            <Card imgSrc='/lastMangaEpisodes/naruto.jpg' mangaName='Naruto Shippuden' addingDate='4 gün' episodeNumber='699'/>
            <Card imgSrc='/lastMangaEpisodes/onepiece.jpg' mangaName='One Piece' addingDate='5 gün' episodeNumber='1199'/>
            <Card imgSrc='/lastMangaEpisodes/onepunchman.jpg' mangaName='One Punch Man' addingDate='6 gün' episodeNumber='197'/>
            <Card imgSrc='/lastMangaEpisodes/bleach.jpg' mangaName='Bleach' addingDate='6 gün' episodeNumber='640'/>
            <Card imgSrc='/lastMangaEpisodes/beelzebub.jpg' mangaName='Beelzebub' addingDate='7 gün' episodeNumber='272'/>
            <Card imgSrc='/lastMangaEpisodes/blackclover.jpg' mangaName='Black Clover' addingDate='7 gün' episodeNumber='351'/>

        </div>
        
    );
}

export default MangaCardList;