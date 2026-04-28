import type { Department } from "../types/Employee";

function EmployeeDirectory({ departments }: { departments: Department[] }) {
  return (
    <main>
      {departments.map((dept) => (
        <section key={dept.name}>
          <h2>{dept.name}</h2>

          <ul>
            {dept.employees.map((emp, index) => (
              <li key={`${emp.firstName}-${emp.lastName}-${index}`}>
                {emp.firstName} {emp.lastName}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}

export default EmployeeDirectory;