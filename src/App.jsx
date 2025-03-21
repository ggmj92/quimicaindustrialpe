import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/Routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { WishlistProvider } from "./contexts/WishlistContext";
import WhatsappButton from "./components/WhatsappButton";
import "./styles/index.css";

function App() {
    return (
        <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <WishlistProvider>
                <div className="App">
                    <Navbar />
                    <WhatsappButton />
                    {/* Wrap Routes in a .wrapper div */}
                    <div className="wrapper">
                        <AppRoutes />
                    </div>
                    <Footer />
                </div>
            </WishlistProvider>
        </Router>
    );
}

export default App;


