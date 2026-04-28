import type { Department } from "../types/Employee";
import useFormInput from "../hooks/useFormInput";
import { employeeService } from "../services/employeeService";

function AddEmployeeForm({
  departments,
  setDepartments,
}: {
  departments: Department[];
  setDepartments: React.Dispatch<React.SetStateAction<Department[]>>;
}) {
  // Form inputs handled using custom hook
  const firstName = useFormInput("");
  const lastName = useFormInput("");
  const selectedDept = useFormInput(departments[0]?.name || "");
  const formMessage = useFormInput("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    formMessage.setMessage("");

    // Validate first name using hook
    const isFirstNameValid = firstName.validate((value) => {
      if (value.trim().length < 3) {
        return "First name must be at least 3 characters.";
      }

      return "";
    });

    if (!isFirstNameValid) {
      return;
    }

    // Call service to handle business logic and data update
    const result = employeeService.createEmployee(selectedDept.value, {
      firstName: firstName.value.trim(),
      lastName: lastName.value.trim(),
    });

    if (!result.success) {
      formMessage.setMessage(result.message || "Employee could not be added.");
      return;
    }

    if (result.departments) {
      setDepartments(result.departments);
    }

    firstName.clear();
    lastName.clear();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Employee</h2>

      {formMessage.message && <p className="error">{formMessage.message}</p>}

      {firstName.message && <p className="error">{firstName.message}</p>}

      <input
        type="text"
        placeholder="First Name"
        value={firstName.value}
        onChange={(e) => firstName.setValue(e.target.value)}
      />

      <input
        type="text"
        placeholder="Last Name"
        value={lastName.value}
        onChange={(e) => lastName.setValue(e.target.value)}
      />

      <select
        value={selectedDept.value}
        onChange={(e) => selectedDept.setValue(e.target.value)}
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