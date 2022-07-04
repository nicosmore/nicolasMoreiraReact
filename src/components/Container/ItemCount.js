import React, {useState} from 'react';

function Counter({stock, initial}) {

    const [count, setCount] = useState(initial);
        
    const sumar=()=>{
        count < stock && setCount(count + 1);        
        }    

    const quitar=()=>{
        setCount(Math.max(count - 1,1));

    }

    const onAdd = () =>{
        alert('Comprastes '+ count +' productos')
    }
    
    return (
      <div style={styles.Style}>        
        <button onClick={quitar} style={styles.Boton}>-</button>
        <p style={styles.Boton}>{count}</p>
        <button onClick={sumar} style={styles.Boton}>+</button>
        <button onClick={onAdd} style={styles.Boton}>Comprar</button>        
      </div>
    );
}
  
export default Counter

const styles = {
    Style: {
        display:'flex',                
        padding:5,   
        justifyContent:'center',
        alignItems: 'center',      
        border: '1px solid black',  
        marginLeft:'40%',
        marginRight:'40%',         
    },

    Boton:{
        padding:10,
        margin:5,

    }
        
    
}