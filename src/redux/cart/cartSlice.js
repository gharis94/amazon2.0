import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cart:[]
}

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            let found = state.cart.find(product=>product.id===action.payload.id);
            if(found){
                state.cart=state.cart.map(product=>product.id ===action.payload.id?{...product,quantity:product.quantity+1}:product)
            }else{
                state.cart=[...state.cart,{...action.payload,quantity:1}]
            }
        },
        removeFromCart:(state,action)=>{
            let found = state.cart.find(product=>product.id===action.payload.id);

            if(found && found.quantity>1){
                state.cart=state.cart.map(product=>product.id=action.payload.id?{...product,quantity:quantity-1}:product)
            }else{
                state.cart = state.cart.filter(product=>product.id!==action.payload.id)
            }
        }
    }
})

export const {addToCart,removeFromCart} = cartSlice.actions;

export default cartSlice.reducer