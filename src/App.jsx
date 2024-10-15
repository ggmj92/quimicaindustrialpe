import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/Routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/App.css";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <AppRoutes />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
