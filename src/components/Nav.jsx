import React, { useContext, useEffect } from 'react'
import { MdFastfood } from "react-icons/md"; 
import { FaSearch } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import { dataContext } from '../context/UserContext';
import { food_items } from '../food';
import { useSelector } from 'react-redux';

function Nav() {
    let {input,setInput,category,setCategory,showCart,setShowCart}=useContext(dataContext);

    useEffect(()=>{
        let newList=food_items.filter((item)=>item.food_name.includes(input)||item.food_name.toLocaleLowerCase().includes(input))
        setCategory(newList);
    },[input])

     let items=useSelector(state=>state.cart)

    
  return (
    <div className='w-full h-[100px] flex justify-between items-center md:px-8 px-5'>
        <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl'>
          <MdFastfood className='w-[30px] h-[30px] text-red-500 shadow-xl'/>
        </div>

        <form className='md:w-[70%] w-[45%] h-[60px] bg-white flex items-center px-5 gap-5 rounded shadow-md' onSubmit={(e)=>e.preventDefault()}>
            <FaSearch className='text-red-500 w-[20px] h-[20px]'/>

            <input type="text" placeholder='Search Items...' className='w-[100%] outline-none md:text-[20px] text-[16px]' onChange={(e)=>setInput(e.target.value)} value={input}/>

        </form>

        <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative' onClick={()=>setShowCart(true)}>
            <span className='absolute top-0 right-2 text-red-500 font-bold text-md'>{items.length}</span>
          <LuShoppingBag className='w-[30px] h-[30px] text-red-500 shadow-xl'/>
        </div>

        



    </div>
  )
}

export default Nav