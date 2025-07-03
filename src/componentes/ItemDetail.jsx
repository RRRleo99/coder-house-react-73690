import React, { useState, useContext } from 'react';
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({ detalle }) => {
  const [quantity, setQuantity] = useState(0);
  const [compra, setCompra] = useState(false);
  const { addItem } = useContext(CartContext);

  const onAdd = (cantidad) => {
    setQuantity(cantidad);
    console.log(`Compraste ${cantidad} del item ${detalle.name} `);
    addItem(detalle, cantidad);
    console.log(cantidad);
  };

  return (
    <div>
      <h3>{detalle.name}</h3>
      <img src={detalle.img} alt={detalle.name} />
      <p>{detalle.description}</p>
      <p>${detalle.price}</p>
      <p>stock: {detalle.stock} unidades</p>
      {quantity > 0 ? (
        <Link to="/cart">Ir al carrito</Link>
      ) : (
        <ItemCount stock={detalle.stock} onAdd={onAdd} />
      )}
    </div>
  );
};

export default ItemDetail;