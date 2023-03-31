const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export default async (req,res)=>{
    const {items,email} = req.body;
    
    const transformedItems=items.map(item=>({
        price_data:{
            currency:'gbp',
            unit_amount:item.price*1000,
            product_data:{
                name:item.title,
                images:[item.image]
            }
        },
        quantity:item.quantity
    }))
    console.log(transformedItems)
    const session = await stripe.checkout.sessions.create({
        payment_method_types:['card'],
        shipping_address_collection:{
            allowed_countries:['GB',"US","CA"],
        },
        line_items:transformedItems,
        mode:'payment',
        success_url:`${process.env.HOST}/success`,
        cancel_url:`${process.env.HOST}/failed`,
        metadata:{
            email,
            images: JSON.stringify(items.map(item=>item.image))
        }
    })
    console.log(session)
    res.status(200).json({id:session.id})
}