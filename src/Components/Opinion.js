import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';

const Opinion = (props) => {
    let sesionUsuario = JSON.parse(sessionStorage.getItem("stateSession")) || false;
    const [mostrarBoton, setMostrarBoton] = useState(sesionUsuario)
    console.log(sesionUsuario)
  
    return (
        <div>
             <ListGroup.Item className='d-flex justify-content-between text-muted'>
            {props.dato} <> {mostrarBoton ? <button className='btn btn-outline-danger' onClick={()=>props.borrarOpinion(props.dato)}>BORRAR</button> : undefined} </>
        </ListGroup.Item>   
        </div>
    );
};

export default Opinion;