import React from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai';


const CartComponent = () => {
  return (
    <div className='relative flex justify-center items-center'>
        <AiOutlineShoppingCart size={28} className='text-white'/>
        <div className='absolute top-2 right-3 h-[1rem] w-[1rem]  p-2 bg-yellow-500  rounded-full flex justify-center items-center'>
            <p className='text-[0.5rem] text-black'>10</p>
        </div>
    </div>
  )
}

export default CartComponent