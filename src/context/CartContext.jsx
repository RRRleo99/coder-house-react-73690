import {createContext, useState } from "react"

export const CartContext = createContext () 

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState ([])

    const addItem = (item, cantidad)=> {
        console.log("agregando iteem", item, quantity)

    if(isInCart(item.id)){

        const updateCart = cart.map((prod)=>{
            if(prod.id === item.id){

            return {...prod, quantity: prod.quantity + cantidad}
            }else{
                return prod

        }
    })

            setCart(updateCart)


    }else{
        
    setCart([...cart, {...item,quantity:cantidad}])

    }
}

    const clear = ()=> {
        setCart([])
    }

const removeItem = (id) => {
    setCart(cart.filter((prod)=> prod.id !== id))
}

const isInCart = (id)=>{
    return cart.some((prod)=> prod.id === id)
}

const cartQuantity = ()=> {
    return cart.reduce((acc, prod)=> acc += prod.quantity, 0)
}

const cartTotal = ()=>{
    return cart.reduce((acc, prod)=> acc +=(prod.quantity * prod.price),0)
}

return (
    <CartContext.Provider value={{cart, addItem, clear,removeItem, cartQuantity, cartTotal}}>
        {children}
    </CartContext.Provider>
)
}
