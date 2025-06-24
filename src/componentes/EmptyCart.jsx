import React from 'react'

const EmptyCart = () => {
  return (
    <div>
        <h2>Tu carrito esta vacio</h2>
        <h4>Te invitamos a comprar en apolo.web</h4>
        <link className='btn btn-dark' to="/">Ir a comprar</link>
    </div>
  )
}

export default EmptyCart