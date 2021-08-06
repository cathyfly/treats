import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import latlang from 'react-geolocated';


const Card = props => {
    return (
     <div className="card text-center" id="card">
         <div className="overflow">
             <img src={props.imgsrc} alt="picture of a delicious treat" className="card-img-top"/>
         </div>
         <h4 className="card-title">{props.title}</h4>
         <p className="card-text text-secondary" id="cardtext">{props.text}</p>
            <a href={props.url} >{props.address}</a>
            <p className="card-text ">{props.icon1}{props.icon2}{props.icon3}</p>
           
            
     </div>
    )
}

export default Card
