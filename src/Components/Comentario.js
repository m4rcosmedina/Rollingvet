import React from 'react';
import { ListGroup } from 'react-bootstrap';

const Comentario = (props) => {
    return (
        <div>
            <ListGroup.Item className='d-flex justify-content-between'>
                {props.dato}
            </ListGroup.Item>
        </div>
    );
};

export default Comentario;