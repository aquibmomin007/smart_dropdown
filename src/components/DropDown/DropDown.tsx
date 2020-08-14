import React from 'react';
import './DropDown.scss';

const DropDown = () => {

    return (
        <>  
            <div className="dropdown-wrapper">
                <div className="dropdown-header">
                    <p className="dropdown-placeholder">Select a location</p>
                </div>
                <ul className="dropdown-list-container">
                    <li className="dropdown-list-item">Singapore</li>
                    <li className="dropdown-list-item">Malaysia</li>
                    <li className="dropdown-list-item">Indonesia</li> 
                    <li className="dropdown-list-item">Philippines</li> 
                    <li className="dropdown-list-item">Thailand</li> 
                    <li className="dropdown-list-item">Japan</li> 
                    <li className="dropdown-list-item">Australia</li>
                </ul>
            </div>
        </>
    )
}

export default DropDown;