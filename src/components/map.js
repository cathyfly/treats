import React from 'react'
import { GoogleMap, Marker } from 'react-google-maps';
import withGoogleMap from 'react-google-maps/lib/withGoogleMap';
import withScriptjs from 'react-google-maps/lib/withScriptjs';

/*import Marker from './marker';*/

 

function Map() {
    return (

        
        
        <div>
            
            
            
            <GoogleMap
            defaultZoom={12}
                defaultCenter={{ lat: 53.34576547817323, lng: -6.267726998683783 }}
                >

                    

                <Marker key="aobaba"
                    icon={{
                        path:  "M11 8l-1-1V5L8 4V2L6 0H4v1l1 1-2 2-2 1 1 2-1 1-1 1 1 2H0l2 2v2l2 6 1 3 1 1 1-1 3-11 1-2V8zM6 24l-1-2 1 1v1zm1-4v-1l-1 1h1v2l-2-1-1-2h1l-1-1-1-2 5 2-1 2zm1-3l-5-2v-2h1l4 3v1zm0-2l-3-2h4l-1 2z" ,
                    fillColor: '#FF0000',
                    fillOpacity: .9,
                    strokeWeight: 0,
                    scale: 2.5
                        }}
                    label={"Aobaba"}
                    position={{
                    lat: 53.3488313,
                    lng: -6.2709398
                    }}
                    />
                 <Marker key="filo"
                    icon={{
                        path: "M11 8l-1-1V5L8 4V2L6 0H4v1l1 1-2 2-2 1 1 2-1 1-1 1 1 2H0l2 2v2l2 6 1 3 1 1 1-1 3-11 1-2V8zM6 24l-1-2 1 1v1zm1-4v-1l-1 1h1v2l-2-1-1-2h1l-1-1-1-2 5 2-1 2zm1-3l-5-2v-2h1l4 3v1zm0-2l-3-2h4l-1 2z",
                        fillColor: '#FF0000',
                        fillOpacity: .6,
                        strokeWeight: 0,
                        scale: 2.5
                    }}

                    label={"Filo"}
                    position={{
                        lat: 53.365176,
                        lng: -6.2737271
                    }}
                />
                <Marker key="ginos"
                    icon={{
                        path: "M11 8l-1-1V5L8 4V2L6 0H4v1l1 1-2 2-2 1 1 2-1 1-1 1 1 2H0l2 2v2l2 6 1 3 1 1 1-1 3-11 1-2V8zM6 24l-1-2 1 1v1zm1-4v-1l-1 1h1v2l-2-1-1-2h1l-1-1-1-2 5 2-1 2zm1-3l-5-2v-2h1l4 3v1zm0-2l-3-2h4l-1 2z",
                        fillColor: '#FF0000',
                        fillOpacity: .6,
                        strokeWeight: 0,
                        scale: 2.5
                    }}

                    label={"Ginos"}
                    position={{
                        lat: 53.3496208,
                        lng: -6.2968246
                    }}
                />

                <Marker key="queenoftarts"
                    icon={{
                        path: "M11 8l-1-1V5L8 4V2L6 0H4v1l1 1-2 2-2 1 1 2-1 1-1 1 1 2H0l2 2v2l2 6 1 3 1 1 1-1 3-11 1-2V8zM6 24l-1-2 1 1v1zm1-4v-1l-1 1h1v2l-2-1-1-2h1l-1-1-1-2 5 2-1 2zm1-3l-5-2v-2h1l4 3v1zm0-2l-3-2h4l-1 2z",
                        fillColor: '#FF0000',
                        fillOpacity: .6,
                        strokeWeight: 0,
                        scale: 2.5
                    }}

                    label={"Queen of Tarts"}
                    position={{
                        lat: 53.3443324,
                        lng: -6.2711428
                    }}
                />

                <Marker key="thunders"
                    icon={{
                        path: "M11 8l-1-1V5L8 4V2L6 0H4v1l1 1-2 2-2 1 1 2-1 1-1 1 1 2H0l2 2v2l2 6 1 3 1 1 1-1 3-11 1-2V8zM6 24l-1-2 1 1v1zm1-4v-1l-1 1h1v2l-2-1-1-2h1l-1-1-1-2 5 2-1 2zm1-3l-5-2v-2h1l4 3v1zm0-2l-3-2h4l-1 2z",
                        fillColor: '#FF0000',
                        fillOpacity: .6,
                        strokeWeight: 0,
                        scale: 2.5
                    }}

                    label={"Thunders"}
                    position={{
                        lat: 53.3692468,
                        lng: -6.2564995
                    }}
                />

                <Marker key="thunders"
                    icon={{
                        path: "M11 8l-1-1V5L8 4V2L6 0H4v1l1 1-2 2-2 1 1 2-1 1-1 1 1 2H0l2 2v2l2 6 1 3 1 1 1-1 3-11 1-2V8zM6 24l-1-2 1 1v1zm1-4v-1l-1 1h1v2l-2-1-1-2h1l-1-1-1-2 5 2-1 2zm1-3l-5-2v-2h1l4 3v1zm0-2l-3-2h4l-1 2z",
                        fillColor: '#FF0000',
                        fillOpacity: .6,
                        strokeWeight: 0,
                        scale: 2.5
                    }}

                    
                    label={"Cafe Bombo"}
                    position={{
                    lat: 53.34299090354903,
                    lng: -6.280538373539122
                    }}
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

