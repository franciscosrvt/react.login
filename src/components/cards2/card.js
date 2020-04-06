import React, { Component } from 'react';
import { Card } from 'react-bootstrap';


class Tarjeta2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statusres: "",
            persons: {}
        }
    }
    render() {
        return (
            <div>



                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />

                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{this.props.subTitle}</Card.Subtitle>
                        <Card.Text>
                            {this.props.cuerpo}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">{this.props.otherLink}</small>
                    </Card.Footer>
                </Card>


            </div>
        );
    }
}

export default Tarjeta2;
