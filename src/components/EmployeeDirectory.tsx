import { departments } from "../data/departments";

function EmployeeDirectory() {
  return (
    <main id="employee-container">
      {departments.map((department) => (
        <section key={department.name}>
          <h2>{department.name}</h2>

          <ul>
            {department.employees.map((employee) => (
              <li key={`${employee.firstName}-${employee.lastName}`}>
                {employee.firstName} {employee.lastName}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}

export default EmployeeDirectory;