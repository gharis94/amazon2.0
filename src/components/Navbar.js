import React from 'react'
import {AiOutlineAmazon,AiOutlineSearch} from 'react-icons/ai';
import CartComponent from './CartComponent';
import Link from 'next/link';
import {signIn,useSession,signOut} from 'next-auth/react';

const log=true

const Navbar = () => {
     const {data:session} = useSession()
     console.log(session)
  return (
    <div className=' h-[5rem] shadow-lg'>
        <div className='bg-gunmetalic h-2/3 w-full flex justify-between'>
            <Link href='/' className='flex justify-center items-center ml-10'>
                <AiOutlineAmazon size={32} className='text-yellow-500'/>
            </Link>
            <div className='flex-grow mx-10 my-2 hidden sm:flex'>
                <input className='w-10/12 rounded-l-md pl-4 outline-none' placeholder='Search..'/>
                <button className='w-2/12 flex justify-center items-center  rounded-r-md bg-yellow-500'><AiOutlineSearch size={20}/></button>
            </div>
            <div className='sm:mx-10 flex space-x-4  text-white cursor-pointer' >
                <div className = 'flex flex-col justify-center items-center' onClick = {() => !session ? signIn() : signOut()}>
                    <p>Hello, {session? 'Gharis':<span>Sign In?</span>}</p>
                    <p className='text-sm font-semibold'>Account & list</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <p>Return</p>
                    <p className='font-semibold'>& Orders</p>
                </div>
                <CartComponent/>
                
            </div>
        </div>
        <div className='bg-charcoal h-1/3 w-full'>
            
        </div>
    </div>
  )
}

export default Navbar