const SubjectDiv = ({konu}:any) => {
    return(
        <div className="w-[100%] h-full">
            <h2 className='mb-[10px] text-[14px] text-[#32323c] font-semibold'>KONUSU</h2>
            <p className="text-[14px] text-[#32323c]">{konu}</p>

        </div>

    )
}

export default SubjectDiv;