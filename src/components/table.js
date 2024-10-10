import React from "react";
import DataTable from "react-data-table-component";

function table({ columns, data }) {
    return (
        <>
            <DataTable columns={columns} data={data} striped highlightOnHover pagination />;
        </>
    );
}

export default table;
