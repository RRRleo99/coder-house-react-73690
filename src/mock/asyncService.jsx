
const products = [
{
    id: "01",
    name:"Zapatillas",
    price: 700,
    description:"Zapatillas 2025",
    stock:"04",
    img: "../zapasWhite.jpg",
    category:"Zapatillas"
},

{
    id: "02",
    name:"Calcetines",
    price: 900,
    description:"Calcetines invierno",
    stock:"04",
    img: "../mediasWhite.jpg",
    category:"Calcetines"
},

{
    id: "03",
    name:"Pulseras",
    price: 1200,
    description:"Pulseras para hombres",
    stock:"20",
    img: "../puls.jpg",
    category:"Pulseras"
},

{
    id: "04",
    name:"Oferta",
    price: 7000,
    description:"Oferta de temporada",
    stock:"01",
    img: "../zapatillas.jpg",
    category:"Oferta"
},
]

let error = false
export const getProducts = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
        if(!error){
            resolve(products)
        }else{
            reject("hubo un error")
            } 
        },3000)
    })
}

export const getOneProduct =(id) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(!error){
                let oneProduct = products.find((item)=> item.id === id)
                resolve(oneProduct)
            }else{
                reject("hubo un error")
            }
        },3000)
    })
}