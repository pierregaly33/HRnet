import Home from "../components/header";
import { statesOptions } from "../data/states";
import { departmentsOptions } from "../data/department";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../redux/employeeSlice";
import Select from "react-select";
import { ConfirmationModal } from "modal-p14-galy-pierre";

function CreateEmployee() {
    document.title = "HRnet";

    const regexName = /^[a-zA-ZàâäéèêëïîôöùûüçÀÂÄÉÈÊËÏÎÔÖÙÛÜÇ\s'-]+$/;
    const regexDate = /^(19[0-9]{2}|200[0-9]|201[0-9]|2020)-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
    const regexStreet = /^[0-9]+\s[A-Za-zÀ-ÿ\s-]+(?:\s[A-Za-zÀ-ÿ\s-]+)*$/;

    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [startDate, setStartDate] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [department, setDepartment] = useState(null);
    const [state, setState] = useState(null);

    // États pour chaque message d'erreur
    const [errorFirstName, setErrorFirstName] = useState("");
    const [errorLastName, setErrorLastName] = useState("");
    const [errorBirthdate, setErrorBirthdate] = useState("");
    const [errorStartDate, setErrorStartDate] = useState("");
    const [errorStreet, setErrorStreet] = useState("");
    const [errorCity, setErrorCity] = useState("");
    const [errorZipCode, setErrorZipCode] = useState("");
    const [errorDepartment, setErrorDepartment] = useState("");
    const [errorState, setErrorState] = useState("");

    // Vérification des champs du formulaire
    const validateForm = () => {
        let isValid = true;

        if (!regexName.test(firstName)) {
            setErrorFirstName("Le prénom n'est pas valide.");
            isValid = false;
        } else {
            setErrorFirstName("");
        }

        if (!regexName.test(lastName)) {
            setErrorLastName("Le nom de famille n'est pas valide.");
            isValid = false;
        } else {
            setErrorLastName("");
        }

        if (!regexDate.test(birthdate)) {
            setErrorBirthdate("La date de naissance n'est pas valide.");
            isValid = false;
        } else {
            setErrorBirthdate("");
        }

        if (!regexDate.test(startDate)) {
            setErrorStartDate("La date de début n'est pas valide.");
            isValid = false;
        } else {
            setErrorStartDate("");
        }

        if (!regexStreet.test(street)) {
            setErrorStreet("L'adresse (rue) n'est pas valide.");
            isValid = false;
        } else {
            setErrorStreet("");
        }

        if (!regexName.test(city)) {
            setErrorCity("La ville n'est pas valide.");
            isValid = false;
        } else {
            setErrorCity("");
        }

        if (!zipCode) {
            setErrorZipCode("Le Zip code est requis.");
            isValid = false;
        } else {
            setErrorZipCode("");
        }

        if (!department) {
            setErrorDepartment("Le département est requis.");
            isValid = false;
        } else {
            setErrorDepartment("");
        }

        if (!state) {
            setErrorState("L'état est requis.");
            isValid = false;
        } else {
            setErrorState("");
        }

        return isValid;
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
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
            dispatch(addEmployee(data));
            clearForm();
            handleOpen();
        } else {
            alert("Veuillez vérifier les informations.");
        }
    };

    const handleBirthdayDate = (e) => {
        setBirthdate(e.target.value);
    };

    const handleStartDate = (e) => {
        setStartDate(e.target.value);
    };

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

    let [isVisible, setIsVisible] = useState(false);

    const handleOpen = () => {
        setIsVisible(true);
    };

    return (
        <>
            <div>
                <Home />
                {isVisible && (
                    <ConfirmationModal
                        onClose={() => setIsVisible(false)}
                        isOpen={isVisible}
                        message={"Utilisateur créé"}
                    />
                )}
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
                                    onChange={(e) => setFirstName(e.target.value)}
                                    className={errorFirstName ? "input-error" : ""}
                                />
                                {errorFirstName && <span className="error-message">{errorFirstName}</span>}

                                <label htmlFor="last-name">Last Name :</label>
                                <input
                                    value={lastName}
                                    type="text"
                                    id="last-name"
                                    onChange={(e) => setLastName(e.target.value)}
                                    className={errorLastName ? "input-error" : ""}
                                />
                                {errorLastName && <span className="error-message">{errorLastName}</span>}

                                <label htmlFor="date-of-birth">Date of Birth :</label>
                                <input
                                    type="date"
                                    id="birthday"
                                    value={birthdate}
                                    onChange={handleBirthdayDate}
                                    className={errorBirthdate ? "input-error" : ""}
                                />
                                {errorBirthdate && <span className="error-message">{errorBirthdate}</span>}

                                <label htmlFor="start-date">Start Date :</label>
                                <input
                                    type="date"
                                    id="start-date"
                                    value={startDate}
                                    onChange={handleStartDate}
                                    className={errorStartDate ? "input-error" : ""}
                                />
                                {errorStartDate && <span className="error-message">{errorStartDate}</span>}

                                <label htmlFor="department">Department :</label>
                                <Select
                                    name="department"
                                    id="department"
                                    placeholder="Select a department"
                                    options={departmentsOptions}
                                    value={department || null}
                                    onChange={(e) => setDepartment(e)}
                                    className={errorDepartment ? "input-error" : ""}
                                />
                                {errorDepartment && <span className="error-message">{errorDepartment}</span>}
                            </div>

                            <fieldset className="address">
                                <legend>Address</legend>

                                <label htmlFor="street">Street :</label>
                                <input
                                    value={street}
                                    type="text"
                                    id="street"
                                    placeholder="ex: 48 rue du berger"
                                    onChange={(e) => setStreet(e.target.value)}
                                    className={errorStreet ? "input-error" : ""}
                                />
                                {errorStreet && <span className="error-message">{errorStreet}</span>}

                                <label htmlFor="city">City :</label>
                                <input value={city} type="text" id="city" onChange={(e) => setCity(e.target.value)} />
                                {errorCity && <span className="error-message">{errorCity}</span>}

                                <label htmlFor="state">State :</label>
                                <Select
                                    name="state"
                                    id="state"
                                    placeholder="Select a state"
                                    options={statesOptions}
                                    value={state || null}
                                    onChange={(e) => setState(e)}
                                    className={errorState ? "input-error" : ""}
                                />
                                {errorState && <span className="error-message">{errorState}</span>}

                                <label htmlFor="zip-code">Zip Code :</label>
                                <input
                                    value={zipCode}
                                    type="text"
                                    id="zip-code"
                                    onChange={(e) => setZipCode(e.target.value)}
                                    className={errorZipCode ? "input-error" : ""}
                                />
                                {errorZipCode && <span className="error-message">{errorZipCode}</span>}
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
