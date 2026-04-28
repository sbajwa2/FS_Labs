import { useState } from "react";
import EmployeeDirectory from "../components/EmployeeDirectory";
import AddEmployeeForm from "../components/AddEmployeeForm";
import { departments as initialData } from "../data/departments";
import type { Department } from "../types/Employee";

function EmployeesPage() {
  const [departments, setDepartments] = useState<Department[]>(initialData);

  return (
    <>
      <EmployeeDirectory departments={departments} />

      <AddEmployeeForm
        departments={departments}
        setDepartments={setDepartments}
      />
    </>
  );
}

export default EmployeesPage;