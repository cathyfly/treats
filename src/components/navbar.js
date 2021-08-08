import React from 'react';
import logo from "../logo.png";
//react fontawesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, } from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-scroll";

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">

        <div className="container">
    
                <Link smooth={true} to="header" offset={-80} className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo"/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: "#FF69B4" }}/>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                   
                    <li className="nav-item">
                            <Link smooth={true} to="shops" offset={-80} className="nav-link" href="#">Find Treats!</Link>
                    </li>

                        <li className="nav-item">
                            <Link smooth={true} to="map" offset={-80} className="nav-link" href="#">Map</Link>
                        </li>
                        
                       
                        <li className="nav-item">
                            <Link smooth={true} to="contactUs" offset={-80} className="nav-link" href="#">Tell Us!</Link>
                        </li>
                    
                  
                        
                </ul>

                </div>
               
            </div>
</nav>
    )
}

export default Navbar