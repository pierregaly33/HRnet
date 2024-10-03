import Header from "../components/header";
import DataTable from "react-data-table-component";
import { columns } from "../data/columns";
import { useSelector } from "react-redux";

function EmployeeList() {
    const getEmployees = useSelector((state) => state.employees.employees);

    return (
        <>
            <Header />
            <div id="employee-div" className="container">
                <h1>Current employees</h1>
                <DataTable columns={columns} data={getEmployees} striped highlightOnHover pagination />
            </div>
        </>
    );
}

export default EmployeeList;
