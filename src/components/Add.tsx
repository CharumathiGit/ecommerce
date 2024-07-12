'use client'
import React, { useState } from 'react'
const Add = (
  {productId,variantId,stockNumber}:{productId:any,variantId:string,stockNumber:number}
) => {
  // const stock = 4
  
  function   handleQuantity(type : "i" | "d"){
    if(type=="d"&& quantity >1){
      setQuantity((prev)=>prev-1)
    }
    if(type=="i" && quantity < stockNumber){
      setQuantity((prev)=>prev+1)
    }

  }
  const [quantity, setQuantity] = useState(1)
  return (
    <div className='flex flex-col gap-4'>
      <h4 className='font-medium'>Choose a Quantity</h4>
      <div className="flex  justify-between ">
        <div className="flex items-center gap-4">

          <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center  justify-between w-32">
            <button className='cursor-pointer text-xl' onClick={()=>handleQuantity('d')}>-</button>
            {quantity}
            <button className='cursor-pointer text-xl' onClick={()=>handleQuantity('i')}>+</button>
          </div>
          {stockNumber > 0 ? (
          <div className=" text-sm">Only <span className='text-orange-400'>{stockNumber} items </span>left! <br /> "Don't" miss it</div>

          ):(<div>The Product is <span className='bolder text-red-500'>Out of stock</span></div>)}
        </div>
        <button className='w-36 text-sm rounded-3xl ring-1 ring-shadha text-shadha py-2 px-4 hover:bg-shadha hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-white disabled:ring-none'>Add To Cart</button>
      </div>
    </div>
  )
}

export default Add