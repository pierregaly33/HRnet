import Header from "../components/header";
import { columns } from "../data/columns";
import Table from "../components/table";

function EmployeeList() {
    const getEmployees = JSON.parse(localStorage.getItem("employees"));

    return (
        <>
            <Header />
            <div id="employee-div" className="container">
                <h1>Current employees</h1>
                <Table columns={columns} data={getEmployees} />
            </div>
        </>
    );
}

export default EmployeeList;
