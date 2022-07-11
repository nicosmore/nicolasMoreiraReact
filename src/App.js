import './App.css';
import NavBar from './components/Header/NavBar';
import ItemListContainer from './components/Container/ItemListContainer';
import ItemDetailContainer from './components/DetailsContainer/itemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from  './components/Cart/Cart';

const App = () => {
  return (
        
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer mensaje='ItemlistContainer'/>}/>
        <Route path='/:categoryName' element={<ItemListContainer mensaje='ItemlistContainer'/>}/> 
        <Route path='/productos/:itemId'element={<ItemDetailContainer mensajeDetail='ItemDetailContainer'/>}/>       
        <Route path='/cart' element={<Cart/>}/>
      </Routes>      
    </BrowserRouter>
    
  );
}

export default App;
