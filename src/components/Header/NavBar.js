import LogoGen from '../../Imagenes/LogoGeneric.png'
import Cart from './CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = () => {
    return (
    <>
        <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home"><img src={LogoGen} alt="logo"/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Cerraduras">Cerraduras</Nav.Link>
            <Nav.Link href="#Bisagras">Bisagras</Nav.Link>
            <Nav.Link href="#Tiradores">Tiradores</Nav.Link>
            <Nav.Link href="#Guias">Guias</Nav.Link>
            <Nav.Link href="#Fijaciones">Fijaciones</Nav.Link>
            <Nav.Link href="#Contacto">Contacto</Nav.Link>            
        </Nav>
          <Cart className=""/>
        </Container>
      </Navbar>
    </>
        
            
            
                        
        
    );

}
export default NavBar