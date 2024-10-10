import { createSlice } from "@reduxjs/toolkit";

export const employeeSlice = createSlice({
    name: "employees",
    initialState: {
        employees: [],
    },
    reducers: {
        addEmployee: (state, action) => {
            state.employees.push(action.payload);
            localStorage.setItem("employees", JSON.stringify(state.employees));
        },
    },
});

export default employeeSlice;
export const { addEmployee } = employeeSlice.actions;
