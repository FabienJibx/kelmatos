import React from "react";
import youtube from "../../../assets/images/logoYoutube2.png";
import instagram from "../../../assets/images/logoInstaBlack.png";

const footer = (props) => (
    <>
        <footer className="bg-light">
            <div className="text-center">Kelmatos Website- Tout droits réservés</div>
            <div className="row no-gutters align-items-center text-center pt-2">
                <div className="col-6">
                    <a href="" className="d-block" target="_blank">
                        <img src={youtube} alt='youtube' className="imgYT" />
                    </a>
                </div>
                <div className="col-6">
                    <a href="" className="d-block" target="_blank">
                        <img src={instagram} alt='instagram' className="imgInsta" />
                    </a>
                </div>
            </div>
        </footer>
    </>

);

export default footer;