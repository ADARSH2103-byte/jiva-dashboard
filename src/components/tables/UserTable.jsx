import { users } from "../../data/users";
import { Link } from "react-router-dom";

export default function UserTable() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 mt-6 overflow-hidden">

      <table className="w-full">

        <thead className="bg-gray-50 border-b border-gray-200">

          <tr className="text-left text-sm text-gray-500">

            <th className="p-5">Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Role</th>
            <th>Appointments</th>
            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {users.map((user) => (

            <tr
              key={user.id}
              className="border-b border-gray-100 hover:bg-gray-50 transition"
            >

              <td className="p-5 font-medium text-gray-800">
                {user.name}
              </td>

              <td className="text-gray-500">
                {user.email}
              </td>

              <td>

                <span className={`px-3 py-1 rounded-full text-xs font-medium
                  ${
                    user.status === "Active"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {user.status}
                </span>

              </td>

              <td className="text-gray-600">
                {user.role}
              </td>

              <td className="font-semibold text-blue-600">
                {user.appointments}
              </td>

              <td>

                <Link
                  to={`/user/${user.id}`}
                  className="border border-gray-300 px-4 py-2 rounded-lg text-sm hover:bg-gray-100"
                >
                  View
                </Link>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}