import React from "react";
import Spinner from 'react-bootstrap/Spinner';

const Loading = () =>{
    return(
        <div style={styles.estiloUno}>
            <div style={styles.estiloDos}>                
                    
                    <h4><Spinner                    
                    as="span"
                    animation="grow"
                    size="xl"
                    role="status"
                    aria-hidden="true"
                    /> Cargando</h4>                 
            </div>
        </div>        
            
       

    )
}
const styles = {
    estiloUno: {
        height:'100vh',
        position: 'relative'        
    },

    estiloDos:{
        margin:0,
        position:'absolute',
        top:'20%',
        left:'50%',


    }
        
    
}

export default Loading;

