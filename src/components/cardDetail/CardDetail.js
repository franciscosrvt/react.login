
import React, { Component } from 'react';
import datajson from '../cardsList/data.json';
import data from '../cardsList/data.json';
import data_json from '../cardsList/data.json';
import Tarjeta3 from '../card3/card'

import {
    BrowserRouter as Router,

    Link

} from "react-router-dom";
import { Container } from 'react-bootstrap';

class CardDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
          objeto: {}

      }
      this.state.objeto = datajson;
      console.log(data)
    }

find=() => {  
      this.state.objeto.map((tarjeta) => (
        <div key={tarjeta.id} />
         
      ))}
      
    componentDidMount() {
        this.consultarApi();
    }
    
    consultarApi = async () => {
        try {
            const data = await data_json.read(this.props.match.params.cardId) ;
            console.log(data);          

        } catch (error) {      
        }       
       
    }   
      
    render () {
    
          if(this.find.id = "1") {
          return  ("DETALLES DE LA PRIMERA TARJETA");
        } 
        else if( (this.find.id = "2")){
          return ("DETALLES DE LA SEGUNDA TARJETA");
        }
        else if((this.find.id = "3")){
          return ("DETALLES DE LA TERCERA TARJETA"); 
        }
        else {
          return ("DETALLES DE LA CUARTA TARJETA");  
        }
        
      
    
  }
}
  
  
   
export default CardDetail;
