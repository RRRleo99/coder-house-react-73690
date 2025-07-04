import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import  NavBarBs from './componentes/NavBarBs'
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './componentes/Error';
import {CartProvider} from './context/CartContext';
import Cart from './componentes/Cart';
import Check from './componentes/Check';




function App() {

  return (
    
    <BrowserRouter>
    <CartProvider>
    <NavBarBs/>
    
    <Routes>
    <Route path='/' element={<ItemListContainer greeting="Apolo web"/>}/>
    <Route path='/category/:categoryId' element={<ItemListContainer greeting="Estas en la categoria: "/>}/>
    <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/check' element={<Check/>}/>
    <Route path='#' element={<Error/>}/>
    </Routes>

    </CartProvider>
    </BrowserRouter>
   
  )
}

export default App