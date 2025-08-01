import React from 'react'
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { AddItem } from '../redux/cartSlice';
import { toast } from 'react-toastify';
function Card({name,image,type,price,id}) {
    let dispatch=useDispatch();
  return (
    <div className='w-[280px] h-[350px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg hover:border-3 hover:border-red-300'>
        <div className='w-[100%] h-[70%] overflow-hidden rounded-lg'>
            <img src={image} alt="" className='object-cover w-full h-full'/>

        </div>
        <div className='text-2xl font-semibold'>
            {name}

        </div>
        <div className='w-full flex justify-between item-center'>
            <div className='text-lg font-bold text-red-500 '>Rs {price}/-</div>
            <div className='flex justify-center items-center gap-2 text-red-500 text-lg font-semibold'>{type==="veg"?<LuLeafyGreen />:<GiChickenOven />}<span>{type}</span></div>

        </div>

        <button className='w-full p-3 rounded-lg bg-red-300 hover:bg-red-500 transition-all' onClick={()=>{dispatch(AddItem({id:id,name:name,price:price,image:image,qty:1}));
        toast.success("Item Added")}}>Add To Bag</button>


    </div>

  )
}

export default Card