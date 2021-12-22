import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import KecapInsert from "./pages/kecap/insert";
import KecapPage from "./pages/kecap/kecap";
import KecapUpdate from "./pages/kecap/update";
import LoginPage from "./pages/login";

class RouteSetup extends React.Component{
    render(){
        const routes = (
            <Routes>
                <Route path="/" element={<Navigate replace to="/Login" />} />
                <Route path="Login" element={<LoginPage />} />
                <Route path="Dashboard" element={<Dashboard />}/>
                <Route path="Kecap" element={<KecapPage />} />
                <Route path="Kecap/Insert" element={<KecapInsert />} />
                <Route path="Kecap/Update" element={<KecapUpdate />} />
                <Route path="Kecap/Delete" element={<KecapInsert />} />
            </Routes>
        );

        return routes;
    }
}

export default RouteSetup