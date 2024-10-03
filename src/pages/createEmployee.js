import Home from "../components/header";
import { statesOptions } from "../data/states";
import { departmentsOptions } from "../data/department";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../redux/employeeSlice";
import Select from "react-select";

function CreateEmployee() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birthdate, setBirthdate] = useState(undefined);
    const [startDate, setStartDate] = useState(undefined);
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [department, setDepartment] = useState(null);
    const [state, setState] = useState(null);

    const dispatch = useDispatch();

    const clearForm = () => {
        setFirstName("");
        setLastName("");
        setBirthdate("");
        setStartDate("");
        setStreet("");
        setCity("");
        setZipCode("");
        setDepartment(null);
        setState(null);
    };

    const isCompleted = () => {
        return (
            firstName && lastName && birthdate && startDate && street && city && zipCode && department && state !== ""
        );
    };

    const onSubmit = (e) => {
        e.preventDefault();
        let data = {
            firstName: firstName,
            lastName: lastName,
            DateBirthday: birthdate,
            StartDate: startDate,
            Street: street,
            City: city,
            ZipCode: zipCode,
            Departement: department ? department.label : "",
            State: state ? state.label : "",
        };
        if (isCompleted()) {
            dispatch(addEmployee(data));
            clearForm();
        }
    };

    const handleDateChange = (e) => {
        setBirthdate(e.target.value);
    };

    const handleStartDate = (e) => {
        setStartDate(e.target.value);
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

                                <label htmlFor="date-of-birth">Date of Birth</label>
                                <input
                                    type="date"
                                    id="birthday"
                                    value={birthdate}
                                    onChange={handleDateChange}
                                    required
                                />

                                <label htmlFor="start-date">Start Date</label>
                                <input
                                    type="date"
                                    id="start-date"
                                    value={startDate}
                                    onChange={handleStartDate}
                                    required
                                />

                                <label htmlFor="department">Department</label>
                                <Select
                                    name="department"
                                    id="department"
                                    placeholder="Select a department"
                                    options={departmentsOptions}
                                    value={department || null}
                                    onChange={(e) => setDepartment(e)}
                                />
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
                                <Select
                                    name="state"
                                    id="state"
                                    placeholder="Select a state"
                                    options={statesOptions}
                                    value={state || null}
                                    onChange={(e) => setState(e)}
                                />

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
