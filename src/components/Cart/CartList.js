import React, {useContext}from 'react';
import { cartContext }  from '../../Context/CartContext';

const CartList = ({product}) =>{
    const {removeItem}  = useContext(cartContext);

    return(
        <div key={product.id} className='shadowT border bg-light row row-cols-5 align-items-center m-2 mx-5 px-5'>
            <img className='m-2 border' src={product.img} alt="" style={{width: '10%',}}></img>
            <h5 className='mx-5'>Prod: {product.name}</h5>
            <h5>Precio: ${product.precio}</h5>
            <h5>Cantidad: {product.quantity}</h5>
            <button className='btn btn-outline-danger' style={{width:50}} onClick={()=>removeItem(product.id)}>X</button>
        </div >
    )
}

export default CartList