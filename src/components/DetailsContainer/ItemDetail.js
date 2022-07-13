import React from "react";
import { Link } from "react-router-dom";
import ItemCount from '../Container/ItemCount';

const cantidad = 10;
const iniciar=1;

const ItemDetail = ({products})=>{        
    console.log(products)
    return(
        <div>
            <h2>{products.name}</h2>
            <img src={products.img} alt=""></img>
            <p>{products.descripcion}</p>
            <ItemCount stock={cantidad} initial={iniciar}/> 
            <Link to="/cart">
                <button>Finalizar compra</button>
            </Link>

        </div>
        
    );
}

export default ItemDetail;