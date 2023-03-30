import React from 'react';
import Image from 'next/image';

const CheckoutCard = ({item}) => {
    console.log(item)
    const {title,price,quantity,image} = item    
  return (
    <div className='grid place-items-center grid-cols-5 pb-2 '>
        <div className='col-span-2 grid grid-cols-3'>
            <div className='relative h-[4rem] w-[4rem] col-span-1'>
                <Image src={image} fill alt=''/>
            </div>
            <p className='col-span-2'>{title}</p>
        </div>
        <p className='col-span-1'>{quantity}</p>
        <p className='col-span-1'>{price}</p>
        <p className='col-span-1'>{quantity*price}</p>
    </div>
  )
}

export default CheckoutCard