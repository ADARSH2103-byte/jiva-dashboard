import { familyMembers } from "../../data/family";

export default function FamilyTable() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 mt-6 p-6">

      <div className="flex justify-between mb-5">

        <h2 className="text-xl font-semibold">
          Family Members
        </h2>

        <button className="bg-black text-white px-4 py-2 rounded-xl">
          Add Member
        </button>

      </div>

      {familyMembers.map((member) => (

        <div
          key={member.id}
          className="flex justify-between items-center border-b py-4"
        >

          <div>

            <h3 className="font-semibold">
              {member.name}
            </h3>

            <p className="text-gray-500">
              {member.relation}
            </p>

          </div>

          <p>{member.phone}</p>

        </div>

      ))}

    </div>
  );
}