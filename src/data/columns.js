export const columns = [
    {
        name: "FirstName",
        selector: (row) => row.firstName,
        sortable: true,
    },
    {
        name: "LastName",
        selector: (row) => row.lastName,
        sortable: true,
    },
    {
        name: "StartDate",
        selector: (row) => row.StartDate,
        sortable: true,
    },
    {
        name: "Departement",
        selector: (row) => row.Departement,
        sortable: true,
    },
    {
        name: "Birthday",
        selector: (row) => row.DateBirthday,
        sortable: true,
    },
    {
        name: "Street",
        selector: (row) => row.Street,
        sortable: true,
    },
    {
        name: "City",
        selector: (row) => row.City,
        sortable: true,
    },
    {
        name: "State",
        selector: (row) => row.State,
        sortable: true,
    },
    {
        name: "ZipCode",
        selector: (row) => row.ZipCode,
        sortable: true,
    },
];
