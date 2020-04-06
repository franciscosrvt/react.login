import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import estilos from '../cardsList/estilos.css'

class Tarjeta3 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

            <Card >


                <Card.Img variant="top" src={this.props.otherLink} height={160} bsPrefix={estilos.imgcard} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.cuerpo}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{this.props.link}</small>
                </Card.Footer>
            </Card>
        );
    }
}

export default Tarjeta3;