import React from 'react';
import Button from '@material-ui/core/Button';
import {
    BrowserRouter as Router,

    Link,

} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import SocialLogin from "../../login/socialogin"

export default function Menu() {
    return (
        <Navbar bg="light" variant="light" className="example" >
            <Navbar.Brand ><Link to="/" >Home</Link></Navbar.Brand>
            <Button variant="outline-primary"><Link to="/signup">Crear Cuenta</Link></Button>
            <Form inline className="form1">
                <div className="example">
                <SocialLogin />
                </div>                        
             </Form>
        </Navbar>
    );
}
