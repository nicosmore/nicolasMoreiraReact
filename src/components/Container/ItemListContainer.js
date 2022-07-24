import ItemList from './ItemList';
import Loading from '../Animaciones/Loading';
import React,{useState, useEffect} from 'react';
import { useParams} from 'react-router-dom';
import { db } from '../../firebase/firebase';
import { getDocs, collection, query, where } from 'firebase/firestore';

const ItemListContainer = ({mensaje}) =>{

    const {categoryName} = useParams();
    const [products, setProducts] = useState([]);
    const [laoded, setLoaded] = useState(true);

    useEffect(() => {

        const productCollection = categoryName
        ? query (collection(db,'productos'),where('categoria','==',categoryName))
        :collection(db,'productos');
        /* const q = query(productColection, where('categoryName', '==','??' )) */

        getDocs(productCollection)
            .then(result =>{                
                 const lista = result.docs.map(doc =>{             

                    return {
                        id: doc.id,
                        ...doc.data(),
                    }
                }) 
                setProducts(lista); 
            })
            .catch(err => console.log(err))
            .finally(() => setLoaded(false))

        /* const URL = categoryName 
        ? `http://localhost:5000/productos/?categoria=${categoryName}`
        : 'http://localhost:5000/productos'
        
        fetch(URL)
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.log(err))
            .finally(() => setLoaded(false)) */

    }, [categoryName]); 
   
    

    if (laoded){
        return(
            <Loading/>
        )
    }    
    return(
        <>
            <h3>{mensaje}</h3> 
            <ItemList style={{display: 'flex', justifyContent: 'center'}} products={products}/>  
                          
        </>
            
            
    )
       
}



export default ItemListContainer

