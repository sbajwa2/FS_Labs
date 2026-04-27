import { useState } from "react";
import type { Department } from "../types/Employee";

function AddEmployeeForm({
  departments,
  setDepartments,
}: {
  departments: Department[];
  setDepartments: React.Dispatch<React.SetStateAction<Department[]>>;
}) {
  // State for form inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [selectedDept, setSelectedDept] = useState(departments[0].name);
  // State for validation message
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setError("");

 // Validate first name length
    if (firstName.trim().length < 3) {
      setError("First name must be at least 3 characters.");
      return;
    }

  // Add new employee to selected department
    const updated = departments.map((dept) => {
      if (dept.name === selectedDept) {
        return {
          ...dept,
          employees: [
            ...dept.employees,
            { firstName, lastName },
          ],
        };
      }
      return dept;
    });

    // Update state so UI re-renders
    setDepartments(updated);

    // clear form inputs after submission
    setFirstName("");
    setLastName("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "20px" }}>
      <h2>Add Employee</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />

      <select
        value={selectedDept}
        onChange={(e) => setSelectedDept(e.target.value)}
      >
        {departments.map((dept) => (
          <option key={dept.name} value={dept.name}>
            {dept.name}
          </option>
        ))}
      </select>

      <button type="submit">Add Employee</button>
    </form>
  );
}

export default AddEmployeeForm;