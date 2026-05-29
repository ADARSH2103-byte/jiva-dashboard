import { useParams } from "react-router-dom";
import { users } from "../data/users";

import OrderTable from "../components/tables/OrderTable";
import FamilyTable from "../components/tables/FamilyTable";

export default function UserDetail() {

  const { id } = useParams();

  const user = users.find(
    (u) => u.id === Number(id)
  );

  // Safety Check
  if (!user) {
    return (
      <div className="p-10 text-2xl font-semibold text-red-500">
        User not found
      </div>
    );
  }

  return (
    <div className="bg-[#f6f7fb] min-h-screen p-8">

      {/* Top Section */}
      <div className="bg-white rounded-2xl p-8 border border-gray-200">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-5">

            {/* Avatar */}
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-2xl font-bold text-green-600">
              {user.name.charAt(0)}
            </div>

            <div>

              <h1 className="text-3xl font-bold text-gray-800">
                {user.name}
              </h1>

              <div className="flex gap-3 mt-2">

                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                  {user.status}
                </span>

                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                  {user.role}
                </span>

              </div>

            </div>

          </div>

          <button className="bg-orange-500 hover:bg-orange-600 transition text-white px-5 py-3 rounded-xl">
            Upgrade to Prime
          </button>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-5 mt-10">

          <div className="bg-gray-50 p-5 rounded-xl">

            <p className="text-gray-500">
              Orders
            </p>

            <h1 className="text-3xl font-bold mt-2">
              6
            </h1>

          </div>

          <div className="bg-gray-50 p-5 rounded-xl">

            <p className="text-gray-500">
              Appointments
            </p>

            <h1 className="text-3xl font-bold mt-2">
              {user.appointments}
            </h1>

          </div>

          <div className="bg-gray-50 p-5 rounded-xl">

            <p className="text-gray-500">
              Family Members
            </p>

            <h1 className="text-3xl font-bold mt-2">
              {user.familyMembers}
            </h1>

          </div>

          <div className="bg-gray-50 p-5 rounded-xl">

            <p className="text-gray-500">
              Total Spent
            </p>

            <h1 className="text-3xl font-bold mt-2">
              ₹{user.spent}
            </h1>

          </div>

        </div>

      </div>

      {/* Personal Info + Address */}
      <div className="grid grid-cols-2 gap-6 mt-6">

        {/* Personal Info */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200">

          <h2 className="text-xl font-semibold mb-5">
            Personal Information
          </h2>

          <div className="space-y-4">

            <p>
              <span className="font-medium">
                Email:
              </span>{" "}
              {user.email}
            </p>

            <p>
              <span className="font-medium">
                Phone:
              </span>{" "}
              {user.phone}
            </p>

            <p>
              <span className="font-medium">
                Gender:
              </span>{" "}
              Female
            </p>

            <p>
              <span className="font-medium">
                Blood Group:
              </span>{" "}
              O+
            </p>

          </div>

        </div>

        {/* Address */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200">

          <h2 className="text-xl font-semibold mb-5">
            Address
          </h2>

          <p className="text-gray-600 leading-7">
            Flat 301, Sunshine Apartments,
            MG Road, Mumbai, Maharashtra
          </p>

        </div>

      </div>

      {/* Family Table */}
      <div className="mt-6">
        <FamilyTable />
      </div>

      {/* Orders Table */}
      <div className="mt-6">
        <OrderTable />
      </div>

    </div>
  );
}