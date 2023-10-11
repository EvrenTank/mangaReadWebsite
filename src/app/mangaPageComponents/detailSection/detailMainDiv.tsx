'use client';
import OtherDiv from "./otherDiv";
import SubjectDiv from "./subjectDiv";
import ImageDiv from "./imageandratingDivComponents/imageDiv";
import RatingDiv from "./imageandratingDivComponents/ratingDiv";
import FollowDiv from "./imageandratingDivComponents/followDiv";
import ChaptersDiv from "./chaptersDiv";
import axios from 'axios';
import { useEffect, useState } from "react";

const DetailMainDiv = ({imgSrc,mangaName}:any) => {

    const [details,setDetails] = useState({
        nedir:'',
        goruntuleme:'',
        yayinYili:'',
        ceviriTamamlanmis:false,
        yayinTamamlanmis:true,
        kategori:[],
        ceviriGrubu:'',
        konu:"",
        kullanilanOySayisi:0,
        rating: 0,
        takipciSayisi: 0
    });

    useEffect(()=>{
        axios.get(`https://manga-images-api-1.vercel.app/manga/${mangaName}`)
        .then((response)=>{
            console.log('Bulunan manga==', response.data.bulunanManga);
          setDetails(response.data.bulunanManga);   
        })
      },[]); 


    /*
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
    */

    return (
        <>
        <div id='detailMainDiv' className="w-[100%]  bg-white rounded-[5px] shadow-lg relative
         max-[1000px]:flex max-[1000px]:flex-col">
            <div id='imgveratingkartıkapsayandiv' className="w-[33%] p-[10px] min-[1001px]:max-w-[400px] max-[1000px]:w-[100%] max-[1000px]:static  rounded-[5px] flex flex-col absolute top-0 left-0 justify-center items-center">
                <RatingDiv kullanilanOySayisi={details.kullanilanOySayisi} rating={details.rating} />
                <ImageDiv imgSrc={imgSrc} mangaName={mangaName} />
                <FollowDiv takipciSayisi={details.takipciSayisi}/>
            </div>
            <div id='subjectdivveotherdivdivlerinikapsayandiv' className="w-[66%]  h-full float-right  flex flex-row max-[1000px]:w-[100%] max-[1000px]:flex-col ">
                <div id='subjectdivikapsayandiv' className="w-[calc(50%-20px)] h-full mr-[40px] max-[1000px]:w-[100%]">
                    <SubjectDiv konu={details.konu}/>
                </div>
                <div id='otherdivikapsayandiv' className="w-[calc(50%-20px)] h-full max-[1000px]:w-[100%]">
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
        <div id='chaptersdivikapsayandiv' className="w-[66%] max-[1000px]:w-[100%] h-[500px] ">
            <ChaptersDiv/>
            

        </div>
        </>
    )
}

export default DetailMainDiv;