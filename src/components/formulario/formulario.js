import React, { Component } from 'react';



class Formulario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            clicked: false
          }    

          this.handleChange = this.handleChange.bind(this);
          this.handleSutmit = this.handleSutmit.bind(this);     
          this.handleClick = this.handleClick.bind(this);      
 
    }


    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSutmit(event){
        alert("nombre introducido" + this.state.value)
        event.prevenDefault();
    }
    handleClick(event){
        this.setState({clicked: true})
        alert(this.state.clicked)

    }

    render() { 
        return ( 
            <div>
                <form onSubmit={this.handleSutmit}>
                        <label>
                        Nombre:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>
                    <input type="submit" value="submit" />
                </form>

                <button onClick={this.handleClick}> Botoncito</button>
            </div>
         );
    }
}
 
export default Formulario;
