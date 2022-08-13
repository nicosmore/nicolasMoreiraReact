import React, {useContext} from 'react';
import { BsCart3 } from 'react-icons/bs';
import { cartContext } from '../../Context/CartContext';


const CartWidget = () =>{
    const {quantity}= useContext(cartContext);   
    
    return(
    <>{ quantity === 0  
    ? <h3 className="" style={{color:'black'}}><BsCart3 /></h3>
    : <div className='d-flex '>        
        <h2 className='' style={{color:'black'}}><BsCart3 /></h2>
        <h4 id= 'textCart' className='m-2 border-0 p-0'>{quantity}</h4>
      </div>}
    </>
    )
    
}
export default CartWidget