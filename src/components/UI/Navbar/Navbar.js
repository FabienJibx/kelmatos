import React from "react";
import logo from "../../../assets/images/logo-512x512.png";
import {NavLink} from "react-router-dom";

const navbar = (props) => (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
            <a className="navbar-brand" href="/">
                <img src={logo} alt='logo Kelmatos' width='50px' />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarColor03">
                <ul className="navbar-nav me-auto">
                <li className="nav-item">
                    <NavLink to="/" className="nav-link">Accueil</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" className="nav-link">Contact</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/instruments" className="nav-link">Les instruments</NavLink>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
            
            <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Separated link</a>
            </div>
                </li>
                </ul>
            </div>
        </div>
      </nav>  
    </>

);

export default navbar;