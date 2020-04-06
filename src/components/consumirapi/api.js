import React, { Component } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation,
    Redirect
} from "react-router-dom";


class Api extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            url: 'https://jsonplaceholder.typicode.com/todos/1',
            persons: {},
            statusres: true

        }
    }
    redidirect() {

        return <Router> <Redirect to="/login" /> </Router>
    }

    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => console.log(json))

        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const persons = res.data;
                console.log(persons)
                this.setState({ statusres: false })
                this.setState({ persons });
            })


        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(function (response) {
                // handle success
                this.redidirect();
                console.log(response);
            })
            .catch(function (error) {

                console.log(error);
            })
            .then(this.redidirect());
    }


    render() {

        if (!this.state.statusres) {
            return <Router><Redirect push to="/login" /></Router>
        }
        return (
            <div>


                <form noValidate autoComplete="off">
                    <TextField


                    />

                    <Button variant="contained" color="primary">
                        pincha aqui

                    </Button>


                </form>


            </div>

        )
    }


}

export default Api;
