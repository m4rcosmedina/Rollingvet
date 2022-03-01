import React from "react";
import CarouselPrincipal from "../Components/CarouselPrincipal";
import ContainerPrincipal from "../Components/ContainerPrincipal";
import PromosPrincipal from "../Components/PromosPrincipal";
import Sponsors from "../Components/Sponsors";
import ApiClima from "../Components/ApiClima";
import MostrarComentarios from "../Components/MostrarComentarios";

const Inicio = ({weather}) => {
  return (
    <div>
      <ApiClima weather={weather}></ApiClima>
      <CarouselPrincipal></CarouselPrincipal>
      <ContainerPrincipal></ContainerPrincipal>
      <PromosPrincipal></PromosPrincipal>
      <MostrarComentarios></MostrarComentarios>
      <Sponsors></Sponsors>
    </div>
  );
};

export default Inicio;
