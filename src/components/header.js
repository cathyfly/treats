import React from "react"
import Typed from "react-typed"

export const header = () => {
    return (
        <div className="headerWrap">
            <div className="mainInfo">
                <h1>Find your nearest Treat</h1>

                <Typed className="typedText" 
                strings={["Treat Yourself!", "Let's get ice cream!", "Fancy a coffee?"]} 
                typeSpeed={40} 
                backSpeed={60} 
                loop
                />
                <a href="#" className="btn-showMe">Show Me Treats</a>
            </div>
            
            
        </div>
    )
}

export default header