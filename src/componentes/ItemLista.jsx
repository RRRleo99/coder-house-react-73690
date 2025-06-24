import React from 'react'
import Item from './Item'

const ItemLista = ({data}) => {
  return (
    <div style={{display: "flex", justifyContent: "space-between", alignItems:"center"}}>
        {data.map((prod)=><item key={prod.id} prod={prod}/>)}
    </div>
  )
}

export default ItemLista