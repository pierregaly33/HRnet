import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateEmployee from "./pages/createEmployee";
import EmployeeList from "./pages/employeeList";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<CreateEmployee />} />
                <Route path="/employeelist" element={<EmployeeList />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
