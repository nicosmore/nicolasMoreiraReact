import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";


const Item = ({product}) => {

    return(
        
        <Card className='m-2' style={{ width: '16rem',}}>             
            <Card.Img variant="top" className='fluid' src={product.img} style={{ }}/>
            <Card.Header className='fs-5'>{product.name}</Card.Header>
            <Card.Body className='row'>                
                <Card.Text >{product.descripcion}</Card.Text>
                <Link to={`/productos/${product.id}`}>
                    <Button className='' variant="primary" style={{ }}>Comprar</Button>
                </Link>
            </Card.Body>
        </Card>       
    )   
}   

export default Item