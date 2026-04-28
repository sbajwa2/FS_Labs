import type { Role } from "../types/Role";
import { roleRepo } from "../repositories/roleRepo";

export const roleService = {
  getRoles(): Role[] {
    return roleRepo.getRoles();
  },

  createRole(newRole: Role): {
    success: boolean;
    message?: string;
    roles?: Role[];
  } {
    const roles = roleRepo.getRoles();

    if (newRole.firstName.trim().length < 3) {
      return {
        success: false,
        message: "First name must be at least 3 characters.",
      };
    }

    const roleAlreadyOccupied = roles.some(
      (person) =>
        person.role.toLowerCase().trim() === newRole.role.toLowerCase().trim()
    );

    if (roleAlreadyOccupied) {
      return {
        success: false,
        message: "This role already exists and is occupied.",
      };
    }

    const updatedRoles = roleRepo.createRole({
      firstName: newRole.firstName.trim(),
      lastName: newRole.lastName.trim(),
      role: newRole.role.trim(),
    });

    return {
      success: true,
      roles: updatedRoles,
    };
  },
};