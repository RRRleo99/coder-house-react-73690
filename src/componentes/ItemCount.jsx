import React, { useState } from 'react'

const ItemCount = ({stock, onAdd}) => {
    const [count, setCount] = useState(1)

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
        <button className='btn btn-secceses'onClick={sumar}>+</button>
        </div>
        <button className='btn btn-primary' onClick={()=>onAdd(count)}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount
