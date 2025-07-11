import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';


const CartView = () => {
  const {cart, cartTotal, clear, removeItem} = useContext (CartContext)
  return (
        <div>
        <h2>Tu carrito</h2>
       
        <div>
      {    
          cart.map((compra)=>(
            <div key={compra.id} style={{display:"flex", justifyContent:"space-between", alignItems:"center", width:"80%", padding:"2rem"}}>
                  <img src={compra.img} alt={compra.name} style={{width:"5rem"}}/>
                  <span>{compra.name}</span>
                  <span>{compra.price},00</span>
                  <span>{compra.quantity}</span>
                  <span>precio final: ${compra.price * compra.quantity},00</span>
                  <button className='btn btn-danger' onClick={()=>removeItem(compra.id)}>x</button>
                 
            </div>
          ))    
      }
    </div>
      <span>Total a pagar: ${cartTotal()},00</span>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", width:"80%", padding:"2rem"}}>
          <button className='btn btn-danger' onClick={clear}>Borrar</button>
         <Link to='/check' className='btn btn-dark'>Terminar compra</Link>
      </div>
    </div>
  )
  
}
    
export default CartView