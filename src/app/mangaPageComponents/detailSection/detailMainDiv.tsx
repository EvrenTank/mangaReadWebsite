import OtherDiv from "./otherDiv";
import SubjectDiv from "./subjectDiv";
import ImageDiv from "./imageandratingDivComponents/imageDiv";
import RatingDiv from "./imageandratingDivComponents/ratingDiv";
import FollowDiv from "./imageandratingDivComponents/followDiv";
const DetailMainDiv = ({imgSrc,mangaName}:any) => {

    const details = {
        nedir:'Manga',
        goruntuleme:'10000',
        yayinYili:'2007',
        ceviriTamamlanmis:false,
        yayinTamamlanmis:true,
        kategori:['Aksiyon','Drama','Fantezi','Dövüş Sanatları','Shounen','Doğaüstü'],
        ceviriGrubu:'Bağımsız',
        konu:"Naruto serisine mini spin-off olarak çizilmiş manga. Naruto\'nun oğlunu ve gelecek nesil ninjaları konu almaktadır.",
        kullanilanOySayisi:1000,
        rating: 4.5,
        takipciSayisi: 270
    }

    return (
        <div id='detailMainDiv' className="w-[100%]  bg-white rounded-[5px] shadow-lg relative">
            <div id='imgveratingkartıkapsayandiv' className="w-[33%] p-[10px] max-w-[400px] rounded-[5px] flex flex-col absolute top-0 left-0 justify-center items-center">

                <RatingDiv kullanilanOySayisi={details.kullanilanOySayisi} rating={details.rating} />
                <ImageDiv imgSrc={imgSrc} mangaName={mangaName} />
                <FollowDiv takipciSayisi={details.takipciSayisi}/>
                <div className="w-[80%]"></div>

            </div>
            <div id='subjectdivveotherdivdivlerinikapsayandiv' className="w-[66%] h-full float-right  flex flex-row ">
                <div id='subjectdivikapsayandiv' className="w-[calc(50%-20px)] h-full mr-[40px]">
                    <SubjectDiv konu={details.konu}/>

                </div>
                <div id='otherdivikapsayandiv' className="w-[calc(50%-20px)] h-full">
                    <OtherDiv 
                    nedir={details.nedir} 
                    goruntuleme={details.goruntuleme}
                    yayinYili={details.yayinYili}
                    ceviriTamamlanmis={details.ceviriTamamlanmis}
                    yayinTamamlanmis={details.yayinTamamlanmis}
                    kategori={details.kategori}
                    ceviriGrubu={details.ceviriGrubu}
                    />
                </div>
            </div>
        </div>
    )
}

export default DetailMainDiv;