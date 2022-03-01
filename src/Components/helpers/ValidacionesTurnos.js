//ExpresionesRegulares
const regExpNombreMascota = /^[A-Za-z\s?]+$/;
const regExpMotivoConsulta = /^[A-Za-z\s?]+$/;

//validacion funciones
export const validarNombreMascota = (field) => {
    if (regExpNombreMascota.test(field) && field.trim() !== ""){
        return true;
    } else {
        return false;
    }
};

export const validarMotivoConsulta = (field) => {
    if (regExpMotivoConsulta.test(field) && field.trim() !== ""){
        return true;
    } else {
        return false;
    }
};