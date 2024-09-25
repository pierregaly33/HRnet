import React from "react";
import { NavLink } from "react-router-dom";

function employeeList() {
    return (
        <>
            <body>
                <div className="title">
                    <h1>HRnet</h1>
                </div>
                <div className="container">
                    <NavLink to="/employeelist">View Current Employees</NavLink>
                    <h2>Create Employee</h2>
                    <form action="#" id="create-emplyee">
                        <label htmlFor="first-name">First Name</label>
                        <input type="text" id="first-name" />

                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" id="last-name" />

                        <label htmlFor="date-of-birht">Date of Birth</label>
                        <input type="text" id="date-of-birth" />

                        <label htmlFor="start-date">Start Date</label>
                        <input type="text" id="start-date" />

                        <fieldset className="address">
                            <legend>Address</legend>
                        </fieldset>
                    </form>
                </div>
            </body>
        </>
    );
}

export default employeeList;
