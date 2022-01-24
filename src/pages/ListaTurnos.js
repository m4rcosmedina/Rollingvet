import React from 'react';
import { Form, Container, Button } from 'react-bootstrap';
import DatePicker from "react-datepicker"
import TimePicker from 'react-time-picker';

const ListaTurnos = () => {
    return (
        <div className="fondoGeneral">
            <h1 className='text-center'>SOLICITE SU TURNO</h1>
            <Container>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Seleccione un profesional</Form.Label>
                        <Form.Select>
                            <option>Dr. Milagro</option>
                            <option>Dr. NoMilagro</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Seleccione la fecha</Form.Label>
                        <DatePicker dateFormat="dd/MMM/yyyy"
                        />
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Seleccione la hora</Form.Label>
                        <TimePicker />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Seleccione el motivo de su consulta</Form.Label>
                        <Form.Control type="textarea" />
                    </Form.Group>
                    <Button type="submit" className="botonEnviar">
                        Enviar
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default ListaTurnos;