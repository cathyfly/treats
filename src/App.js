
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
/*import Particles from "react-particles-js";*/
import Navbar from "./components/navbar";
import Header from "./components/header";
import Shops from './components/shops';
/*import { Shape } from 'tsparticles/Options/Classes/Particles/Shape/Shape';
import { circleBounce } from 'tsparticles/Utils';*/
import Map from "./components/map";
import ContactUs from './components/conatctUs';
import Footer from "./components/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faChair, faSeedling } from "@fortawesome/free-solid-svg-icons";



function App() {
  return(
  < > 
 {/* <Particles
    params= {{
      particles: { 
        numbers: {
          value: 30,
          density: {
            enable: true,
            value_area: 900 
        }
      },
        shape: {
          type: "circle",
          stroke: {
            width: 8,
            color: 	"#FFC0CB;"
          }

        }
     }
    }}
      
    
  />*/}
  <Navbar/>
  <Header/>
  <div className="text-center" id="shops">
      <h1> Check out these Treats!</h1>
      <p><FontAwesomeIcon icon={faChair} style={{ color: "#FF69B4" }} /> Seating Available </p> <p><FontAwesomeIcon icon={faUtensils} style={{ color: "#FF69B4" }} /> Lunch/Dinner Options </p>
      <p><FontAwesomeIcon icon={faSeedling} style={{ color: "#FF69B4" }} /> Vegan Options  </p>
      </div>
  <Shops/>
      <div className="text-center" id="map">
        <h1> Treats on the Map</h1>
        <p>Explore Treats near you</p>
        
      </div>
  <Map/>
  <ContactUs/>
  <Footer/>
  
  </>
  );


  }
export default App;
