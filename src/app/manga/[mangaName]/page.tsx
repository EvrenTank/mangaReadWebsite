import Header from "../../header/header";
import MainDiv from "../../mangaPageComponents/mainDiv";
const Page = ({params}:{
    params : {
        mangaName:string
    }
}) => {
    return (
        <>
        <Header/>
        <MainDiv mangaName={params.mangaName} />
        </>
    )
}

export default Page;