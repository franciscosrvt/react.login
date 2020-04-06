import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from '../components/views/home/home';
import NoMatch from '../components/views/nomatch/nomatch';
import Menu from '../components/views/menu/Menu';
import Foo from '../components/views/layout/Footer/inde';
import DetailCard from '../components/cardDetail/CardDetail'

import Login from '../components/login/signup'
import Signup from '../components/login/signup';
class Rutas extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {


        return (

            <div>
                <Router>

                    <Menu />
                    <Switch>
                        <Route path="/" exact children={<Home />} />
                        <Route path="/card/:cardId" children={<DetailCard />} />
                        <Route path="/signup" children={<Signup />} />
                        <Route component={NoMatch} />
                    </Switch>
                    <Foo />
                </Router>
            </div>
        );
    }
}

export default Rutas;

