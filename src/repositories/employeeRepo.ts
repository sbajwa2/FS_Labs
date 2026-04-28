import { departments as initialDepartments } from "../data/departments";
import type { Department, Employee } from "../types/Employee";

let departments: Department[] = structuredClone(initialDepartments);

export const employeeRepo = {
  getDepartments(): Department[] {
    return departments;
  },

  createEmployee(departmentName: string, employee: Employee): Department[] {
    departments = departments.map((dept) => {
      if (dept.name === departmentName) {
        return {
          ...dept,
          employees: [...dept.employees, employee],
        };
      }

      return dept;
    });

    return departments;
  },
};