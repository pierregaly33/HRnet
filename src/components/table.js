import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { useDispatch } from "react-redux";
import { deleteEmployee } from "../redux/employeeSlice";

function Table({ columns, data }) {
    const dispatch = useDispatch();

    const [tableData, setTableData] = useState(data);

    const handleDelete = (index) => {
        const updatedData = tableData.filter((row, i) => i !== index);
        setTableData(updatedData);

        localStorage.setItem("employees", JSON.stringify(updatedData));

        dispatch(deleteEmployee(index));
    };

    const columnsWithDelete = [
        ...columns,
        {
            name: "Actions",
            cell: (row, index) => (
                <button className="button-delete" onClick={() => handleDelete(index)}>
                    Supprimer
                </button>
            ),
            ignoreRowClick: true,
        },
    ];

    return <DataTable columns={columnsWithDelete} data={tableData} striped highlightOnHover pagination />;
}

export default Table;
