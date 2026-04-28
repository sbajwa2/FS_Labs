import { useState } from "react";
import RoleList from "../components/RoleList";
import AddRoleForm from "../components/AddroleForm";
import { roleService } from "../services/roleService";
import type { Role } from "../types/Role";

function OrganizationPage() {
  const [roles, setRoles] = useState<Role[]>(roleService.getRoles());

  return (
    <main>
      <RoleList roles={roles} />
      <AddRoleForm setRoles={setRoles} />
    </main>
  );
}

export default OrganizationPage;