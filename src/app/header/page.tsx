import Logo from "./logo";
import Header from "./header";
import MangaSlider from "../pageComponents/mangaSlider/mangaSlider";
import MainDiv from "../pageComponents/lastMangaEpisodes/mainDiv";

const Home = ()=>{
    return (
      <>
      <Header/>
      <MangaSlider/>
      <MainDiv/>
      </>
    );
}
export default Home;