import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component{
    render(){
        const navbar = (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container container-fluid">
                    <Link   to="#" 
                            className="navbar-brand">
                            Kecap Web</Link>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link   to="/Dashboard" 
                                        className="nav-link"> 
                                        Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link   to="/Kecap" 
                                        className="nav-link">
                                        Kecap CRUD</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex">
                        <Link to="/Login" className="btn btn-outline-primary">Log out</Link>
                    </div>
                </div>
            </nav>
        );

        return navbar;
    }
}

export default Navbar