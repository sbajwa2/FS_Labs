import { useState } from "react";
import Header from "./components/Header";
import EmployeeDirectory from "./components/EmployeeDirectory";
import Footer from "./components/Footer";
import AddEmployeeForm from "./components/AddEmployeeForm";
import { departments as initialData } from "./data/departments";
import type { Department } from "./types/Employee";
import "./App.css";

function App() {
  const [departments, setDepartments] = useState<Department[]>(initialData);

  return (
    <>
      <Header />

      <EmployeeDirectory departments={departments} />

      <AddEmployeeForm
        departments={departments}
        setDepartments={setDepartments}
      />

      <Footer />
    </>
  );
}

export default App;