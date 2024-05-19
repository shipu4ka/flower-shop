import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FunctionComponent } from "react";
import { Header } from "./components/header/Header";
import { Catalog } from "./components/catalog/Catalog";
import { Advices } from "./components/advices/Advices";
import { Gallery } from "./components/gallery/Gallery";
import { AboutUs } from "./components/aboutUs/AboutUs";
import './App.css';

export const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="wrapper-content">
        <img src="./assets/images/flower.gif" alt="flower" className="background-image"/>
        <Routes>
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/advices" element={<Advices />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};
