import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import newfire from '../fbconfig/firebase';
class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    newfire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        console.log(error);
      });
  }

  signup(e){
    e.preventDefault();
    newfire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error);
      })
  }
  render() {
    return (
      
      <div className="first">
        <form>
          <table>
          <div class="form-group">
          <tr><label for="exampleInputEmail1">Correo electronico: </label>
            <input  value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </tr>
          </div>
          <div class="form-group">
          <tr> <label for="exampleInputPassword1">Contraseña</label>
             <input  value={this.state.password} onChange={this.handleChange} type="password" name="password" class="form-control" id="exampleInputPassword1"  />
            </tr>
            </div>
            <tr>
          <button type="submit" onClick={this.login} class="btn btn-primary">Login</button>
          <button onClick={this.signup} style={{marginLeft: '10px'}} className="btn btn-success">Signup</button>
          </tr>
          </table>
        </form>
      
      </div>
    );
  }
}
export default Login;