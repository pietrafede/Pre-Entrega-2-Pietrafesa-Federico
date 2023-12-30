import React from "react";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css"
import logo from "../../assets/logo.jpg"

import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-sm navbar-dark fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img src= {logo} alt= "logo" className="img-fluid"/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
                </button>
                <a className="nav-item Cart">
                    <CartWidget />
                    </a>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <Link className="nav-item" to="/category/500ml">
                            500 ml
                        </Link>
                        <Link className="nav-item" to="/category/5litros">
                            5 Litros
                        </Link>
                        <Link className="nav-item" to="/category/kitsdelavado">
                            kits de lavado
                        </Link>
                        <Link className="nav-item" to="/contact">
                            Contacto
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;