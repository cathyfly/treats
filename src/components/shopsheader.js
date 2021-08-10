import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const shopsheader = () => {
    return (
        <div className="shopheaderwrapper">
            <h1> Search or browse below for sweet treats</h1>
        <div className="container-fluid d-flex justify-conetent-center">
            <div className="row">
                <div className="col-md-12">
                        <div className="input-group rounded" onkeyup="myFunction()" >
            <input type="text" className="form-control rounded" placeholder="Search" aria-label="Search"
                                aria-describedby="search-addon" id="myFilter" />
            <span className="input-group-text border-0" id="search-addon">
                <i className="fas fa-search"></i>
            </span>
                    </div>
                </div>
        </div>
        </div>
        </div>
    )
}



export default shopsheader
