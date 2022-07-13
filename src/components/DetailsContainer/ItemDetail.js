import React,{useState, } from 'react';
import { Link } from "react-router-dom";
import ItemCount from '../Container/ItemCount';

const iniciar=1;



const ItemDetail = ({products})=>{        
    console.log(products)
    
    const [compra, setCompra] = useState(true);

    const onAdd = (count) => {
        setCompra(false);
    }

    return(
        <div>
            <h2>{products.name}</h2>
            <img src={products.img} alt=""></img>
            <p>{products.descripcion}</p>

            {compra 
            ? <ItemCount stock={products.stock} initial={iniciar} onAdd={onAdd}/> 
            :<Link to="/cart">
                <button>Finalizar compra</button>
            </Link>}

        </div>
        
    );
}

export default ItemDetail;