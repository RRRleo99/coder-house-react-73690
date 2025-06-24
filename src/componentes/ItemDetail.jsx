import React, { useState } from 'react'
import ItemCount from './ItemCount'
import { CartContext } from '../context/CartContext'

const ItemDetail = ({detalle}) => {
  const [compra, setCompra] =useState (false)

  const onAdd = (cantidad) => {
    setQuantity(cantidad)
    console.log(`Compraste ${cantidad}del item  ${detalle.name}`)
    addItem(detalle,quantity)
    console.log(quantity)
  }

  console.log(quantity, "fuera de la funcion")
  return (
    <div>
        <h3>{detalle.name}</h3>
        <img src={detalle.img} alt={detalle.name}/>
        <p>{detalle.description}</p>
        <p>${detalle.price}</p>
        <p>stock:{detalle.stock} unidades</p>
       {quantity > 0 ? <link>Ir al carrito</link> : <ItemCount stock={detalle.stock} onAdd={onAdd}/>}
    </div>
  )
}

export default ItemDetail