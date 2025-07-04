import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const ItemCount = ({stock, onAdd}) => {
    const [count, setCount] = useState(0)

    const restar =()=>{
        if(count >0){
            setCount(count -1)
        }
    }

    const sumar =()=>{
        setCount(count +1)
    }

  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <div>
        <button className='btn btn-danger' onClick={restar}>-</button>
        <span className='btn'>{count}</span>
        <button className='btn btn-warning' onClick={sumar}>+</button>
        </div>
       <Link> <button className='btn btn-primary' onClick={()=>onAdd(count)}>Agregar al carrito</button></Link>
    </div>
  )
}

export default ItemCount
