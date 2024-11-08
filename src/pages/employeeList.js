import Header from "../components/header";
import { columns } from "../data/columns";
import Table from "../components/Table";
import { useState } from "react";
import ConfirmationDelete from "../components/ConfirmationDelete";
import { useDispatch } from "react-redux";
import { deleteEmployee } from "../redux/employeeSlice";
import { useSelector } from "react-redux";

function EmployeeList() {
    const getEmployees = useSelector((state) => state.employees.employees);
    const dispatch = useDispatch();
    let [isVisible, setIsVisible] = useState(false);
    let [supressionIndex, setSuppressionIndex] = useState(0);

    //Ouverture modale
    const handleOpen = (index) => {
        setSuppressionIndex(index);
        setIsVisible(true);
    };

    //Suppresion de l'employee ciblée
    const handleDelete = () => {
        dispatch(deleteEmployee(supressionIndex));
        setIsVisible(false);
    };

    return (
        <>
            <Header />
            {isVisible && <ConfirmationDelete onClose={() => setIsVisible(false)} onDelete={handleDelete} />}
            <div id="employee-div" className="container">
                <h1>Current employees</h1>
                <Table columns={columns} data={getEmployees} modalDelete={handleOpen} />
            </div>
        </>
    );
}

export default EmployeeList;
