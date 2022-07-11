import ItemDetail  from './ItemDetail';
import Loading from '../Animaciones/Loading';
import React,{useState, useEffect} from 'react';
import ItemCount from '../Container/ItemCount';
import { useParams } from 'react-router-dom';

const cantidad = 10;
const iniciar=1;

const ItemDetailContainer = ({mensajeDetail})=>{

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const {itemId}= useParams();
   
    useEffect(() => {
        const URL = `http://localhost:5000/productos?id=${itemId}`
        fetch(URL)
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [itemId]); 

    if (loading){
        return(
            <Loading/>
        )
    }    
    return(
        <>
            <h3 className='row justify-content-center'>{mensajeDetail}</h3> 
            <ItemDetail products={products}/>  
            <ItemCount stock={cantidad} initial={iniciar}/>                  
           
        </>       
    )
}



export default ItemDetailContainer;