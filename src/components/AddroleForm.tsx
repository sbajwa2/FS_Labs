import type { Role } from "../types/Role";
import useRoleForm from "../hooks/useRoleForm";

function AddRoleForm({
  setRoles,
}: {
  setRoles: React.Dispatch<React.SetStateAction<Role[]>>;
}) {
  const form = useRoleForm(setRoles);

  return (
    <form onSubmit={form.handleSubmit}>
      <h2>Add Organization Role</h2>

      {form.message && <p className="error">{form.message}</p>}

      <input
        type="text"
        placeholder="First Name"
        value={form.firstName}
        onChange={(e) => form.setFirstName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Last Name"
        value={form.lastName}
        onChange={(e) => form.setLastName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Role"
        value={form.role}
        onChange={(e) => form.setRole(e.target.value)}
      />

      <button type="submit">Add Role</button>
    </form>
  );
}

export default AddRoleForm;