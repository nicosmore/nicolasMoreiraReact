import ItemList from './ItemList';
import Loading from '../Animaciones/Loading';
import React,{useState, useEffect} from 'react';
import { useParams} from 'react-router-dom';


const ItemListContainer = ({mensaje}) =>{

    const {categoryName} = useParams();
    const [products, setProducts] = useState([]);
    const [laoded, setLoaded] = useState(true);

    useEffect(() => {
        const URL = categoryName ? `http://localhost:5000/productos/?categoria=${categoryName}`: 'http://localhost:5000/productos'
        
        fetch(URL)
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.log(err))
            .finally(() => setLoaded(false))
    }, [categoryName]); 
   
    

    if (laoded){
        return(
            <Loading/>
        )
    }    
    return(
        <>
            <h3 className='row justify-content-center'>{mensaje}</h3> 
            <ItemList products={products}/>  
                          
        </>
            
            
    )
       
}
export default ItemListContainer

