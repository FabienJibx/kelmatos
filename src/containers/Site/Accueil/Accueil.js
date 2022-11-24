import React, { Component } from 'react';
import TitreH1 from '../../../components/UI/Titres/TitreH1';
import banderole from '../../../assets/images/homePix1_2.png';
import logo from '../../../assets/images/logo-512x512.png';

class Accueil extends Component {
    componentDidMount = () => {
        document.title = "Kelmatos";
    }

    render() {
        return (
            <div>
            <img src={banderole} alt="homePix" className='img-fluid' />
                <TitreH1 bgColor="bg-success">Un outil pour vous faciliter la gestion de vos studios !</TitreH1>
                <div className='container'>
                  <p>
                    Proident consectetur consequat dolore cillum enim. Dolor nisi ut nulla reprehenderit laborum mollit
                    Ea ut quis adipisicing sit. Nulla reprehenderit dolor id labore sunt magna ut esse. 
                    occaecat dolor irure. Adipisicing officia culpa incididunt occaecat et. Consequat aliqua reprehenderit
                    laborum anim eu laboris cupidatat sint commodo. Duis culpa eiusmod minim enim pariatur esse culpa qui
                    cupidatat.
                  </p>
                  <p>
                    Proident consectetur consequat dolore cillum enim. Dolor nisi ut nulla reprehenderit laborum mollit
                    Ea ut quis adipisicing sit. Nulla reprehenderit dolor id labore sunt magna ut esse. 
                    occaecat dolor irure. Adipisicing officia culpa incididunt occaecat et. Consequat aliqua reprehenderit
                    laborum anim eu laboris cupidatat sint commodo. Duis culpa eiusmod minim enim pariatur esse culpa qui
                    cupidatat.
                  </p>
                  <div className='row no-gutters align-items-center'>
                    <div className='col-12 col-md-6'>
                        <img src={logo} alt='logo du site' className='img-fluid' />
                    </div>
                    <div className='col-12 col-md-6'>
                    Proident consectetur consequat dolore cillum enim. Dolor nisi ut nulla reprehenderit laborum mollit
                    Ea ut quis adipisicing sit. Nulla reprehenderit dolor id labore sunt magna ut esse. 
                    occaecat dolor irure. Adipisicing officia culpa incididunt occaecat et. Consequat aliqua reprehenderit
                    laborum anim eu laboris cupidatat sint commodo. Duis culpa eiusmod minim enim pariatur esse culpa qui
                    cupidatat.
                    </div>
                    <div className='col-12 col-md-6'>
                    Proident consectetur consequat dolore cillum enim. Dolor nisi ut nulla reprehenderit laborum mollit
                    Ea ut quis adipisicing sit. Nulla reprehenderit dolor id labore sunt magna ut esse. 
                    occaecat dolor irure. Adipisicing officia culpa incididunt occaecat et. Consequat aliqua reprehenderit
                    laborum anim eu laboris cupidatat sint commodo. Duis culpa eiusmod minim enim pariatur esse culpa qui
                    cupidatat.
                    </div>
                    <div className='col-12 col-md-6'>
                        <img src={logo} alt='logo du site' className='img-fluid' />
                    </div>
                  </div>
                </div>
            </div>
        );
    }
}

export default Accueil;