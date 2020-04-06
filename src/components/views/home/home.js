import React, { Component } from 'react';
import Carrusel from '../../carrusel/Carrusel';
import CardList from '../../cardsList/cardList';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Carrusel />
                <CardList />
            </div>
        );
    }
}

export default Home;