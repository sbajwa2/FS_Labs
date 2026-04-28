import type { Department, Employee } from "../types/Employee";
import { employeeRepo } from "../repositories/employeeRepo";

export const employeeService = {
  getDepartments(): Department[] {
    return employeeRepo.getDepartments();
  },

  createEmployee(
    departmentName: string,
    employee: Employee
  ): { success: boolean; message?: string; departments?: Department[] } {
    const departments = employeeRepo.getDepartments();

    const departmentExists = departments.some(
      (dept) => dept.name === departmentName
    );

    if (!departmentExists) {
      return {
        success: false,
        message: "Selected department does not exist.",
      };
    }

    if (employee.firstName.trim().length < 3) {
      return {
        success: false,
        message: "First name must be at least 3 characters.",
      };
    }

    const updatedDepartments = employeeRepo.createEmployee(
      departmentName,
      employee
    );

    return {
      success: true,
      departments: updatedDepartments,
    };
  },
};