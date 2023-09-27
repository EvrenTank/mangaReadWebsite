import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const PageNumberSelector = () => {
    


    return (
        <div className="w-[100%]  border-[1px] border-slate-400 gap-[2%] flex flex-row justify-center">
        <div className="w-[8%] aspect-square border-[1px] flex justify-center items-center font-bold text-gray-300"><KeyboardArrowLeftIcon className='w-[100%] h-[100%] text-slate-100 bg-slate-200'/></div>
        <div className="w-[8%] aspect-square border-[1px] flex justify-center items-center font-bold text-gray-300"><h1>1</h1></div>
        <div className="w-[8%] aspect-square border-[1px] flex justify-center items-center font-bold text-gray-300"><h1>2</h1></div>
        <div className="w-[8%] aspect-square border-[1px] flex justify-center items-center font-bold text-gray-300"><h1>3</h1></div>
        <div className="w-[8%] aspect-square border-[1px] flex justify-center items-center font-bold text-gray-300"><h1>4</h1></div>
        <div className="w-[8%] aspect-square border-[1px] flex justify-center items-center font-bold text-gray-300"><h1>5</h1></div>
        <div className="w-[8%] aspect-square border-[1px] flex justify-center items-center font-bold text-gray-300"><h1>6</h1></div>
        <div className="w-[8%] aspect-square border-[1px] flex justify-center items-center font-bold text-gray-300"><h1>7</h1></div>
        <div className="w-[8%] aspect-square border-[1px] flex justify-center items-center font-bold text-gray-300"><h1>8</h1></div>
        <div className="w-[8%] aspect-square border-[1px] flex justify-center items-center font-bold text-gray-300"><KeyboardArrowRightIcon className='w-[100%] h-[100%]' /></div>
        </div>
    )
}

export default PageNumberSelector;