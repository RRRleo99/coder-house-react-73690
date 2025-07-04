import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { collection, serverTimestamp, addDoc } from 'firebase/firestore'
import { db } from '../service/fireBase';
import { Link } from 'react-router-dom';

const Check = () => {
    const [buyer, setBuyer]= useState({})
    const [validateEmail, setValidateEmail]= useState("")
    const[orderId, setOrderId]= useState ("")
    const {cart, cartTotal, clear}=useContext(CartContext)
    const buyerData = (e) =>{
        setBuyer(
            {
                ...buyer,
                [e.target.name]: e.target.value
            }
        )
    }

    const finalizarCompra = (e)=>{
        e.preventDefault()

        if(!buyer.name || !buyer.address || !buyer.email){
            alert("Todos los campos requeridos")
        }else{
            let orden = {
            comprador:buyer,
            compras:cart,
            total: cartTotal(),
            date: serverTimestamp()
        }

        const ventas = collection (db, "orders")

        addDoc(ventas, orden)
        .then((res)=>{
            setOrderId(res.id)
            clear()
        })
        .cath((error)=> console.log(error))

    }
}
  return (
    <>
    {
        orderId
        ? <div>
            <h2>Generaste correctamente tu ordn</h2>
            <h2>El id es: {orderId}</h2>
            <Link to='/' className='btn btn-dark'>Volver al inicio</Link>
        </div>

        : <div>
            <h1>Completa tus datos</h1>
            <form onSubmit={finalizarCompra}>
            <input className='form-control' placeholder='Nombre completo' type='text' name='name' onChange={buyerData}/>
            <input className='form-control' type='text' placeholder='Su direccion' name='address' onChange={buyerData}/>
            <input className='form-control' type='email' placeholder='Su correo' name='email' onChange={buyerData}/>
            <input className='form-control' type='email' placeholder='Repita su correo' name='email2' onChange={(e)=> setValidateEmail(e.target.value)}/>
            <button className='btn btm-success' type='submit'>Finalizar compra</button>
            </form>

        </div>
    }
    </>
  )
}

export default Check