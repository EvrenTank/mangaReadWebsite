import Logo from "./logo";
import Header from "./header";
import MangaSlider from "../pageComponents/mangaSlider/mangaSlider";
import MainDiv from "../pageComponents/lastMangaEpisodes/mainDiv";
import TooltipTitle from "../pageComponents/lastMangaEpisodes/tooltipTitle";

const Home = ()=>{
    return (
      <>
      <Header/>
      <MangaSlider/>
      <MainDiv/>
      <TooltipTitle lastFiveEpisodes={[
        { number:'700', name:'İç Savaş', addingDate:'27.08.2023'},
        { number:'699', name:'Gerilim', addingDate:'27.08.2023'},
        { number:'698', name:'Geri Dönüş', addingDate:'27.08.2023'},
        { number:'697', name:'Saldırı:2', addingDate:'27.08.2023'},
        { number:'696', name:'Saldırı:1', addingDate:'27.08.2023'}
      ]} />
      </>
    );
}
export default Home;