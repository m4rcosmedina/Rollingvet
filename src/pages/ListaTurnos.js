import React from 'react';
import { useState } from 'react';
import { Form, Container, Button, Row, Col, Modal } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import TimePicker from 'react-time-picker';
import es from 'date-fns/locale/es';
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

const FormTurnos = () => {
    // variable para DatePicker
    const [selectedDate, setSelectedDate] = useState(null)

    // funciones para CRUD
    const handleChange = (e) => { }
    const handleSubmit = (e) => {

    }
    const handleReset = (e) => { }

    return (
        <div className="fondoGeneral">
            <Modal.Dialog>
                <Modal.Body>
                    <h1 className='text-center py-4'>TURNOS</h1>
                    <Container>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Select className="mb-3">
                                        <option >Seleccione un profesional</option>
                                        <option > Dr. Milagro</option>
                                        <option >Dr. Robazan</option>
                                    </Form.Select>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Fecha</Form.Label>
                                        <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)} dateFormat="dd/MM/yyyy" placeholderText='25/01/2022' minDate={new Date()} filterDate={date => date.getDay() !== 6 && date.getDay() !== 0} showYearDropdown scrollableYearDropdown locale={es} isClearable />
                                    </Form.Group>
                                    <Form.Group className='mb-3'>
                                        <Form.Label>Hora</Form.Label>
                                        <TimePicker className="ms-2" hourPlaceholder='02' minutePlaceholder='50' />
                                    </Form.Group>
                                    <Form.Check>Seleccione un animal
                                        <Form.Check
                                            type="radio"
                                            label="Perro"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios1"
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="Gato"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios2"
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="Otro"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios3"
                                        />
                                    </Form.Check>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Seleccione el motivo de su consulta</Form.Label>
                                        <Form.Control type="textarea" />
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='botonEnviar'>Agendar</Button>
                    <Button className='botonEnviar'>Modificar</Button>
                    <Button className='botonEnviar'>Eliminar</Button>
                </Modal.Footer>
            </Modal.Dialog>

        </div>
    );
};

export default FormTurnos;