import React from "react";
import CarouselPrincipal from "../Components/CarouselPrincipal";
import ContainerPrincipal from "../Components/ContainerPrincipal";
import OpinionesPrincipal from "../Components/OpinionesPrincipal";
import PromosPrincipal from "../Components/PromosPrincipal";
import Sponsors from "../Components/Sponsors";
import ApiClima from "../Components/ApiClima";


const Inicio = ({weather}) => {
  return (
    <div>
      <ApiClima weather={weather}></ApiClima>
      <CarouselPrincipal></CarouselPrincipal>
      <ContainerPrincipal></ContainerPrincipal>
      <PromosPrincipal></PromosPrincipal>
      <OpinionesPrincipal></OpinionesPrincipal>
      <Sponsors></Sponsors>
    </div>
  );
};

export default Inicio;
