import React,{useState, useContext } from 'react';
import { Link } from "react-router-dom";
import ItemCount from '../Container/ItemCount';
import { cartContext } from '../../Context/CartContext';

const iniciar=1;

const ItemDetail = ({products})=>{      
    
    const [compra, setCompra] = useState(true);
    const { addItem } = useContext(cartContext);

    const onAdd = (count) => {
        setCompra(false);
        addItem({...products, quantity: count});
    }

    return(
        <div style={{margin:5,padding:20 ,border:'2px solid grey',height:600,width:920, display: 'grid',justifyContent:'center'}}>
            <h2 
                style={{
                    margin:5,
                    padding:5, 
                    display: 'flex', 
                    justifyContent:'center'
                    }}>
                {products.name}
            </h2>
            <div style={{display: 'flex', 
                        justifyContent:'center'}}>
                <img 
                    src={products.img} 
                    style={{
                        height:300, 
                        marginLeft:10,
                        marginRight:10, 
                        display: 'flex', 
                        justifyContent:'center'}} 
                    alt="">
                </img>
            </div>
            <p >{products.descripcion}</p>

            {compra 
            ? <ItemCount stock={products.stock} initial={iniciar} onAdd={onAdd} style={{display: 'flex'}}/> 
            :<Link to="/cart">
                <button>Finalizar compra</button>
            </Link>}

        </div>
        
    );
}

export default ItemDetail;