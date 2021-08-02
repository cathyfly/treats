
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/navbar";
import Header from "./components/header";
import { Shape } from 'tsparticles/Options/Classes/Particles/Shape/Shape';
import { circleBounce } from 'tsparticles/Utils';



function App() {
  return(
  < > 
  <Particles
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
      
    
  />
  <Navbar/>
  <Header/>
  </>
  );


  }
export default App;
