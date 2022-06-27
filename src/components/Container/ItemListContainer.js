import ItemCount from './ItemCount';

const cantidad = 10;
const iniciar=1;

const ItemList = ({mensaje}) =>{
    return(
        <>
            <h3 style={styles.StyleH3}>{mensaje}</h3>    
            <ItemCount stock={cantidad} initial={iniciar}/>  
        </>
        
        
    )
}
export default ItemList

const styles = {
    StyleH3: {
        display:'flex',    
        justifyContent:'center',                
        color:'red',
        border:'solid',
        margin:200,   
    }
}