import React from "react";
import { useState } from "react";
import "../../CSS/App.css";
import { Form, FormControl, InputGroup } from "react-bootstrap";
import DatePicker, {registerLocale} from "react-datepicker";
import es from "date-fns/locale/es";
import "react-datepicker/dist/react-datepicker.css";
import { setHours, setMinutes, parseISO } from "date-fns";
import { useNavigate } from "react-router-dom";
import {
  validarMotivoConsulta,
  validarNombreMascota,
} from "../../Components/helpers/ValidacionesTurnos";
import Swal from "sweetalert2";
registerLocale("es", es);

const CrearTurno = ({ getTurnos, URLTurnos }) => {
  console.log(URLTurnos);
  const [profesional, setProfesional] = useState("");
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 0), 8)
  );
  
  const [nombreMascota, setNombreMascota] = useState("");
  const [motivoConsulta, setMotivoConsulta] = useState("");

  const navigate = useNavigate();

  // funciones para crear el turno
  const handleSubmit = (e) => {
    e.preventDefault();

    //validar los campos
    if (
      !validarNombreMascota(nombreMascota) ||
      !validarMotivoConsulta(motivoConsulta)
    ) {
      Swal.fire("Ingresa nuevamente los datos");
      return;
    }

    //guardar datos
    const newTurno = {
      profesional,
      startDate,
      nombreMascota,
      motivoConsulta,
    };

    Swal.fire({
      title: "Estas seguro?",
      text: "Estas por crear un nuevo turno",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Crear",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(URLTurnos, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newTurno),
          });
          if (res.status === 201) {
            Swal.fire("Creado", "Se agrego un nuevo turno", "success");
            getTurnos();
            navigate("/ListadoTurnos");
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  return (
    <div className="container-fluid p-5">
      <h1 className="text-center my-3">GESTION DE TURNOS Y PACIENTES</h1>
      <hr />
      <Form className="my-5" onSubmit={handleSubmit}>
        <Form.Select
          onChange={({ target }) => setProfesional(target.value)}
          className="mb-3"
          required
        >
          <option value="0">Seleccione profesional</option>
          <option value="Dr. Pablo Dominguez">Dr. Pablo Dominguez</option>
          <option value="Dra. Emilse Arias">Dra. Emilse Arias</option>
        </Form.Select>
        <Form.Group>
          <Form.Label>Seleccione fecha y hora </Form.Label>
          
           <DatePicker
            locale={es}
            selected={startDate}
            onChange={(date) => parseISO(setStartDate(date))}
            minDate={new Date()}
            filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
            showTimeSelect
            filterTime={(date) =>
              (date.getHours() >= 8 && date.getHours() <= 12) ||
              (date.getHours() >= 17 && date.getHours() <= 21)
            }
            minTime={parseISO(setHours(setMinutes(new Date(), 0), 8))}
            maxTime={parseISO(setHours(setMinutes(new Date(), 0), 21))}
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
            minLength="3"
            maxLength="20"
            onChange={({ target }) => setNombreMascota(target.value)}
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
            onChange={({ target }) => setMotivoConsulta(target.value)}
          />
        </Form.Group>
        <button className=" btn btn-outline-primary mx-1 text-center text-decoration-none">
          Agregar Turno
        </button>
      </Form>
    </div>
  );
};

export default CrearTurno;
