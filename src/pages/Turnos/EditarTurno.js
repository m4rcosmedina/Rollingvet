import React, { useRef } from "react";
import { useState } from "react";
import "../../CSS/App.css";
import {
  Form,
  Button,
  FormControl,
  InputGroup,
  FormSelect,
} from "react-bootstrap";
import DatePicker, { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import "react-datepicker/dist/react-datepicker.css";
import { setHours, setMinutes, parseISO } from "date-fns";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  validarMotivoConsulta,
  validarNombreMascota,
} from "../../Components/helpers/ValidacionesTurnos";
import Swal from "sweetalert2";
registerLocale("es", es);

const EditarTurno = ({ getTurnos, URLTurnos }) => {
  const [startDate, setStartDate] = useState();
   

  //State
  const [turnoEditado, setTurnoEditado] = useState({});

  //Parametro
  const { id } = useParams();

  //Referencias
  const profesionalRef = useRef("");
  const startDateRef = useRef("");
  const nombreMascotaRef = useRef("");
  const motivoConsultaRef = useRef("");

  //navigate
  const navigate = useNavigate();

  //useEffect
  useEffect(async () => {
    try {
      const res = await fetch(`${URLTurnos}/${id}`);
      const turnoEditado = await res.json();
      setTurnoEditado(turnoEditado);
      setStartDate(parseISO(turnoEditado.startDate));
    } catch (error) {
      console.log(error);
    }
  }, []);

  // funciones
  const handleSubmit = (e) => {
    e.preventDefault();
    //validar los campos
    if (
      !validarNombreMascota(nombreMascotaRef.current.value) ||
      !validarMotivoConsulta(motivoConsultaRef.current.value)
    ) {
      Swal.fire("Ingresa nuevamente los datos");
      return;
    }

    //guardo el objeto
    const turnoGuardado = {
      profesional: turnoEditado.profesional,
      startDate: startDate   ,
      nombreMascota: nombreMascotaRef.current.value,
      motivoConsulta: motivoConsultaRef.current.value,
    };

    Swal.fire({
      title: "Estas seguro?",
      text: "Estas por editar un turno",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Editar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(`${URLTurnos}/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(turnoGuardado),
          });
          if (res.status === 200) {
            Swal.fire("Modificado", "Se modificó el turno", "success");
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
      <h1 className="text-center my-3">EDITAR TURNOS Y PACIENTES</h1>
      <hr />
      <Form className="my-5" onSubmit={handleSubmit}>
        <Form.Select
          value={turnoEditado.profesional}
          onChange={({ target }) =>
            setTurnoEditado({ ...turnoEditado, profesional: target.value })
          }
          ref={profesionalRef}
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
            value={startDate}
            ref={startDateRef}
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
            defaultValue={turnoEditado.nombreMascota}
            ref={nombreMascotaRef}
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
            defaultValue={turnoEditado.motivoConsulta}
            ref={motivoConsultaRef}
          />
        </Form.Group>
        <button className="botonEnviar btn btn-outline-primary mx-1 text-center text-decoration-none">
          Editar Turno
        </button>
      </Form>
    </div>
  );
};

export default EditarTurno;
