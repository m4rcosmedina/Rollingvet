import React from 'react';
import { ListGroup } from 'react-bootstrap';

const Opinion = (props) => {
    return (
        <div>
             <ListGroup.Item className='d-flex justify-content-between text-muted'>
            {props.dato} 
        </ListGroup.Item>   
        </div>
    );
};

export default Opinion;