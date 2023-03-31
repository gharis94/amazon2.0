import React from 'react';
import {HiOutlineCheckCircle} from 'react-icons/hi'
import Link from 'next/link';

const Success = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='h-2/4 w-2/3 bg-white shadow-lg flex flex-col justify-center items-center space-y-10 border-2 rounded-md'>
            <p className='text-2xl font-semibold'>Congratulations</p>
            <HiOutlineCheckCircle className='text-green-500' size={60}/>
            <Link href='/' >
                <p className='bg-yellow-500 active:bg-yellow-600 px-6 rounded-md text-gray-100'>Back To Home</p>
            </Link>
        </div>
    </div>
  )
}

export default Success