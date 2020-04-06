import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img from '../../public/img.jpg'
import Container from '@material-ui/core/Container';
import StyleCarrusel from '../carrusel/StyleCarrusel.css'

class Carrusel extends Component {
    render() {
        return (
            <Container maxWidth="md" fixed="true">

                <Carousel>
                    <div className="padin">
                        <img src={img} />
                        <p className="color">Leyenda imagen 1</p>
                    </div>
                    <div>
                        <img src={img} />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src={img} />
                        <p className="legend">Legend 3</p>
                    </div>
                </Carousel>
            </Container>
        );
    }
};

export default Carrusel;