import Home from "../components/header";
import { states } from "../data/states";
import { departments } from "../data/department";
import Select from "../components/select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../redux/employeeSlice";

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

function CreateEmployee() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birthdate, setBirthdate] = useState(undefined);
    const [startDate, setStartDate] = useState(undefined);
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [zipCode, setZipCode] = useState("");

    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        let data = {
            firstName: firstName,
            lastName: lastName,
            DateBirthday: birthdate.toString(),
            StartDate: startDate.toString(),
            Street: street,
            City: city,
            ZipCode: zipCode,
        };
        dispatch(addEmployee(data));
    };

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
                                <input
                                    value={firstName}
                                    type="text"
                                    id="first-name"
                                    onChange={(e) => {
                                        setFirstName(e.target.value);
                                    }}
                                />

                                <label htmlFor="last-name">Last Name</label>
                                <input
                                    value={lastName}
                                    type="text"
                                    id="last-name"
                                    onChange={(e) => {
                                        setLastName(e.target.value);
                                    }}
                                />

                                <label htmlFor="date-of-birht">Date of Birth</label>
                                <DatePicker
                                    value={birthdate}
                                    selected={birthdate}
                                    onChange={(date) => setBirthdate(date)}
                                    showYearDropdown
                                    dateFormat="dd/MM/yyyy"
                                    scrollableYearDropdown
                                    maxDate={new Date()}
                                    yearDropdownItemNumber={new Date().getFullYear() - 1950}
                                    id="date-of-birth"
                                />

                                <label htmlFor="start-date">Start Date</label>
                                <DatePicker
                                    value={startDate}
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    showYearDropdown
                                    dateFormat="dd/MM/yyyy"
                                    scrollableYearDropdown
                                    maxDate={new Date()}
                                    yearDropdownItemNumber={new Date().getFullYear() - 1950}
                                    id="start-date"
                                />

                                <label htmlFor="department">Department</label>
                                <Select name="department" id="department" data={departmentOptions} />
                            </div>

                            <fieldset className="address">
                                <legend>Address</legend>

                                <label htmlFor="street">Street</label>
                                <input
                                    value={street}
                                    type="text"
                                    id="street"
                                    onChange={(e) => {
                                        setStreet(e.target.value);
                                    }}
                                />

                                <label htmlFor="city">City</label>
                                <input value={city} type="text" id="city" onChange={(e) => setCity(e.target.value)} />

                                <label htmlFor="state">State</label>
                                <Select name="state" id="state" data={statesOptions} />

                                <label htmlFor="zip-code">Zip Code</label>
                                <input
                                    value={zipCode}
                                    type="text"
                                    id="zip-code"
                                    onChange={(e) => setZipCode(e.target.value)}
                                />
                            </fieldset>
                        </div>

                        <div className="button-submit">
                            <button onClick={onSubmit}>Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default CreateEmployee;
