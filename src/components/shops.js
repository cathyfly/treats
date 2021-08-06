import { render } from '@testing-library/react'
import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faChair, faSeedling} from "@fortawesome/free-solid-svg-icons";
import Card from "../components/cardUI";
import aobaba from "../shopassets/aobaba.jpg";
import filo from "../shopassets/filo.jpg";
import ginos from "../shopassets/ginos.jpg";




class shops extends Component {
    render(){
      
    return (

        
        
        <div className="container-fluid d-flex justify-conetent-center" >
            <div className="row" id="myItems">
                <div className="col-md-4">
                    <Card imgsrc={aobaba} title={"Aobaba"} text={"Not just home of Dublin's favourite pho Aobaba also does lovley Vietnamese Iced Coffee and Bubble teas"} url={"https://goo.gl/maps/MMRXFKpjJsYubP1T8"}
                       address={"46a Capel St, Dublin 1"} icon1={<FontAwesomeIcon icon={faUtensils} style={{ color: "#FF69B4" }} />} icon2={<FontAwesomeIcon icon={faChair} style={{ color: "#FF69B4" }} />}
                    />
                </div>
                <div className="col-md-4">
                    <Card imgsrc={filo} title={"Filo"} text={"Filo serves delcious traditoinal Greek stle treats like baklava and Greek coffee, as well as sumptious deserts of all kinds"} distance={"0.5km"} icon1={<FontAwesomeIcon icon={faSeedling} style={{ color: "#FF69B4" }} />}
                    />
                </div>
                <div className="col-md-4">
                    <Card imgsrc={ginos} title={"Gino's"} text={"Classic Italian gelato, yummy crepes and more await you at Gino's"} distance={"0.5km"} icon1={<FontAwesomeIcon icon={faChair} style={{ color: "#FF69B4" }} />} icon2={<FontAwesomeIcon icon={faSeedling} style={{ color: "#FF69B4" }} />}
                    />
                </div>
            </div>
        </div>
        
    )
    }
}



export default shops
