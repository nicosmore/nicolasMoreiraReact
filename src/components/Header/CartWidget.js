import React, {useContext} from 'react';
import { BsCart3 } from 'react-icons/bs';
import { cartContext } from '../../Context/CartContext';


const CartWidget = () =>{
    const {quantity}= useContext(cartContext);
    

    return(
    <h2 style={{color:'black', display:'flex', alignItems: 'center', textDecoration: 'none'}}>{quantity}<BsCart3 /> </h2>
    )
    
}
export default CartWidget