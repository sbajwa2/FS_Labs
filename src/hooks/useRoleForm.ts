import { useState } from "react";
import type { Role } from "../types/Role";
import { roleService } from "../services/roleService";

function useRoleForm(setRoles: React.Dispatch<React.SetStateAction<Role[]>>) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setMessage("");

    const result = roleService.createRole({
      firstName,
      lastName,
      role,
    });

    if (!result.success) {
      setMessage(result.message || "Role could not be added.");
      return;
    }

    if (result.roles) {
      setRoles(result.roles);
    }

    setFirstName("");
    setLastName("");
    setRole("");
  };

  return {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    role,
    setRole,
    message,
    handleSubmit,
  };
}

export default useRoleForm;