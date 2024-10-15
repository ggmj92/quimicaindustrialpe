import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/qiLogo.png";
console.log(Logo)

const Navbar = () => {
    return (
        <nav>
            <div>
                <Link to="/">
                    <img className="logo" src={Logo.src} alt="Logo Química Industrial 2024" />
                </Link>
            </div>
            <div>
                <ul className="nav-list">
                    <li><Link to="/inicio">Inicio</Link></li>
                    <li><Link to="/productos">Productos</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                    <li><Link to="/cotizar">Cotizar</Link></li>
                </ul>
            </div>
            <div>
                <p>Wishlist</p>
            </div>
        </nav>
    );
};

export default Navbar;


