import React from "react";
import Home from "../components/header";
import { states } from "../data/states";
import { departments } from "../data/department";
import Select from "../components/select";

const statesOptions = states.map((state) => (
    <option key={state.abbreviation} value={state.abbreviation}>
        {state.name}
    </option>
));

const departmentOptions = departments.map((department) => (
    <option key={department.name} value={department.name}>
        {department.name}
    </option>
));

function createEmployee() {
    return (
        <>
            <div>
                <Home />
                <div className="container">
                    <h2>Create Employee</h2>
                    <form action="#" id="create-employee">
                        <div className="information-address-employee">
                            <div className="information-employee">
                                <label htmlFor="first-name">First Name</label>
                                <input type="text" id="first-name" />

                                <label htmlFor="last-name">Last Name</label>
                                <input type="text" id="last-name" />

                                <label htmlFor="date-of-birht">Date of Birth</label>
                                <input type="text" id="date-of-birth" />

                                <label htmlFor="start-date">Start Date</label>
                                <input type="text" id="start-date" />

                                <label htmlFor="department">Department</label>
                                <Select name="department" id="department" data={departmentOptions} />
                            </div>

                            <fieldset className="address">
                                <legend>Address</legend>

                                <label htmlFor="street">Street</label>
                                <input type="text" id="street" />

                                <label htmlFor="city">City</label>
                                <input type="text" id="city" />

                                <label htmlFor="state">State</label>
                                <Select name="state" id="state" data={statesOptions} />

                                <label htmlFor="zip-code">Zip Code</label>
                                <input type="text" id="zip-code" />
                            </fieldset>
                        </div>

                        <div className="button-submit">
                            <button>Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default createEmployee;
