import React from "react";
import logo from "../../../assets/images/logo1-512x512.png";
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
                <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <NavLink to="/" className="nav-link">Accueil</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" className="nav-link">Réservation de studio</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/instruments" className="nav-link">Les instruments</NavLink>
                </li>
                </ul>
            </div>
        </div>
      </nav>  
    </>

);

export default navbar;