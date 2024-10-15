import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import ContactPage from "../pages/ContactPage.astro";
import AllProducts from "../pages/ProductsPage.astro";
import QuoteForm from "../pages/QuotePage.astro";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/inicio" element={<HomePage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/productos" element={<AllProducts />} />
            <Route path="/cotizar" element={<QuoteForm />} />
        </Routes>
    );
};

export default AppRoutes;
