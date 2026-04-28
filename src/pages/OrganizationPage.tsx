import { roles } from "../data/roles";

function OrganizationPage() {
  return (
    <main>
      <section>
        <h2>Leadership and Management</h2>

        {roles.map((person) => (
          <div
            key={`${person.firstName}-${person.lastName}`}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "8px 0",
              borderBottom: "1px solid #ddd",
            }}
          >
            <span>
              {person.firstName} {person.lastName}
            </span>

            <span>{person.role}</span>
          </div>
        ))}
      </section>
    </main>
  );
}

export default OrganizationPage;