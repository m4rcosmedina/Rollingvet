import React, { useState } from 'react';
import { Form, Container, Button, Row, Col } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import TimePicker from 'react-time-picker';
import es from 'date-fns/locale/es';
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

const initialForm = {
    profesional: "",
    opcion1: "",
    opcion2: "",
    consulta: ""
}

const initialDb = [];

const ListaTurnos = () => {
    // variable para DatePicker
    const [selectedDate, setSelectedDate] = useState(null)
    // variables del CRUD
    const [Db, setDb] = useState([initialDb]);
    const [form, setForm] = useState([initialForm]);
    // variable de estado
    const [dataParaEditar, setDataParaEditar] = useState([null]);

    // funciones del CRUD
    const createData = (data) => { };
    const updateData = (data) => { };
    const deleteData = (data) => { };

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.profesional]: e.target.value,
            [e.target.opcion1]: e.target.value,
            [e.target.opcion2]: e.target.value,
            [e.target.consulta]: e.target.value
        });
     }
    const handleSubmit = (e) => { 
        e.preventDefault();

        if(!form.profesional){
            alert("Debe seleccionar una opcion");
            return;
        }; 
        if (form.id === null){
            createData(form)
        }

    }
    const handleReset = (e) => { }

    return (
        <div className="fondoGeneral">
            <h1 className='text-center py-4'>TURNOS</h1>
            <Container>
                <Row>
                    <Col sm={6}>
                        <Form createData={createData} updateData={updateData} dataParaEditar={dataParaEditar} setDataParaEditar={setDataParaEditar} onSubmit={handleSubmit}>
                            <Form.Select className="mb-3">
                                <option onChange={handleChange} value={form.profesional}>Seleccione un profesional</option>
                                <option onChange={handleChange} value={form.opcion1}> Dr. Milagro</option>
                                <option onChange={handleChange} value={form.opcion2}>Dr. Robazan</option>
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
                                    onChange={handleChange}
                                    value={form.animal1}
                                />
                                <Form.Check
                                    type="radio"
                                    label="Gato"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios2"
                                    onChange={handleChange}
                                    value={form.animal2}
                                />
                                <Form.Check
                                    type="radio"
                                    label="Otro"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios3"
                                    onChange={handleChange}
                                    value={form.animal3}
                                />
                            </Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Seleccione el motivo de su consulta</Form.Label>
                                <Form.Control type="textarea" onChange={handleChange} value={form.consulta} />
                            </Form.Group>
                            <Button type="submit" className="botonEnviar">
                                Enviar
                            </Button>
                            <Button type="reset" className="botonEnviar" onClick={handleReset}>Resetear</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ListaTurnos;