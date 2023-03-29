import { createSelector } from "@reduxjs/toolkit";

const cart = state=>state.cart.cart

export const quantitySelector = createSelector(cart,(x)=>{
    console.log(x)
    const a=x.reduce((acc,cur)=>{
    acc+= cur.quantity   
    return acc
},0)
console.log(a)
return a
})

export const cartSelector = createSelector(cart,(x)=>cart);

export const totalSelector = createSelector(cart,(x)=>x.reduce((acc,cur)=>{
    acc+=cur.quantity*cur.price;
    return acc
},0))