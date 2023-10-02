import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import Rating from '@mui/material/Rating';


const RatingDiv = ({kullanilanOySayisi,rating}:any)=> {
    return (
        <div className="w-[90%] flex justify-between items-center mb-[10px] text-[14px]">
            <span className="text-[#6c7598]">
                <span className="text-[#32323c] font-semibold">{kullanilanOySayisi}</span> oy kullanıldı.</span>
            <span className=' text-[14px] flex flex-row justify-end items-center'>
                <Rating name="half-rating" defaultValue={rating} precision={0.2} size='small' />
                (<span className='font-semibold text-[12px] leading-3'>{rating}</span>)
            </span>
        </div>
    )
}
export default RatingDiv;