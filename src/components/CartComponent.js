import { quantitySelector } from '@/redux/cart/cartSelector';
import React from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import { useSelector } from 'react-redux';
import Link from 'next/link';

const CartComponent = () => {
  const quantity = useSelector(quantitySelector);  
  return (
    <Link href='/checkout' className='relative flex justify-center items-center'>
        <AiOutlineShoppingCart size={28} className='text-white'/>
        <div className='absolute top-2 right-3 h-[1rem] w-[1rem]  p-2 bg-yellow-500  rounded-full flex justify-center items-center'>
            <p className='text-[0.5rem] text-black'>{quantity}</p>
        </div>
    </Link>
  )
}

export default CartComponent