import React, { useState } from "react";
import "../styles/QuotePage.css";

const QuotePage = () => {
    const [selectedContactMethod, setSelectedContactMethod] = useState("");
    return (
        <>
            <h1>Formulario de Cotización</h1>
            <div className="container">
                <form action="submit" className="quote-form">
                    <div className="product-section">
                        <input type="text" placeholder="Producto" />
                        <select name="" id="">
                            <option value="presentation">Presentación</option>
                        </select>
                        <input type="number" placeholder="Volumen" />
                        <select name="" id="" placeholder="Frecuencia">
                            <option value="">Única Compra</option>
                            <option value="">Quincenal</option>
                            <option value="">Mensual</option>
                            <option value="">Bimestral</option>
                            <option value="">Trimestral</option>
                        </select>
                    </div>
                    <button className="add-product">Agregar Productos +</button>
                    <div className="client-section">
                        <div className="client-type">
                            <label>Tipo de cliente:</label>
                            <select name="" id="">
                                <option value="">Persona Natural</option>
                                <option value="">Empresa</option>
                                <option value="">Persona Natural con Empresa</option>
                            </select>
                        </div>
                        <div className="client-info">
                            <input type="text" placeholder="Nombre" />
                            <input type="text" placeholder="Apellidos" />
                            <input type="text" placeholder="DNI" />
                            <input type="text" placeholder="Celular" />
                            <input type="email" placeholder="Email" />
                            <input type="text" placeholder="Empresa" />
                            <input type="text" placeholder="Razón Social" />
                            <input type="text" placeholder="RUC" />
                        </div>
                    </div>
                    <h2>¿Cómo quiero que me contacten?</h2>
                    <div className="contact-method">
                        <button
                            type="button"
                            className={selectedContactMethod === "email" ? "active" : ""}
                            onClick={() => setSelectedContactMethod("email")}
                        >
                            Email
                        </button>
                        <button
                            type="button"
                            className={selectedContactMethod === "whatsapp" ? "active" : ""}
                            onClick={() => setSelectedContactMethod("whatsapp")}
                        >
                            Whatsapp
                        </button>
                        <button
                            type="button"
                            className={selectedContactMethod === "call" ? "active" : ""}
                            onClick={() => setSelectedContactMethod("call")}
                        >
                            Llamada
                        </button>
                    </div>
                    <div className="observations">
                        <textarea placeholder="Observaciones"></textarea>
                    </div>

                    <div className="terms">
                        <input type="checkbox" id="terms" />
                        <label htmlFor="terms">He leído los términos y condiciones</label>
                    </div>

                    <button type="submit" className="submit-button">
                        Enviar cotización
                    </button>
                </form>
            </div>
        </>
    );
};

export default QuotePage;