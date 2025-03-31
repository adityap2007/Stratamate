

export default function Page() {
  const committeeMembers = [
    "John Doe - Chairperson",
    "Jane Smith - Treasurer",
    "Michael Brown - Secretary",
    "Emily Davis - Member",
    "David Wilson - Member",
  ];

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Committee Members
      </h1>
      <ul className="list-disc ml-6">
        {committeeMembers.map((member, index) => (
          <li key={index} className="text-lg mb-2">
            {member}
          </li>
        ))}
      </ul>
    </section>
  );
}
