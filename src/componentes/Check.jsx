import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { collection, serverTimestamp, addDoc } from 'firebase/firestore';
import { db } from '../service/fireBase';
import { Link } from 'react-router-dom';

const Check = () => {
  const [buyer, setBuyer] = useState({
    name: '',
    address: '',
    email: '',
    email2: '',
  });
  const [orderId, setOrderId] = useState('');
  const [error, setError] = useState(null);
  const { cart, cartTotal, clear } = useContext(CartContext);

  const buyerData = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const finalizarCompra = (e) => {
    e.preventDefault();
    if (!buyer.name || !buyer.address || !buyer.email || !buyer.email2) {
      setError('Todos los campos son requeridos');
      return;
    }
    if (buyer.email !== buyer.email2) {
      setError('Los correos electrónicos no coinciden');
      return;
    }
    let orden = {
      comprador: buyer,
      compras: cart,
      total: cartTotal(),
      date: serverTimestamp(),
    };
    const ventas = collection(db, 'orders');
    addDoc(ventas, orden)
      .then((res) => {
        setOrderId(res.id);
        clear();
      })
      .catch((error) => {
        setError('Error al generar la orden');
        console.log(error);
      });
  };

  return (
    <>
      {orderId ? (
        <div>
          <h2>Generaste correctamente tu orden</h2>
          <h2>El id es: {orderId}</h2>
          <Link to="/" className="btn btn-dark">
            Volver al inicio
          </Link>
        </div>
      ) : (
        <div>
          <h1>Completa tus datos</h1>
          <h2>Productos en el carrito:</h2>
          <ul>
            {cart.map((producto) => (
              <li key={producto.id}>
                {producto.name} x {producto.quantity} = ${producto.price * producto.quantity}
              </li>
            ))}
          </ul>
          <p>Total: ${cartTotal()}</p>
          <form onSubmit={finalizarCompra}>
            <input
              className="form-control"
              placeholder="Nombre completo"
              type="text"
              name="name"
              value={buyer.name}
              onChange={buyerData}
            />
            <input
              className="form-control"
              type="text"
              placeholder="Su dirección"
              name="address"
              value={buyer.address}
              onChange={buyerData}
            />
            <input
              className="form-control"
              type="email"
              placeholder="Su correo"
              name="email"
              value={buyer.email}
              onChange={buyerData}
            />
            <input
              className="form-control"
              type="email"
              placeholder="Repita su correo"
              name="email2"
              value={buyer.email2}
              onChange={buyerData}
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button className="btn btn-success" type="submit">
              Finalizar compra
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Check;