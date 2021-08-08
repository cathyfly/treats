import React from 'react'
import { GoogleMap, Marker } from 'react-google-maps';
import withGoogleMap from 'react-google-maps/lib/withGoogleMap';
import withScriptjs from 'react-google-maps/lib/withScriptjs';

/*import Marker from './marker';*/

function Map() {
    return (
        <div>
            <GoogleMap
            defaultZoom={10}
                defaultCenter={{ lat: 53.3242381, lng: -6.3857869 }}
                >

                <Marker key="aobaba"

                

                    position={{

                        lat: 53.3488313,

                        lng: -6.2709398

                    }}

                />

                />
               
                </GoogleMap>
            
            
        </div>
    );
}

const WrappedMap= withScriptjs(withGoogleMap(Map));


export default function MapMarkers() {
    return (
        <div classname="conatiner">
            
        <div style={{ width: "100vw", height: "80vh" }} id="map">
            <WrappedMap
                googleMapURL={'https://maps.googleapis.com/maps/api/js?kv=3.exp&libraries=geometry,drawing,places&key=AIzaSyAnT2N2TS-szJ61WNPwaxHz6FP0ZyNu2v8'
                    }
                loadingElement={<div style={{ height: '100%' }} />}
                containerElement={<div style={{ height: '100%' }} />}
                mapElement={<div style={{ height: '100%' }} />}>

                    <Marker
                        lat={53.3488313}
                        lng={-6.2709398}
                        name="My Marker"
                        color="red"
                    />

          </WrappedMap>
                
            

            

                </div>
            
        </div>

        
    );
}

