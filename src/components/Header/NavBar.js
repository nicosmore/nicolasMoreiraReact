import LogoGen from '../../Imagenes/LogoGeneric.png'
import CartWidget from './CartWidget';
import '../../Styles/style.css'
import { Link, NavLink } from 'react-router-dom';

const categories=[
  {name:"bisagra", id:0, route:"/bisagra"},
  {name:"corredera", id:1, route:"/corredera"},
  {name:"tirador", id:2, route:"/tirador"}  
] 


const NavBar = () => {
    return (
    <div className='navContenedor'>
    <Link to='/'><img src={LogoGen} alt=""/></Link>    
    <nav className='navMenu'> 
      {categories.map((category) => <NavLink key={category.id} className='navMenuText' to={category.route}>{category.name}</NavLink>)}           
    </nav>   
    <Link to='/cart'><CartWidget/></Link>  
    </div> 
    );

}




export default NavBar