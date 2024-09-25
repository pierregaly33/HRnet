import React from "react";
import { NavLink } from "react-router-dom";

function createEmployee() {
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

                            <label htmlFor="street">Street</label>
                            <input type="text" id="street" />

                            <label htmlFor="city">City</label>
                            <input type="text" id="city" />

                            <label htmlFor="state">State</label>
                            <select name="state" id="state"></select>

                            <label htmlFor="zip-code">Zip Code</label>
                            <input type="text" id="zip-code" />
                        </fieldset>

                        <label htmlFor="department">Department</label>
                        <select name="department" id="department">
                            <option value="">Sales</option>
                            <option value="">Marketing</option>
                            <option value="">Engineering</option>
                            <option value="">Human Ressources</option>
                            <option value="">Legal</option>
                        </select>
                    </form>

                    <button>Save</button>
                </div>
            </body>
        </>
    );
}

export default createEmployee;
