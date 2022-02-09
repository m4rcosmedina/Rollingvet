import React from "react";
import CarouselPrincipal from "../Components/CarouselPrincipal";
import ContainerPrincipal from "../Components/ContainerPrincipal";
import OpinionesPrincipal from "../Components/OpinionesPrincipal";
import PromosPrincipal from "../Components/PromosPrincipal";

const Inicio = () => {
  return (
    <div>
      <CarouselPrincipal></CarouselPrincipal>
      <ContainerPrincipal></ContainerPrincipal>
      <PromosPrincipal></PromosPrincipal>
      <OpinionesPrincipal></OpinionesPrincipal>
    </div>
  );
};

export default Inicio;
