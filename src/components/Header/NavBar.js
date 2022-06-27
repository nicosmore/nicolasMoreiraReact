import LogoGen from '../../Imagenes/LogoGeneric.png'
import Cart from './CartWidget';


const NavBar = () => {
    return (
        <nav style = {styles.navStyle}>
            <img src={LogoGen} alt="logo"/>
            <li>
                <a style={styles.liStyle} href="">Cerraduras</a>
                <a style={styles.liStyle} href="">Bisagras</a>
                <a style={styles.liStyle} href="">Tiradores</a>
                <a style={styles.liStyle} href="">Guias</a>
                <a style={styles.liStyle} href="">Fijaciones</a>
                <a style={styles.liStyle} href="">Contacto</a>

            </li>
            <Cart/>
            
                        
        </nav>
    );

}
export default NavBar

const styles = {
    navStyle:{
        
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            
        },

    liStyle:{

        padding: 40,
        textDecoration:'none',
        color: 'black',
    },

        
}