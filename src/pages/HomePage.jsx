import React from "react";
import CategoryData from "../services/categoryService.jsx";

const HomePage = () => {
    return (
        <div className="container">
            <h1>Química Industrial</h1>
            <h2>Venta de Productos Químicos en el Perú</h2>
            <CategoryData client:load />
            <h3>¿Quienes Somos?</h3>
            <p>
                Química Industrial es una empresa privada que forma parte de
                Oregon Chem Group cuya actividad está centrada en la venta de
                productos químicos y lubricantes industriales en el Perú para
                diferentes industrias y particulares.
            </p>
        </div>
    );
};

export default HomePage;

