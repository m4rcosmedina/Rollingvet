import React from 'react';
import CrudListaTurnos from '../Components/CrudListaTurnos';
import { useState } from 'react';
import { Form, Container, Button, Row, Col } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import TimePicker from 'react-time-picker';
import es from 'date-fns/locale/es';
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

const ListaTurnos = () => {
    // variable para DatePicker
    const [selectedDate, setSelectedDate] = useState(null)

    return (
        <div className="fondoGeneral">
            <h1 className='text-center py-4'>TURNOS</h1>
            <CrudListaTurnos></CrudListaTurnos>
            <Container>
                <Row>
                    <Col sm={6}>
                        <Form>
                            <Form.Select className="mb-3">
                                <option >Seleccione un profesional</option>
                                <option > Dr. Milagro</option>
                                <option >Dr. Robazan</option>
                            </Form.Select>
                            <Form.Group className="mb-3">
                                <Form.Label>Fecha</Form.Label>
                                <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)} dateFormat="dd/MM/yyyy" placeholderText='25/01/2022' minDate={new Date()} filterDate={date => date.getDay() !== 6 && date.getDay() !== 0} showYearDropdown scrollableYearDropdown locale={es} isClearable                               />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Label>Hora</Form.Label>
                                <TimePicker className="ms-2" hourPlaceholder='02' minutePlaceholder='50' />
                            </Form.Group>
                            <Form>Seleccione un animal
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
                            </Form>
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