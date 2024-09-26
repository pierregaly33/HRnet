import React from "react";
import Header from "../components/header";

function employeeList() {
    return (
        <>
            <Header />
            <body>
                <div id="employee-div" className="container">
                    <h1>Current employees</h1>
                    <table id="employee-table" className="display"></table>
                </div>
            </body>
        </>
    );
}

export default employeeList;
