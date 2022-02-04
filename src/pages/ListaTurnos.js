import React, { useState } from 'react';
import { Form, Container, Button, Row, Col } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import TimePicker from 'react-time-picker';
import es from 'date-fns/locale/es';
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

const ListaTurnos = () => {
    const [selectedDate, setSelectedDate] = useState(null)

    return (
        <div className="fondoGeneral">
            <h1 className='text-center py-4'>TURNOS</h1>
            <Container>
                <Row>
                    <Col sm={6}>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Seleccione un profesional</Form.Label>
                                <Form.Select required>
                                    <option>Dr. Milagro</option>
                                    <option>Dr. NoMilagro</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Fecha</Form.Label>
                                <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)} dateFormat="dd/MM/yyyy" placeholderText='25/01/2022' minDate={new Date()} filterDate={date => date.getDay() !== 6 && date.getDay() !== 0} showYearDropdown scrollableMonthYearDropdown locale={es} required
                                />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Label>Hora</Form.Label>
                                <TimePicker className="ms-2" hourPlaceholder='02' minutePlaceholder='50' required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">Seleccione un animal
                                <Form.Check type="checkbox" label="Gato" />
                                <Form.Check type="checkbox" label="Perro" />
                                <Form.Check type="checkbox" label="Otro" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Seleccione el motivo de su consulta</Form.Label>
                                <Form.Control type="textarea" />
                            </Form.Group>
                            <Button type="submit" className="botonEnviar">
                                Enviar
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ListaTurnos;