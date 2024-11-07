import Header from "../components/header";
import { columns } from "../data/columns";
import Table from "../components/Table";
import { useState } from "react";
import ConfirmationDelete from "../components/confirmationDelete";
import { useDispatch } from "react-redux";
import { deleteEmployee } from "../redux/employeeSlice";
import { useSelector } from "react-redux";

function EmployeeList() {
    const emp = useSelector((state) => state.employees.employees);
    const dispatch = useDispatch();
    let [isVisible, setIsVisible] = useState(false);
    let [supressionIndex, setSuppressionIndex] = useState(0);

    const handleOpen = (index) => {
        setSuppressionIndex(index);
        setIsVisible(true);
    };

    const handleDelete = () => {
        dispatch(deleteEmployee(supressionIndex));
        setIsVisible(false);
    };

    return (
        <>
            <Header />
            {isVisible && (
                <ConfirmationDelete
                    onClose={() => setIsVisible(false)}
                    onDelete={handleDelete}
                    SuppressionIndex={supressionIndex}
                />
            )}
            <div id="employee-div" className="container">
                <h1>Current employees</h1>
                <Table columns={columns} data={emp} modalDelete={handleOpen} />
            </div>
        </>
    );
}

export default EmployeeList;
