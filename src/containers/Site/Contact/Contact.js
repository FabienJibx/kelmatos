import React, { Component } from 'react';
import TitreH1 from '../../../components/UI/Titres/TitreH1';
import Formulaire from './Formulaire/Formulaire';
import banderole from '../../../assets/images/drummer4.jpg';
import axios from "axios";

class Contact extends Component {
    componentDidMount = () => {
        document.title = "Page de réservation du studio";
    }

    handleEnvoiMail = (message) => {
        axios.post("http://localhost/serveurinstruments/front/sendMessage",message)
            .then(reponse=> {
                console.log(reponse)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <>
                <img src={banderole} alt="homePix" className='img-fluid' />
                <TitreH1 bgColor="bg-warning mb-4">Réservez votre studio dès maintenant !</TitreH1>
                <div className='container'>
                <h2>Adresse :</h2>
                <h5>Studios Kelmatos</h5>
                <h5>185, Route des Sables</h5>
                <h5>33500 Le Haillan</h5>
                <h2>Télephone :</h2>
                <h5>06 80 52 24 33</h5>
                <h2>Vous préférez nous écrire ?</h2>
                <Formulaire sendMail = {this.handleEnvoiMail}/>
                </div>
            </>
        );
    }
}

export default Contact;