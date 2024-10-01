import { createSlice } from "@reduxjs/toolkit";

export const employeeSlice = createSlice({
    name: "employees",
    initialState: null,
    reducers: {
        addEmployee: (state, action) => {
            localStorage.setItem("employee", JSON.stringify(action.payload));
        },
    },
});

export default employeeSlice;
export const { addEmployee } = employeeSlice.actions;
