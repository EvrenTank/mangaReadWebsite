import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const SelectorDiv = ({iconOption,pageNumber,setFirstpagenumber,firstpagenumber,onClickEvent }:any) => {
    return (
        //group ve group-hover kavrami parent elemente hover olması durumunda child elementte stil degisikligi yapmaya yarar.
        <div 
            className={`${pageNumber === firstpagenumber ? 'bg-[#685eff] text-white' : 'bg-[#f0f3ff] text-[#8992b7]'}  h-[45px] aspect-square border-[1px] flex justify-center items-center font-bold rounded-[8px]
            text-[#8992b7] hover:bg-[#685eff] hover:text-white group `}
         onClick={
            onClickEvent == undefined ? ()=>{
                setTimeout(()=>{
                 setFirstpagenumber(pageNumber);
                },1000)
             } :
             onClickEvent

         }
         >
            {iconOption == 'Left' && <KeyboardArrowLeftIcon className='w-[50%] h-[50%]'/>}
            {iconOption == 'Right' && <KeyboardArrowRightIcon className='w-[50%] h-[50%]'/>}
            {(iconOption == undefined) && <h1 className={`${pageNumber === firstpagenumber ? 'text-white' : 'text-[#8992b7]'} group-hover:text-white `}>{pageNumber}</h1> }

        

        </div>
    )
}

export default SelectorDiv;