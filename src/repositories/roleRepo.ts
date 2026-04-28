import { roles as initialRoles } from "../data/roles";
import type { Role } from "../types/Role";

let roles: Role[] = structuredClone(initialRoles);

export const roleRepo = {
  getRoles(): Role[] {
    return roles;
  },

  createRole(role: Role): Role[] {
    roles = [...roles, role];
    return roles;
  },
};