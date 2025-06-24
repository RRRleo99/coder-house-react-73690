import { Children, createContext, useState } from "react"

export const CartContext = createContext () 

export const CartProvaider = ({Children}) => {
    const [cart, setCart] = useState ([])

    const addItem = (item, cantidad)=> {
        if(isInCart(item.id)){
            const updateCart = cart.map((prod)=>{
                if(prod.id === item id){
                return{...prod, quantity: prod.quantity + cantidad}
            }else{
                return prod

            }
})

            setCart(updateCart)