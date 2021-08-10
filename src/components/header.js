import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

export const header = () => {
    return (
        <div className="headerWrap" id="header">
            <div className="mainInfo">
                <h1>Find your nearest Treat</h1>

                <Typed className="typedText" 
                strings={["Treat Yourself!", "Let's get ice cream!", "Fancy a coffee?"]} 
                typeSpeed={40} 
                backSpeed={60} 
                loop
                />
                <Link smooth={true} to="shops" offset={-80} className="btn-showMe" href="#">Show Me Treats</Link>
                
            </div>
            
            
        </div>
    )
}

export default header