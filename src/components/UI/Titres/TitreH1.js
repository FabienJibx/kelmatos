import React from "react";

const TitreH1 = (props) => {
    let backgroundColor = props.bgColor ? props.bgColor : "bg.primary";
    let myCss = `border border-dark p-2 text-black text-center ${backgroundColor}`;
    return <h1 className={myCss}>{props.children}</h1>
};

export default TitreH1;
