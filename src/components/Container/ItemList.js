import Item from './Item'
import React from 'react'

const ItemList = ({products}) =>{    
    
    
    return(
        <div className='row justify-content-center'>           
            {products.map(product => (
            <Item key={product.id} product={product}/>
            ))}
        </div>
    )

}

export default ItemList