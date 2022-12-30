import React from "react";
import Header from "../components/Header/Header";
import SellingCarSteps from "../components/SellingCarSteps/SellingCarSteps";
import CarForCash from "../components/CarForCash/CarForCash";
import WhySellCar from "../components/WhySellCar/WhySellCar";
import EasyBuying from "../components/EasyBuying/EasyBuying";
const Home = () => {
  return (
    <>
      <Header />
      <SellingCarSteps />
      <CarForCash />
      <WhySellCar />
      <EasyBuying />
    </>
  );
};

export default Home;
