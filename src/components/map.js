import React from 'react'
import { GoogleMap } from 'react-google-maps';
import withGoogleMap from 'react-google-maps/lib/withGoogleMap';
import withScriptjs from 'react-google-maps/lib/withScriptjs';

function Map() {
    return (
        <div>
            <GoogleMap
            defaultZoom={10}
                defaultCenter={{ lat: 53.3242381, lng: -6.3857869 }}
            />
        </div>
    );
}

const WrappedMap= withScriptjs(withGoogleMap(Map));

export default function MapMarkers() {
    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <WrappedMap
                googleMapURL={'https://maps.googleapis.com/maps/api/js?kv=3.exp&libraries=geometry,drawing,places&key=AIzaSyAnT2N2TS-szJ61WNPwaxHz6FP0ZyNu2v8'
                    }
                loadingElement={<div style={{ height: '100%' }} />}
                containerElement={<div style={{ height: '100%' }} />}
                mapElement={<div style={{ height: '100%' }} />}
            />
        </div>
    );
}

