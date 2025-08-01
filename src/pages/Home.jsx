import React, { useContext, useState } from 'react'
import Nav from '../components/Nav'
import Categories from '../Categories'
import Card from '../components/Card'
import { food_items } from '../food'
import { dataContext } from '../context/UserContext'
import { RxCross2 } from "react-icons/rx";
import Card2 from '../components/Card2'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify';


function Home() {
    let {category,setCategory,input,showCart,setShowCart}=useContext(dataContext);

    function filter(category){


        
            if(category==="All"){
            setCategory(food_items)
    }
        else{
      let newList=  food_items.filter((item)=>(item.food_category===category))
        setCategory(newList)
        }
        
        
    
    }
     
      let items=useSelector(state=>state.cart)

      let subtotal=items.reduce((total,item)=>total+item.price*item.qty,0);
      let deliveryFee=20;
      let taxes =subtotal*0.5;
      let total=Math.floor(subtotal+deliveryFee+taxes);
    

  return (
    <div className='w-full min-h-screen bg-slate-200'>
        <Nav/>
        {!input? <div className='flex flex-wrap justify-center items-center gap-5 w-[100]%'>
        
            {Categories.map((item)=>{
               return( <div className='w-[120px] h-[130px] bg-white flex flex-col justify-start p-5 gap-3 items-start text-[16px] font-bold text-center text-gray-600 rounded-lg shadow-xl hover:bg-red-200 transition-all duration-200 cursor-pointer' onClick={()=>filter(item.name)}>
                    {item.icon}
                    {item.name}
                </div>
               )
            })}
           </div>:null}
       
        <div className='flex flex-wrap justify-center items-center gap-3 pt-8 pb-8'>
            {category.length>=1? category.map((item)=>{
               return (
                 <Card name={item.food_name} image={item.food_image} price={item.price} id={item.id} type={item.food_type}/>
               )
            }):<div className='text-2xl text-gray-600'>No Dish Found</div>}
           
        </div>

        <div className={`md:w-[40%] w-full h-[100%] px-5 bg-white fixed top-0 right-0 shadow-xl ${showCart?"translate-x-0":"translate-x-full tranform-all duration-500"} overflow-auto` }>
            <header className='w-[100%] flex justify-between items-center p-6 font-semibold text-[18px] text-red-500'>
                <span>Order items</span>
                <RxCross2 className='w-[25px] h-[25px] cursor-pointer hover:text-gray-600' onClick={()=>setShowCart(false)}/>
            </header>

            {items.length>0?<>
            <div className='flex flex-col gap-5 '>

                {items.map((item)=>{
                  return  <Card2 name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty} />

                })}
                
                

            </div>

            <div className=' flex flex-col gap-1 p-8 w-full border-b-2 border-t-2 border-gray-400 mt-7'>
                <div className='w-full flex justify-between items-center'>
                    <span className='text-xl text-gray-600 font-semibold'>Subtotal</span>
                    <span className='text-xl text-gray-600 font-semibold'>Rs {subtotal}/-</span>
                </div>

                <div className='w-full flex justify-between items-center'>
                    <span className='text-xl text-gray-600 font-semibold'>Delivery Fee</span>
                    <span className='text-xl text-gray-600 font-semibold'>Rs {deliveryFee}/-</span>
                </div>

                <div className='w-full flex justify-between items-center'>
                    <span className='text-xl text-gray-600 font-semibold'>Taxes</span>
                    <span className='text-xl text-gray-600 font-semibold'>Rs {taxes}/-</span>
                </div>

            </div>

             <div className='w-full p-5 flex justify-between items-center'>
                    <span className='text-xl text-gray-600 font-semibold'>Total</span>
                    <span className='text-xl text-gray-600 font-semibold'>Rs {total}/-</span>
                </div>

                <div className='flex items-center'>
                    <button className='w-[80%] mx-auto p-3 mt-3 rounded-lg bg-red-500 transition-all' onClick={()=>{toast.success("Order Placed");
                        setShowCart(false)
                    }}>Place Order</button>

                </div>

                </>:<div className='flex justify-center items-center text-xl text-red-500'>Empty Bag</div>}
         


                
           

        </div>
    </div>
  )
}

export default Home