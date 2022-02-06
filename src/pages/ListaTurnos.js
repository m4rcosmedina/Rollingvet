import React from 'react';
import { useState } from 'react';
import { Form, Container, Button, Row, Col, Modal } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import TimePicker from 'react-time-picker';
import es from 'date-fns/locale/es';
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

const ListaTurnos = () => {
    // variable para DatePicker
    const [selectedDate, setSelectedDate] = useState(null)

    // variables para FormSelect
    const [profesional, setProfesional] = useState(null)

    const handleSubmit = e => {
        e.preventDefault();
        console.log(profesional);
    }

    return (
        <div className="fondoGeneral">
            <Form onSubmit={handleSubmit}>
                <Modal.Dialog>
                    <Modal.Body>
                        <h1 className='text-center py-4'>TURNOS</h1>
                        <Container>
                            <Row>
                                <Col sm={6}>
                                    <Form.Select value={profesional || ""} onChange={event => setProfesional(event.target.value)} className="mb-3" required>
                                        <option value="">Seleccione profesional</option>
                                        <option value="1">Dr. Milagro</option>
                                        <option value="2">Dr. Robazan</option>

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
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className='botonEnviar' type="submit">Reservar</Button>
                        <Button className='botonEnviar'>Modificar</Button>
                        <Button className='botonEnviar'>Eliminar</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Form>
        </div>
    );
};

export default ListaTurnos;