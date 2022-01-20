import React from "react";
import Footer from "./Footer";
import CarouselPrincipal from "./CarouselPrincipal";
import ContainerPrincipal from "./ContainerPrincipal";
import PromosPrincipal from "./PromosPrincipal";


const Inicio = () => {
  return (
    <div>
      <CarouselPrincipal></CarouselPrincipal>
      <PromosPrincipal></PromosPrincipal>
      <ContainerPrincipal></ContainerPrincipal>
      <Footer></Footer>
    </div>
  );
};

export default Inicio;
