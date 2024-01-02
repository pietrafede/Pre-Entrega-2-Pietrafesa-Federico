import React from 'react'
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css"
import logo from "../../assets/logo.jpg"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Link className="navbar-brand" to="/"><img src= {logo} alt= "logo" className="img-fluid"/></Link>
    )
}

export default Header