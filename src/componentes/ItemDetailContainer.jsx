import  {useEffect, useState} from 'react'
import {getOneProduct, getProducts} from "../mock/asyncService"
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [detalle, setDeatalle] = useState ({})
    const {itemId} = useParams()

    useEffect(()=>{
        getOneProduct(itemId)
        .then((res)=> setDeatalle(res))
        .catch((error)=>console.error(error))
    }, [])
console.log(detalle)
  return (
    <div>
        <ItemDetail detalle={detalle}/>
    </div>
  )
}

export default ItemDetailContainer