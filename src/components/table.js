import DataTable from "react-data-table-component";

function Table({ columns, data, modalDelete }) {
    const columnsWithDelete = [
        ...columns,
        {
            name: "Actions",
            cell: (row, index) => (
                <button
                    className="button-delete"
                    onClick={() => {
                        modalDelete(index);
                    }}
                >
                    Supprimer
                </button>
            ),
            ignoreRowClick: true,
        },
    ];

    return <DataTable columns={columnsWithDelete} data={data} striped highlightOnHover pagination />;
}

export default Table;
