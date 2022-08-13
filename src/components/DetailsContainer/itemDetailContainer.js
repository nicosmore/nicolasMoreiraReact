import ItemDetail  from './ItemDetail';
import Loading from '../Animaciones/Loading';
import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/firebase';
import { getDoc, collection, doc } from 'firebase/firestore';


const ItemDetailContainer = ({mensajeDetail})=>{

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const {itemId}= useParams();
   
    useEffect(() => {

        const productCollection = collection(db,'productos');
        const refDoc =doc(productCollection, itemId);
        getDoc(refDoc)
        .then(result =>{
            const producto = {
                id: result.id,
                ...result.data(),
            }
            setProducts(producto);
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false))


    /*     const URL = `http://localhost:5000/productos/${itemId}`
        fetch(URL)
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.log(err))
            .finally(() => setLoading(false)) */

    }, [itemId]); 

    if (loading){
        return(
            <Loading/>
        )
    }    
    return(
        <>
            <h4 className="d-flex justify-content-center border-top pt-3 fw-normal">{mensajeDetail}</h4> 
            <ItemDetail products={products} style={{display: 'flex', justifyContent: 'center'}} />  
        </>       
    )
}



export default ItemDetailContainer;