import {useEffect, useState} from 'react'
import {getProducts, products} from "../mock/asyncService"
import ItemLista from './ItemLista'
import { useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'
import { collection, getDocs, query, where, addDoc } from 'firebase/firestore'
import {db} from '../service/fireBase'



const ItemListContainer = ({greeting}) => {

const  [data, setData] = useState([])
const {categoryId}= useParams()
const [loading, setLoading] = useState(false)


    useEffect(()=>{
      setLoading(true)

      const productsCollection =  categoryId ? query (collection(db, "productos"), where("category", "==", categoryId)): collection(db, "productos")
      getDocs(productsCollection)
      .then((res)=>{
        const list = res.docs.map((doc)=>{
          return {
            ...doc.data(),
            id:doc.id
          }
      
      })
    console.log(list)
    setData(list)
})

.catch((error)=> console.log(error))
.finally(()=> setLoading(false))
},[])
{/** 
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
 */}

   const subirData = () => {
    console.log("subiendo prods...")
    const prodCollectionToAdd = collection(db, "productos")
    products.map((item)=> addDoc(prodCollectionToAdd, item))
   } 
  return (
    <>
    {
      loading
      ? <LoaderComponent/>
          :<div>
            <button onClick={subirData}>Subir Data</button>
              <h1>{greeting}{categoryId && <span style={{textTransform: "capitalize"}}>{categoryId}</span>}</h1>
             <ItemLista data={data}/>
         </div>
    }
        
    </>
  )
}

export default ItemListContainer