import {useEffect, useState} from 'react'
import {getProducts} from "../mock/asyncService"
import ItemLista from './ItemLista'
import { useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'


const ItemListContainer = ({greeting}) => {

const  [data, setData] = useState([])
const {categoryId}= useParams()
const [loading, setLoading] = useState(false)

useEffect(()=>{
  setLoading(true)
  getProducts()
  .then((res)=>{
    if(categoryId){
      setData(res.filter((prod)=> prod.categoryId === categoryId))
    }else{
      setData(res)
    }
  })
  .catch((error)=>console.error(error))
  .finally(()=> setLoading(false))
  
},[categoryId])
  return (
    <>
    {
      loading
      ? <LoaderComponent/>
          :<div>
              <h1>{greeting}{categoryId && <span style={{textTransform: "capitalize"}}>{categoryId}</span>}</h1>
             <ItemLista data={data}/>
         </div>
    }
        
    </>
  )
}

export default ItemListContainer