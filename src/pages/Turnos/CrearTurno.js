import React from "react";
import { useState } from "react";
import "../../CSS/App.css";
import {
  Form,
  Button,
  FormControl,
  InputGroup,
  FormSelect,
} from "react-bootstrap";
import DatePicker from "react-datepicker";
import es from "date-fns/locale/es";
import "react-datepicker/dist/react-datepicker.css";
import { setHours, setMinutes } from "date-fns";
import { Link } from "react-router-dom";

const CrearTurno = () => {
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 0), 8)
  );

  // states
  const [profesional, setProfesional] = useState();
  const [fechahora, setFechaHora] = useState(0);
  const [consulta, setConsulta] = useState("");

  // funciones
  const handleSubmit = (e) => {
    e.preventDefault();
    // validar los campos
  };

  return (
    <div className="container-fluid p-5">
      <h1 className="text-center my-3">GESTION DE TURNOS Y PACIENTES</h1>
      <hr />
      <Form className="my-5">
        {handleSubmit}
        <Form.Select
          onChange={(e) => setProfesional(e.target.value)}
          className="mb-3"
          required
        >
          <option value="0">Seleccione profesional</option>
          <option value="Dr. Pablo Dominguez">Dr. Pablo Dominguez</option>
          <option value="Dra. Emilse Arias">Dra. Emilse Arias</option>
        </Form.Select>
        <Form.Group>
          <Form.Label>Seleccione fecha y hora</Form.Label>
          <DatePicker
            locale={es}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            minDate={new Date()}
            filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
            showTimeSelect
            filterTime={(date) =>
              (date.getHours() >= 8 && date.getHours() <= 12) ||
              (date.getHours() >= 17 && date.getHours() <= 21)
            }
            minTime={setHours(setMinutes(new Date(), 0), 8)}
            maxTime={setHours(setMinutes(new Date(), 0), 21)}
            dateFormat="dd/MM/yyyy  hh:mm"
          ></DatePicker>
        </Form.Group>
        <Form.Label>Nombre de Mascota</Form.Label>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Ej: Negro"
            aria-label="Nombre y Apellido"
            type="text"
            required
            minlength="3"
            maxlength="20"
          />
        </InputGroup>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Indique el motivo de su consulta</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            required
            minLength="3"
            maxLength="100"
          />
        </Form.Group>
        <Link
          to="/ListadoTurnos"
          className="botonEnviar btn btn-outline-primary mx-1 text-center text-decoration-none"
        >
          Agregar Turno
        </Link>
      </Form>
    </div>
  );
};

export default CrearTurno;
