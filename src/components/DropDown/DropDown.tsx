import React from 'react';
import './DropDown';

const DropDown = () => {

    return (
        <>
            <div className="dropdown-header">
                <p className="dropdown-placeholder">Select a location</p>
            </div>
            <ul>
               <li>Singapore</li>
               <li>Malaysia</li>
               <li>Indonesia</li> 
               <li>Philippines</li> 
               <li>Thailand</li> 
               <li>Japan</li> 
               <li>Australia</li>
            </ul>
        </>
    )
}

export default DropDown;