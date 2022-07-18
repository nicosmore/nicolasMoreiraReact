import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { cartContext }  from '../../Context/CartContext';


const Cart = () =>{
    const {products, removeItem, clear, valorTotal } = useContext(cartContext);   
    
    return(
        <div style={{display: 'flex', justifyContent: 'center'}}>
            {products.length===0
                ?<h1>No hay productos, busca <Link to='/'>aqui</Link></h1>
                :<div >
                    {products.map(product => 
                        <div key={product.id} style={{margin:5,border:'2px solid grey',height:110, display: 'flex', justifyContent:'center', alignItems:'center'}}>
                            <img src={product.img} style={{height:100, marginLeft:10,marginRight:10}} alt=""></img>
                            <h4 style={{marginLeft:15,marginRight:15}}>Producto: {product.name}</h4>
                            <h4 style={{marginLeft:15,marginRight:15}}>Precio: ${product.precio}</h4>
                            <h4 style={{marginLeft:15,marginRight:15}}>Cantidad: {product.quantity}</h4>
                            <button onClick={()=>removeItem(product.id)} style={{height:30,marginLeft:10,marginRight:10}}>Eliminar</button>
                        </div >
                )}
                <div style={{display: 'grid'}}>
                <h4 style={{justifyContent: 'end'}}>Total: $ {valorTotal}</h4>
                <button onClick={clear} >Limpiar Carrito</button>
                </div>
                </div>
            }   
        </div>
    )
    
}
export default Cart