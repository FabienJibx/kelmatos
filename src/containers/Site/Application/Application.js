import React, { Component } from "react";
import TitreH1 from "../../../components/UI/Titres/TitreH1";
import axios from "axios";
import Instrument from "./Instrument/Instrument";
import Button from "../../../components/UI/Button/Button";

class Application extends Component {
state = {
    instruments : null,
    filterFamily : null,
    filterStudio : null,
    listFamilys : null,
    listStudios : null
}

    loadData = () => {
        const family = this.state.filterFamily ? this.state.filterFamily : "-1";
        const studio = this.state.filterStudio ? this.state.filterStudio : "-1";
        axios.get(`http://localhost/serveurinstruments/front/instruments/${family}/${studio}`)
        .then(reponse => {
            this.setState({instruments:Object.values(reponse.data)});
        })
    }

    componentDidMount = () => {
        this.loadData();
        axios.get(`http://localhost/serveurinstruments/front/familys`)
        .then(reponse => {
            this.setState({listFamilys:Object.values(reponse.data)});
        })
        axios.get(`http://localhost/serveurinstruments/front/studios`)
        .then(reponse => {
            this.setState({listStudios:Object.values(reponse.data)});
        })
    }

    componentDidUpdate = (oldProps,oldState) => {
        if(oldState.filterFamily !== this.state.filterFamily || oldState.filterStudio !== this.state.filterStudio){
            this.loadData();
        }  
    }

    handleSelectionFamily = (idFamily) => {
        if(idFamily === "-1") this.handleResetFilterFamily() 
        else this.setState({filterFamily : idFamily});
    }

    handleSelectionStudio = (idStudio) => {
        if(idStudio === "-1") this.handleResetFilterStudio() 
        else this.setState({filterStudio : idStudio});
    }

    handleResetFilterFamily = () => {
        this.setState({filterFamily:null})
    }

    handleResetFilterStudio = () => {
        this.setState({filterStudio:null})
    }

    render() {
        return (
          <>  
            <TitreH1 bgColor='bg-light'>Les instruments à disposition</TitreH1>
            <div className="container-fluid">
                <span>Filtres : </span>
                <select onChange={(event) => this.handleSelectionFamily(event.target.value)}>
                    <option value="-1" selected={this.state.filterFamily=== null && "selected"}>Familles</option>
                    {
                        this.state.listFamilys && this.state.listFamilys.map(family => {
                            return <option 
                                value={family.family_id}
                                selected={this.state.filterFamily=== family.family_id && "selected"}
                                >{family.family_libelle}</option>
                        })
                    }
                </select>
                <select onChange={(event) => this.handleSelectionStudio(event.target.value)}>
                    <option value="-1" selected={this.state.filterStudio=== null && "selected"}>Studios</option>
                    {
                        this.state.listStudios && this.state.listStudios.map(studio => {
                            return <option 
                                value={studio.studio_id}
                                selected={this.state.filterStudio=== studio.studio_libelle && "selected"}
                                >{studio.studio_libelle}</option>
                        })
                    }
                </select>
                {
                this.state.filterFamily &&
                <Button typeBtn="btn-dark" 
                    clic = {this.handleResetFilterFamily}>
                    {this.state.filterFamily} &nbsp;  {/* &nbsp c'est pour le petit espace après la croix */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                    </svg>
                </Button>
            }
            {
                this.state.filterStudio &&
                <Button 
                    typeBtn="btn-dark" 
                    clic = {this.handleResetFilterStudio}>
                    {this.state.filterStudio} &nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                    </svg>
                </Button>
            }        
            </div>
            <div className="container">
              <div className="row"> 
                {
                    this.state.instruments &&
                    this.state.instruments.map(instrument => {
                        return (
                            <div className="col-12 col-md6 col-xl-4" key={instrument.id}>
                                <Instrument {...instrument} 
                                filterFamily = {this.handleSelectionFamily} 
                                filterStudio = {this.handleSelectionStudio}/>    
                            </div>
                               )
                    })
                }                  
              </div>    
            </div>
          </>
        );
    }
}

export default Application;