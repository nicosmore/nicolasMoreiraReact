import './App.css';
import NavBar from './components/Header/NavBar';
import ItemListContainer from './components/Container/ItemListContainer';
import ItemDetailContainer from './components/DetailsContainer/itemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from  './components/Cart/Cart';
import CartComponentContext from './Context/CartContext.js';

const App = () => {
  return (
        
    <BrowserRouter>
      <CartComponentContext>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer mensaje='ItemlistContainer'/>}/>
          <Route path='/:categoryName' element={<ItemListContainer mensaje='ItemlistContainer'/>}/> 
          <Route path='/productos/:itemId'element={<ItemDetailContainer mensajeDetail='ItemDetailContainer'/>}/>       
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </CartComponentContext>
            
    </BrowserRouter>
    
  );
}

export default App;
