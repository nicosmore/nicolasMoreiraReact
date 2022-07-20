import React, {useContext} from 'react';
import { BsCart3 } from 'react-icons/bs';
import { cartContext } from '../../Context/CartContext';


const CartWidget = () =>{
    const {quantity}= useContext(cartContext);
    var cantidad = quantity === 0 ? (true) : (false);

    return(
    <>{ quantity === 0  
    ? <h2 style={{color:'black', display:'flex', alignItems: 'center', textDecoration: 'none'}}><BsCart3 /></h2>
    : <h2 style={{color:'black', display:'flex', alignItems: 'center', textDecoration: 'none'}}>{quantity}<BsCart3 /> </h2>}
    </>
    )
    
}
export default CartWidget