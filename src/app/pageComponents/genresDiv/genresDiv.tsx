'use client';
import {useState} from 'react';
import ListComponent from './listComponent';

const GenresDiv = () => {
    
    const [genres,setGenres] = useState([
        'Aksiyon','Bilim Kurgu','Büyü','Canavarlar','Doğaüstü','Doujinshi','Dövüş Sanatları','Drama'
        
    ]);
    const [clicked,setClicked] = useState(false);

    const clickEvent = ()=> {
        setClicked(clicked=>!clicked);
        if(!clicked){
            setGenres(
                [
                    'Aksiyon','Bilim Kurgu','Büyü','Canavarlar','Doğaüstü','Doujinshi','Dövüş Sanatları','Drama',
                    'Gizem','Komedi','Macera','Manhwa','Okul Yaşamı','Psikolojik','Romantizm','Suç','Tarihi','Webtoon'
                ]
            );
        }
        else {
            setGenres(
                [
                    'Aksiyon','Bilim Kurgu','Büyü','Canavarlar','Doğaüstü','Doujinshi','Dövüş Sanatları','Drama'
                    
                ]
            );    
        }
    }

    return (
        <div className="w-[85%] p-[15px] bg-white mb-[15px] rounded-[5px]">
            <div className='w-[100] mb-[5px] border-b-[1px] '>
                <span className='w-[12px] inline-block aspect-square' 
                style={{
                    background: "linear-gradient(to right,#d8d7e6 2px,transparent 2px,rgba(255,255,255,0) 5px,#9d9bc2 5px,#9d9bc2 7px,rgba(255,255,255,0) 7px,#ffffff 10px,#363183 10px,#363183 12px,rgba(255,255,255,0))"

                }} ></span>
                <h2 className='inline-block ml-[3px]'>TÜRLER</h2>
            </div>
            <ul className="w-[100%] grid grid-cols-2 gap gap:border-[1px]"
           >
                {
                    genres.map((genre,index)=>{
                        return (
                            <ListComponent index={index} genre={genre}/>
                        )
                    })
                }
   
            </ul>
            <button type='button' className=' bg-[#f0f0f0] w-[100%] mt-[5px] leading-[32px] text-[14px] text-[#32323c] rounded-[5px]'
             onClick={clickEvent}>{clicked ? 'Daha az göster' : 'Daha fazla göster'}</button>

        </div>
    )
}

export default GenresDiv;