import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import ContactPage from "../pages/ContactPage.jsx";
import AllProducts from "../pages/ProductsPage.jsx";
import QuotePage from "../pages/QuotePage.jsx";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/inicio" element={<HomePage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/productos" element={<AllProducts />} />
            <Route path="/cotizar" element={<QuotePage />} />
        </Routes>
    );
};

export default AppRoutes;
