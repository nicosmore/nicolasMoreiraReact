import React from "react";
import { Link } from "react-router-dom";


const ItemDetail = ({products})=>{        
    console.log(products)
    return(
        <div>
            <h2>{products.name}</h2>
            <img src={products.img} alt=""></img>
            <p>{products.descripcion}</p>
            <Link to="/cart">
                <button>Finalizar compra</button>
            </Link>
        </div>
        
    );
}

export default ItemDetail;