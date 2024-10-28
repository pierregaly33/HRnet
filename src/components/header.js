import React from "react";
import { NavLink } from "react-router-dom";
import imageLogo from "../assets/images/wealth.webp";

function header() {
    return (
        <>
            <header>
                <nav>
                    <div className="title">
                        <img className="logo" src={imageLogo} alt="logo HRnet" />
                        <h1>HRnet</h1>
                    </div>
                    <div className="link">
                        <NavLink to="/employeelist">View Current Employees</NavLink>
                        <NavLink to="/">Home</NavLink>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default header;
