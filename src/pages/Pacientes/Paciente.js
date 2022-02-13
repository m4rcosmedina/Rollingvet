import React from 'react';
import ListadoPacientes from '../ListadoPacientes';

const Paciente = ({pacientes}) => {
    return (
        <div>
            <tr>
                <td>{pacientes.id}</td>
                <td>{pacientes.nombreH}</td>
                <td>{pacientes.email}</td>
                <td>{pacientes.tel}</td>
                <td>{pacientes.nombre}</td>
                <td>{pacientes.especie}</td>
                <td>{pacientes.raza}</td>
                <td>{pacientes.edad}</td>
            </tr>
            
        </div>
    );
};

export default Paciente;