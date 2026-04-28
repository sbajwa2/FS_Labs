import type { Role } from "../types/Role";

function RoleList({ roles }: { roles: Role[] }) {
  return (
    <section>
      <h2>Leadership and Management</h2>

      <div className="role-list">
        {roles.map((person, index) => (
          <div
            className="role-row"
            key={`${person.firstName}-${person.lastName}-${index}`}
          >
            <span>
              {person.firstName} {person.lastName}
            </span>

            <span>{person.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RoleList;