import React from 'react'
import Image from 'next/image'
import {AiFillStar} from 'react-icons/ai';
import TextTruncate from 'react-text-truncate';
import Link from 'next/link';

const Card = ({data}) => {
    const random= Math.floor(Math.random()*5);
    console.log(data)
    const {title,description,image,price,id} =data;
    console.log(data)
  return (
    <Link href={`/${id}`}  className = 'h-[20rem] sm:h-[17rem] w-[18rem] sm:w-[15rem] bg-white' >
        <div className='relative h-2/3 w-full'>
            <Image src={image} fill alt=''/>
        </div>
        <div className='px-2'>
            <TextTruncate
                className='font-semibold'
                line={2}
                element='p'
                truncateText='...'
                text={title}
            />
        </div>
        
        <div className='flex justify-between px-2 my-2'>
            <p className='font-semibold'>PKR</p>
            <p className='font-semibold'>{price}</p>
        </div>
        <div>
              {Array(random).map((_,idx)=>(
                <AiFillStar key={idx} className='text-yellow-500'/>
              ))}  
        </div>
    </Link>
  )
}

export default Card