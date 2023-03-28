import React,{useState,useEffect,useRef} from 'react'
import Image from 'next/image';
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'

const img=[
    'https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=898&q=80',
    'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    'https://images.unsplash.com/photo-1549057446-9f5c6ac91a04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1034&q=80'
]

const Bannner = () => {
    const [state,setState] = useState(0);
    const autoPlay = useRef();

    useEffect(()=>{
        autoPlay.current=next
    })
    useEffect(()=>{
        const fn=()=>{
            autoPlay.current()
        }
        const interval= setInterval(()=>fn(),10000)
        return ()=> clearInterval(interval)
    },[])
    const next=()=>{
        if(state<img.length-1){
            setState(prev=>prev+1)
        }else{
            setState(0)
        }
    }
    const prev=()=>{
        if(state ===0){
            setState(img.length-1)
        }else{
            setState(prev=>prev-1)
        }
    }
  return (
    <div className='relative h-[100vh] '>
        <div className='relative h-full w-full'>
            <Image src={img[state]} fill alt='/'/>
        </div>
        <div className='h-full w-full bg-gradient-to-t from-slate-200  via-slate-200 absolute top-0'/>
        <button onClick={()=>prev()} className='absolute top-1/4 left-2 bg-yellow-500 p-2 rounded-full shadow-lg'>
            <AiOutlineArrowLeft size={24} className='text-gray-300'/>
        </button>
        <button onClick={()=>next()} className='absolute top-1/4 right-2 bg-yellow-500 p-2 rounded-full shadow-lg'>
            <AiOutlineArrowRight size={24} className='text-gray-300'/>
        </button>
    </div>
  )
}

export default Bannner