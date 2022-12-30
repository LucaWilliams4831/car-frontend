import React, { lazy } from "react";
import Loader from "../components/Loader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Home = lazy(() => import("../pages/Home"));

const AppRoutes = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <BrowserRouter basename={"/"}>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </React.Suspense>
  );
};

export default AppRoutes;
