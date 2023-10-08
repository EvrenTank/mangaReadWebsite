import HeightIcon from '@mui/icons-material/Height';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const ReadingModeSelector = ({setTektek,setOrmp,tektek}:any) => {
    return (
        <div className="w-[100%] h-screen fixed top-0 left-0 border-2 border-red-800 bg-[rgba(255,255,255,0.5)]  z-40 flex justify-center items-center">
            <div className="w-[350px] h-[250px] bg-white border-2 opacity-90 border-gray-500 z-50 rounded-[10px]">
                <div className='w-full h-2/3 flex items-center justify-center gap-[14px]'>
                    <span 
                    onClick={()=>{
                        setTektek(true);
                    }}
                    className = { 
                    `${!tektek ? 'text-[rgba(0,0,0,0.54)]  bg-white hover:bg-[rgba(0,0,0,0.15)]':'text-[rgba(0,0,0,0.87)] bg-[rgba(0,0,0,0.20)] hover:bg-[rgba(0,0,0,0.25)]'} 
                    w-[calc(50%-20px)] text-center font-semibold p-[5px] border-[1px] border-gray-300 rounded-[7px] cursor-pointer text-[13px] duration-300 `
                    }><HeightIcon className="rotate-90 mr-3"/>Sayfa Sayfa</span>
                    <span 
                    onClick={()=>{
                        setTektek(false);
                    }}
                    className={
                    `${tektek ? 'text-[rgba(0,0,0,0.54)]  bg-white hover:bg-[rgba(0,0,0,0.15)]':'text-[rgba(0,0,0,0.87)] bg-[rgba(0,0,0,0.20)] hover:bg-[rgba(0,0,0,0.25)]'}
                    w-[calc(50%-20px)] text-center font-semibold p-[5px] border-[1px] border-gray-300 rounded-[7px] cursor-pointer text-[13px] duration-300`
                    }><HeightIcon />Hepsi Tek Sayfada</span>
                </div>
                <div className='w-full h-1/3 flex justify-center items-center text-[13px]'>
                    <span onClick={()=>{setOrmp(false);}}
                    className="p-[8px] text-white bg-green-500 rounded-[7px] cursor-pointer hover:bg-green-700 duration-300"><CheckCircleOutlineIcon className="mr-1"/>Seçimi Onayla</span>
                </div>
            </div>
        </div>
 
    )
}
export default ReadingModeSelector;