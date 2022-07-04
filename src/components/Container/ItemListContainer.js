import ItemCount from './ItemCount';
import ItemList from './ItemList';
import Productos from '../Listado/Productos'
import Loading from '../Animaciones/Loading'
import React,{useState, useEffect} from 'react'


const cantidad = 10;
const iniciar=1;


const ItemListContainer = ({mensaje}) =>{

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
   
    const promesa = new Promise((resolve,reject)=>{
        
        setTimeout(()=>{            
            resolve(Productos)
        },2000)
        
    });
    
    useEffect(() =>{        
        setLoading(true);
        promesa.then((data)=>{
            setLoading(false);
            setProducts(data);

        })          

    },[]); 

    if (loading){
        return(
            <Loading/>
        )
    }    
    return(
        <>
            <h3 className='row justify-content-center'>{mensaje}</h3> 
            <ItemList products={products}/>  
            <ItemCount stock={cantidad} initial={iniciar}/>                
        </>
            
            
    )
       
}
export default ItemListContainer

