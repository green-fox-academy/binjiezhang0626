import React from 'react';
import { BrowserRouter,NavLink } from "react-router-dom";

class Theme extends React.Component{
    render() {
        return (
            <div className="theme">
                <div className="heading">
                    THEME SWITCHER
                </div>
                <div>
                    <BrowserRouter>
                        <ul>
                            <li>
                                <NavLink to="/">Default</NavLink>
                            </li>
                            <li>
                                <NavLink to="/">Superman</NavLink>
                            </li>
                            <li>
                                <NavLink to="/">Batman</NavLink>
                            </li>
                        </ul>
                    </BrowserRouter>
                </div>
                
            </div>
        )
    }
}

export default Theme;