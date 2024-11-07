import { createSlice } from "@reduxjs/toolkit";
const loadEmployees = () => {
    const employeesSaved = localStorage.getItem("employees");
    return employeesSaved ? JSON.parse(employeesSaved) : [];
};

export const employeeSlice = createSlice({
    name: "employees",
    initialState: {
        employees: loadEmployees(),
    },
    reducers: {
        addEmployee: (state, action) => {
            state.employees.push(action.payload);
            localStorage.setItem("employees", JSON.stringify(state.employees));
        },
        deleteEmployee: (state, action) => {
            state.employees.splice(action.payload, 1);
        },
    },
});

export default employeeSlice;
export const { addEmployee, deleteEmployee } = employeeSlice.actions;
