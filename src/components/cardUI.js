import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Card = props => {
    return (
     <div className="card text-center" id="card">
         <div className="overflow">
             <img src={props.imgsrc} alt="picture of a delicious treat" className="card-img-top"/>
         </div>
         <h4 className="card-title">{props.title}</h4>
         <p className="card-text text-secondary">{props.text}</p>
         <p className="card-text text-secondary">{props.distance}</p>
            <p className="card-text text-secondary">{props.icons}</p>
     </div>
    )
}

export default Card
