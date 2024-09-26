import React from "react";
import { NavLink } from "react-router-dom";

function header() {
    return (
        <>
            <header>
                <nav>
                    <div className="title">
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
