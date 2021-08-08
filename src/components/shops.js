import { render } from '@testing-library/react'
import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faChair, faSeedling} from "@fortawesome/free-solid-svg-icons";
import Card from "../components/cardUI";
import aobaba from "../shopassets/aobaba.jpg";
import filo from "../shopassets/filo.jpg";
import ginos from "../shopassets/ginos.jpg";
import cupcake from "../shopassets/cupcake.jpg";
import thunders from "../shopassets/thunders.jpg";
import bonbon from "../shopassets/bonbon.jpg";




class shops extends Component {
    render(){
      
    return (

        <>
        
        <div className="container-fluid d-flex justify-conetent-center">
            
            
            <div className="row" id="myItems">
                <div className="col-md-4">
                    <Card imgsrc={aobaba} title={"Aobaba"} text={"Not just home of Dublin's favourite pho Aobaba also does lovley Vietnamese Iced Coffee and Bubble teas"} url={"https://goo.gl/maps/MMRXFKpjJsYubP1T8"}
                       address={"46a Capel St, Dublin 1"} icon1={<FontAwesomeIcon icon={faUtensils} style={{ color: "#FF69B4" }} />} icon2={<FontAwesomeIcon icon={faChair} style={{ color: "#FF69B4" }} />}
                    />
                </div>
                <div className="col-md-4">
                    <Card imgsrc={filo} title={"Filo"} text={"Fancy a Mediteranean trest on the Northside? Be sure to check out Filo - Baklava, Greek style coffe and delicious cakes awit you"} url={"https://goo.gl/maps/bZznxWjT3tuN66Ek8"}
                        address={"20 Prospect Road, Dublin 9"} icon1={<FontAwesomeIcon icon={faSeedling} style={{ color: "#FF69B4" }} />} icon2={<FontAwesomeIcon icon={faChair} style={{ color: "#FF69B4" }} />}
                    />
                </div>
                <div className="col-md-4">
                    <Card imgsrc={ginos} title={"Gino"} text={"Classic Italian treats and now a Dublin institution, look nor further than Gino's for the best gelato, the yummiest crepes and excelent coffee"} url={"https://goo.gl/maps/mg85FGkiQaCyzxwB8"}
                        address={"41 Hnery St, Dublin 1"} icon1={<FontAwesomeIcon icon={faSeedling} style={{ color: "#FF69B4" }} />}
                    />
                    
                </div>
                
            </div>
    </div>
       <div className="container-fluid d-flex justify-conetent-center">
            
            
            <div className="row" id="myItems">
                <div className="col-md-4">
                        <Card imgsrc={cupcake} title={"Queen Of Tarts"} text={"The Queen of Tarts baked some...tarts... and they were delicious! If you're near Dame St, be sure to check the Queen's delcious bakes out,"} url={"https://goo.gl/maps/x7iTrV1HJVpQ4LJo6"}
                       address={"Cow's Lane, Dublin 2"} icon1={<FontAwesomeIcon icon={faUtensils} style={{ color: "#FF69B4" }} />} icon2={<FontAwesomeIcon icon={faChair} style={{ color: "#FF69B4" }} />}
                    />
                </div>
                <div className="col-md-4">
                        <Card imgsrc={thunders} title={"Thunders"} text={"A quintessential Dublin treat, get your classic bakery fare at Thunders - eclairs, coffee cake, cream slices, and much more"} url={"https://goo.gl/maps/xXaoqf3aVPWVz2na8"}
                        address={"216 Drumcondra Road Upper, Dublin 9"} icon1={<FontAwesomeIcon icon={faSeedling} style={{ color: "#FF69B4" }} />} icon2={<FontAwesomeIcon icon={faChair} style={{ color: "#FF69B4" }} />}
                    />
                </div>
                <div className="col-md-4">
                        <Card imgsrc={bonbon} title={"Cafe Bombo"} text={"A delightfully kitsch cafe, where you can try Bombos. light doughnut style pastry which you fill with filling of your shcoie"} url={"https://goo.gl/maps/uyr1PyGGdZNyCjRs8"}
                        address={"32 Thomas St, Dublin 8"} icon1={<FontAwesomeIcon icon={faSeedling} style={{ color: "#FF69B4" }} />}
                    />
                    
                </div>
                
            </div>
    </div>

        </>


        
        
    )
    }
}



export default shops
