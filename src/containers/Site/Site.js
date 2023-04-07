import React, { Component } from "react";
import Navbar from "../../components/UI/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import Accueil from "./Accueil/Accueil";
import Application from "./Application/Application";
import Error from "../../components/UI/Error/Error";
import Footer from "../../components/UI/Footer/Footer";
import Contact from "./Contact/Contact";

class Site extends Component {
    render() {
        return (
            <>
              <div className="site">
              <Navbar />
                <Routes>
                    <Route path="/instruments" element={<Application />} />
                    <Route path="/" element={<Accueil />} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="*" element={<Error type="404">La page n'existe pas</Error>} />
                </Routes>
                <div className="minSite"></div>
              </div>
              <Footer/>
            </>
        );
    }
}

export default Site;