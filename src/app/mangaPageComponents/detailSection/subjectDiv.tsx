const SubjectDiv = ({konu}:any) => {
    return(
        <div className="w-[100%]">
            <h2 className='mb-[10px] text-[14px] text-[#32323c] font-semibold'>KONUSU</h2>
            <p className="text-[14px] text-[#32323c] max-h-[350px] overflow-auto"
            /*style={{
                '&:--webkit-scrollbar':{        
                    width: "8px",
                    position: "relative"
                }
            }}*/
            >{konu}</p>

        </div>

    )
}

export default SubjectDiv;