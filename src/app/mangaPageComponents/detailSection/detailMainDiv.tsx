import OtherDiv from "./otherDiv";
import SubjectDiv from "./subjectDiv";

const DetailMainDiv = () => {

    const details = {
        nedir:'Manga',
        goruntuleme:'10000',
        yayinYili:'2007',
        ceviriTamamlanmis:false,
        yayinTamamlanmis:true,
        kategori:['Aksiyon','Drama','Fantezi','Dövüş Sanatları','Shounen','Doğaüstü'],
        ceviriGrubu:'Bağımsız',
        konu:"Naruto serisine mini spin-off olarak çizilmiş manga. Naruto\'nun oğlunu ve gelecek nesil ninjaları konu almaktadır."
    }

    return (
        <div id='detailMainDiv' className="w-[100%]  bg-white rounded-[5px] shadow-lg">
            <div className="w-[66%] h-full float-right  flex flex-row ">
                <div className="w-[calc(50%-20px)] h-full mr-[40px]">
                    <SubjectDiv konu={details.konu}/>

                </div>
                <div className="w-[calc(50%-20px)] h-full">
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