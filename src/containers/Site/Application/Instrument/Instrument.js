import React from "react";
import Button from "../../../../components/UI/Button/Button";

const instrument = (props) => (
    <>
         <div className="card mb-3 border-dark shadow">
            <img className="card-img-top" src={props.image} alt={props.nom}/>
           <h3 className="card-header">{props.nom}</h3>
            <div className="card-body">
                <h5>Famille : <Button typeBtn="btn-dark" clic = {() => props.filterFamily(props.family.idFamily)}>{props.family.libelleFamily.toUpperCase()}</Button></h5>
                <div>{props.family.descriptionFamily}</div>
            </div>
            <div className="card-body">
                <h5>Studio(s) équipé(s): </h5>
                {
                   props.studios.map(studio => {
                      let colorBtn = "";
                      switch(studio.idStudio){
                        case "1" : colorBtn="btn btn-dark";
                        break;
                        case "2" : colorBtn="btn btn-warning";
                        break;
                        case "3" : colorBtn="btn btn-secondary";
                        break;
                        case "4" : colorBtn="btn btn-success";
                        break;
                        default : colorBtn="btn btn-success";
                      }
                      return <Button typeBtn={colorBtn} 
                      css="m-1" 
                      clic= {() => props.filterStudio(studio.idStudio)}
                      key={studio.idStudio}>{studio.libelleStudio}</Button>
                   }) 
                }
                
            </div>
        </div>            
    </>

);

export default instrument;