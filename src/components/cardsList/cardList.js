import React, { Component } from 'react';
import data from '../cardsList/data.json';
import datajson from '../cardsList/data.json';

import Tarjeta3 from '../card3/card'

import {
    BrowserRouter as Router,

    Link

} from "react-router-dom";

import img from '../../public/img.jpg'

class CardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            objeto: {}

        }
        this.state.objeto = datajson;
        console.log(data)

    }

    render() {

        return (

            <div className="cards">


                {
                    this.state.objeto.map((tarjeta) => (
                        <div key={tarjeta.id}>
                            <Link to={`/card/${tarjeta.id}`}>
                                <Tarjeta3
                                    title={tarjeta.title}
                                    subTitle={tarjeta.subTitle}
                                    cuerpo={tarjeta.cuerpo}
                                    link={tarjeta.link}
                                    otherLink={img}
                                />
                            </Link>
                        </div>
                    ))
                }

            </div>

        );
    }
}

export default CardList;