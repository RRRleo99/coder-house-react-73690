
export const products = [
{

    name:"Zapatillas Blancas",
    price: 700,
    description:"Zapatillas 2025",
    stock: 4,
    img: "../zapasWhite.jpg",
    category:"Zapatillas"
},

{

    name:"Calcetines Largos",
    price: 900,
    description:"Calcetines invierno",
    stock: 4,
    img: "../mediasWhite.jpg",
    category:"Calcetines"
},

{

    name:"Pulseras de Rock",
    price: 1200,
    description:"Pulseras para hombres",
    stock: 20,
    img: "../puls.jpg",
    category:"Pulseras"
},

{

    name:"Oferta de julio",
    price: 7000,
    description:"Oferta de temporada",
    stock:1,
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