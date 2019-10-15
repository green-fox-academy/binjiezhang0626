import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to="/">Hello</NavLink>
                </li>
                <li>
                    <NavLink to="/error">Error</NavLink>
                </li>
            </ul>
            
                
        </div>
    )
}

export default Navigation