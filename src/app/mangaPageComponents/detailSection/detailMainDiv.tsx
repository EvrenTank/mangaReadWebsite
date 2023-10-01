import OtherDiv from "./otherDiv";
import SubjectDiv from "./subjectDiv";

const DetailMainDiv = ({imgSrc,mangaName}:any) => {

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
        <div id='detailMainDiv' className="w-[100%]  bg-white rounded-[5px] shadow-lg relative">
            <div id='imgveratingkartıkapsayandiv' className="w-[33%] p-[10px] max-w-[400px] rounded-[5px] flex flex-col absolute top-0 left-0 justify-center items-center">
                <div className="w-[90%]"></div>
                <div className="w-[90%] h-[400px] rounded-[5px] " 
                       style={{
                        backgroundImage: `url(${imgSrc})`,
                        backgroundSize: "cover",
                        backgroundPositionX: 'center',
                    }}
                >
                    <div className='w-full h-full relative '
                    style={{
                        background: 'linear-gradient(to bottom,rgba(104,94,255,0) 0%,rgba(104,94,255,0.85) 100%)'
                    }}>
                        <div className='w-full h-[25%] p-[20px] absolute bottom-0 tracking-wider'>
                            <span className="font-semibold text-white text-[20px]">{mangaName}</span>
                        </div>
                    </div>
                </div>
                <div className="w-[80%]"></div>
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