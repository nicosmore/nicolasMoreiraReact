import NavBar from './NavBar'
/* import './Header.css */


const Header = () => {
    return (
        <header style={styles.StyleHeader}>
            <h1 style={styles.StyleH1}>Tienda de Herrajes</h1>                        
            <NavBar/>
            
        </header>
    );

}
export default Header

const styles = {
    StyleHeader: {
        display:'row',    
        alignItems: 'center',    
    },
    
    StyleH1:{
        display: 'flex',        
        color: 'black',
        justifyContent: 'center',
            
    }
}