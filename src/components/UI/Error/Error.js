import React from "react";
import TitreH1 from "../Titres/TitreH1";

const error = (props) => (
    <>
        <TitreH1>Erreur {props.type}</TitreH1>
        <div>
            {props.children}
        </div>
    </>

);

export default error;