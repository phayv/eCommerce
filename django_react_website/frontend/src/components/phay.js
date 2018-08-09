import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Navbar, NavbarBrand, Jumbotron } from 'react-bootstrap';
import PhayApp2 from "./phay_func";

class PhayApp extends Component {
    render() {
        return (
            <div className='PhayApp'>
                <Navbar dark='true' color="primary">
                    <NavbarBrand>
                        Hello
                    </NavbarBrand>
                </Navbar>
                <div className='container'>
                    <Jumbotron>
                        <h1> Hello </h1>
                        <p>I love jumbotron</p>
                    </Jumbotron>
                </div>
            </div>
        )
    }
}

export default PhayApp;