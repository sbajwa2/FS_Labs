import { useState } from "react";
import EmployeeDirectory from "../components/EmployeeDirectory";
import AddEmployeeForm from "../components/AddEmployeeForm";
import { employeeService } from "../services/employeeService";
import type { Department } from "../types/Employee";

function EmployeesPage() {
   const [departments, setDepartments] = useState<Department[]>(
    employeeService.getDepartments()
  );

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