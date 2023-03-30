import React from 'react'
import Layout from '@/components/Layout'
import { useSelector } from 'react-redux'
import { cartSelector } from '@/redux/cart/cartSelector'
import CheckoutCard from '@/components/checkoutCard'
import {loadStripe} from '@stripe/stripe-js'
import axios from 'axios'
import { useSession } from 'next-auth/react'

const stripePromise = loadStripe(process.env.stripe_public_key)

const Checkout = () => {
  const items = useSelector(cartSelector)
  const {data:session} = useSession()

  const checkoutSession=async()=>{
    const stripe = await stripePromise;

    //calling the backend
    const checkout= await axios.post('/api/create-checkout-session',{
      items:items,
      email: session.user.email
    })

    //redirect to stripe 
    const result =await stripe.redirectToCheckout({
      sessionId:checkout.data.id
    })

    if(result.error){
      alert(result.error.message)
    }
  }
  return (
    <Layout>
        <div className='grid grid-cols-1 sm:grid-cols-6 px-4 pt-10 '>
          <div className='sm:col-span-4  h-full'> 
            <div className='grid place-items-center grid-cols-5 pb-2 border-b-2'>
              <p className='col-span-2'>Description</p>
              <p className='col-span-1'>Qty</p>
              <p className='col-span-1'>Price</p>
              <p className='col-span-1'>Sub-Total</p>
            </div>
            <div className='pt-4 space-y-2'>
              {
                items.length>0 && items.map(item=>(
                  <CheckoutCard key={item.id} item={item}/>
                ))
              }
            </div>
          </div>
          <div className='sm:col-span-2'>
            <h1>Checkout</h1>
            <button role='link' onClick={()=>checkoutSession()} className='w-full bg-yellow-400'>
              Check Out
            </button>
          </div>
        </div>
    </Layout>
  )
}

export default Checkout