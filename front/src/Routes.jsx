import React from "react";
import { Routes, Route } from "react-router-dom";

// Importação das páginas
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import CreateSensor from "./pages/CreateSensor";

const AppRoutes = () => {
    return (

        <Routes>
            <Route path="/createSensor" element={<CreateSensor />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Home />} />
        </Routes>

    );
};

export default AppRoutes;
