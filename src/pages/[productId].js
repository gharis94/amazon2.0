import React from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout'
import { useDispatch } from 'react-redux'
import { addToCart } from '@/redux/cart/cartSlice'

const ProductId = ({data}) => {
    const dispatch = useDispatch();
    const {image,title,description,price} = data

    const handleClick =()=>{
        dispatch(addToCart(data))
    }
    return (
        <Layout>
            <div className='grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-3  place-items-center mt-24 w-full'>
                <div className='flex justify-start w-full pl-4 sm:row-span-1 sm:order-1 py-6'>
                    <p className='text-3xl font-semibold'>{title}</p>
                </div>
                
                <div className='min-h-[20rem] min-w-[18rem] sm:order-0 sm:row-span-3 relative'>
                    <Image src={image} fill alt='/'/>
                </div>
                
                <div  className = 'w-full px-10 space-y-6 sm:row-span-2 pt-10 sm:order-1' >
                    <div className='flex justify-between  text-2xl'>
                        <p>PKR</p>
                        <p>{price}</p>
                    </div>
                    <p className=''>{description}</p>
                    <button className='  bg-yellow-500 w-full rounded-md hover:bg-yellow-600' onClick={()=>handleClick()}>Buy</button>
                </div>
            </div>
        </Layout>
        
    )
}

export default ProductId;

export async function getServerSideProps(context){
    
    const {productId} = context.query
    const rsp = await fetch(`https://fakestoreapi.com/products/${productId}`)
    const data = await rsp.json()

    return{
        props:{
            data
        }
    }
}