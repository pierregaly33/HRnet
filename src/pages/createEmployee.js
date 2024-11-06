import Home from "../components/header";
import { statesOptions } from "../data/states";
import { departmentsOptions } from "../data/department";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../redux/employeeSlice";
import ConfirmationCreate from "../components/confirmationCreate";
import Select from "react-select";

function CreateEmployee() {
    document.title = "HRnet";

    const regexName = /^[a-zA-ZàâäéèêëïîôöùûüçÀÂÄÉÈÊËÏÎÔÖÙÛÜÇ\s'-]+$/;
    const regexDate = /^(19[0-9]{2}|200[0-9]|201[0-9]|2020)-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
    const regexStreet = /^[0-9]+\s[A-Za-zÀ-ÿ\s-]+(?:\s[A-Za-zÀ-ÿ\s-]+)*$/;

    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birthdate, setBirthdate] = useState(undefined);
    const [startDate, setStartDate] = useState(undefined);
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [department, setDepartment] = useState(null);
    const [state, setState] = useState(null);

    //Véfication si l'input est rempli avec les bonnes informations
    const testFirstname = regexName.test(firstName);
    const testLastname = regexName.test(lastName);
    const testBirthdate = regexDate.test(birthdate);
    const testStartDate = regexDate.test(startDate);
    const testStreet = regexStreet.test(street);
    const testCity = regexName.test(city);

    //Efface les données entré dans le formulaire
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

    //Vérification si le formulaire est bien compléter
    const isCompleted = () => {
        return (
            testFirstname &&
            testLastname &&
            testBirthdate &&
            testStartDate &&
            testStreet &&
            testCity &&
            zipCode &&
            department &&
            state !== ""
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
            handleOpen();
        }
    };

    const handleBirthdayDate = (e) => {
        setBirthdate(e.target.value);
    };

    const handleStartDate = (e) => {
        setStartDate(e.target.value);
    };

    let [isVisible, setIsVisible] = useState(false);

    const handleOpen = () => {
        setIsVisible(true);
    };

    return (
        <>
            <div>
                <Home />
                {isVisible && <ConfirmationCreate onClose={() => setIsVisible(false)} />}
                <div className="container">
                    <form action="#" id="create-employee">
                        <h2 className="title-create">Create Employee</h2>
                        <div className="information-address-employee">
                            <div className="information-employee">
                                <label htmlFor="first-name">First Name :</label>
                                <input
                                    value={firstName}
                                    type="text"
                                    id="first-name"
                                    onChange={(e) => {
                                        setFirstName(e.target.value);
                                    }}
                                />

                                <label htmlFor="last-name">Last Name :</label>
                                <input
                                    value={lastName}
                                    type="text"
                                    id="last-name"
                                    onChange={(e) => {
                                        setLastName(e.target.value);
                                    }}
                                />

                                <label htmlFor="date-of-birth">Date of Birth :</label>
                                <input
                                    type="date"
                                    id="birthday"
                                    value={birthdate}
                                    onChange={handleBirthdayDate}
                                    required
                                />

                                <label htmlFor="start-date">Start Date :</label>
                                <input
                                    type="date"
                                    id="start-date"
                                    value={startDate}
                                    onChange={handleStartDate}
                                    required
                                />

                                <label htmlFor="department">Department :</label>
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

                                <label htmlFor="street">Street :</label>
                                <input
                                    value={street}
                                    type="text"
                                    id="street"
                                    placeholder="ex: 48 rue du berger"
                                    onChange={(e) => {
                                        setStreet(e.target.value);
                                    }}
                                />

                                <label htmlFor="city">City :</label>
                                <input value={city} type="text" id="city" onChange={(e) => setCity(e.target.value)} />

                                <label htmlFor="state">State :</label>
                                <Select
                                    name="state"
                                    id="state"
                                    placeholder="Select a state"
                                    options={statesOptions}
                                    value={state || null}
                                    onChange={(e) => setState(e)}
                                />

                                <label htmlFor="zip-code">Zip Code :</label>
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
