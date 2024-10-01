import Header from "../components/header";
import DataTable from "react-data-table-component";
import { columns } from "../data/columns";

function EmployeeList() {
    return (
        <>
            <Header />
            <body>
                <div id="employee-div" className="container">
                    <h1>Current employees</h1>
                    <DataTable columns={columns} />
                </div>
            </body>
        </>
    );
}

export default EmployeeList;
