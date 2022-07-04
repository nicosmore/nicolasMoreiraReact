import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Item = ({product}) => {

    return(
        <Card border="dark" className='m-2' style={{ width: '18rem',}}> 
            <Card.Header className='fs-5'>{product.name}</Card.Header>
            <Card.Img variant="top" className='fluid' src={product.img}/>
            <Card.Body className='row ' border="dark">                
                <Card.Text>{product.descripcion}</Card.Text>
                <Button className='' variant="primary">Comprar</Button>
            </Card.Body>
        </Card>       
    )
}   

export default Item