import React from 'react';
import logo from "../logo.png";
//react fontawesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBorderNone } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

        <div className="container">
    
            <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo"/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: "#FF69B4" }}/>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Find Treats!</a>
                    </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Tell Us!</a>
                        </li>
                    
                  
                        
                </ul>

                </div>
               
            </div>
</nav>
    )
}

export default Navbar