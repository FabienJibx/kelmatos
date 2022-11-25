import React, { Component } from 'react';
import TitreH1 from '../../../components/UI/Titres/TitreH1';
import banderole from '../../../assets/images/homePix1_2.png';
import homePix1 from '../../../assets/images/homePix_bassPlayer.jpg';
import homePix2 from '../../../assets/images/drummer.jpg';

class Accueil extends Component {
    componentDidMount = () => {
        document.title = "Kelmatos";
    }

    render() {
        return (
            <div>
            <img src={banderole} alt="homePix" className='img-fluid' />
                <TitreH1 bgColor="bg-warning mb-4">Bienvenue sur le site des studios de répétition de Kelmatos !</TitreH1>
                <div className='container'>
                  <p className='h5 mb-4 text-center'>
                    Notre établissement est heureux de vous accueillir dans l'un de ses studios flambant neufs. Si vous êtes un(e) musicien(ne) et
                    que vous êtes à la recherche d'un endroit chaleureux et accueillant pour vous exprimer en solo ou en groupe, vous êtes au bon endroit.
                  </p>
                  <div className='row no-gutters align-items-center h6'>
                    <div className='col-12 col-md-6 mb-5'>
                        <img src={homePix1} alt='joueur de basse' className='img-fluid' />
                    </div>
                    <div className='col-12 col-md-6'>
                    Tous les musiciens n'ont pas la possibilité de se procurer des instruments, ou bien encore de pouvoir les transporter avec eux, dans le bus
                     ou le métro. Le concept de Kelmatos est de mettre à disposition de tout à chacun un ensemble d'instruments de qualité directement dans ses studios.
                    </div>
                    <div className='col-12 col-md-6'>
                    Pour cela, rien de plus simple, regardez la liste des studios et des instruments, faites votre choix, et utilisez le formulaire pour nous contacter et réserver votre créneau!
                    </div>
                    <div className='col-12 col-md-6'>
                        <img src={homePix2} alt='joueur de batterie' className='img-fluid mb-5' />
                    </div>
                  </div>
                </div>
            </div>
        );
    }
}

export default Accueil;