import  {useEffect, useState} from 'react'
import {getOneProduct, getProducts} from "../mock/asyncService"
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'
import { collection, doc, getDoc } from 'firebase/firestore'
import {db} from '../service/fireBase'
import { Link } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState ({})
    const [cargando, setCargando] = useState (false)
    const [invalid, setInvalid] = useState (false)
    const {itemId} = useParams()
    
    useEffect(()=>{
      setCargando(true)
      const productsCollection= collection(db, "productos")
      const docRef= doc(productsCollection, itemId)

      getDoc(docRef)
      .then((res)=>{
        if(res.data()){
          setDetalle({...res.data(),id:res.id})
        }else{
          setInvalid(true)
        }
      })
      .catch((error)=> console.log(error))
      .finally(()=> setCargando(false))
    },[])


{/*
    useEffect(()=>{
        getOneProduct(itemId)
        .then((res)=> setDeatalle(res))
        .catch((error)=>console.error(error))
    }, []) */}

    if(invalid){
      return(
        <div>
          <h2>El producto no existe</h2>
          <Link className='btm btn-dark'>Volver al inicio</Link>
        </div>
      )
    }
console.log(detalle)
  return (
    <div>
        <ItemDetail detalle={detalle}/>
    </div>
  )
}

export default ItemDetailContainer