import Logo from "./logo";
import Header from "./header";
import MangaSlider from "../pageComponents/mangaSlider/mangaSlider";
import MainDiv from "../pageComponents/lastMangaEpisodes/mainDiv";
import TooltipTitle from "../pageComponents/lastMangaEpisodes/tooltipTitle";
import TopDiv from "../pageComponents/topFiveSection/topFiveDiv";

const Home = ()=>{
    return (
      <>
      <Header/>
      <MangaSlider/>
      <MainDiv/>
      <TopDiv/>
      </>
    );
}
export default Home;