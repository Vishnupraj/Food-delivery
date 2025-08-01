import React from 'react'
import image1 from "../assets/image1.avif"
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { DecrementQty, IncrementQty, RemoveItem } from '../redux/cartSlice';

function Card2({name,image,price,id,qty}) {
    let dispatch=useDispatch();
  return (
    <div className='w-full h-[100px] p-3 shadow-lg flex justify-between'>
        <div className='w-[60%] h-full flex gap-5 '>
            <div className='w-[50%] h-full overflow-hidden rounded-lg'>
                
                    <img src={image} alt="" className='object-cover'/>
                   
            </div>
            <div className='w-[40%] h-full flex flex-col gap-3 '>
                <div className=' h-[50%] text-gray-600'>{name}</div>
                <div className='w-[80px] h-[50px] bg-slate-400 flex justify-center items-center rounded-lg overflow-hidden shadow-lg border-2 border-red-500'>
                    <button className='w-[30%] h-full bg-white flex justify-center items-center text-lg text-red-500' onClick={()=>dispatch(IncrementQty(id))}>+</button>
                    <span className='w-[40%] h-full bg-slate-200 flex justify-center items-center text-lg '>{qty}</span>
                    <button className='w-[30%] h-full bg-white flex justify-center items-center text-lg  text-red-500' onClick={()=>qty>1?dispatch(DecrementQty(id)):1}>-</button>
                </div>
            </div>

        </div>

        
            <div className='flex flex-col gap-5 justify-start items-center'>
                <span className='text-xl text-red-500 font-semibold'>Rs {price}/-</span>
                <RiDeleteBin6Line className='w-[25px] h-[25px]' onClick={()=>dispatch(RemoveItem(id))}/>
            </div>

        
    </div>
  )
}

export default Card2