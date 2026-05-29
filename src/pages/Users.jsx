import Sidebar from "../components/layout/Sidebar";
import SummaryCard from "../components/cards/SummaryCard";
import UserTable from "../components/tables/UserTable";

export default function Users() {
  return (
    <div className="flex bg-[#f6f7fb] min-h-screen">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8">

        {/* Header */}
        <div className="flex items-center justify-between">

          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              User Management
            </h1>

            <p className="text-gray-500 mt-1">
              Manage all accounts and permissions
            </p>
          </div>

          <button className="bg-[#1f2937] text-white px-5 py-3 rounded-xl text-sm font-medium hover:bg-black transition">
            + Add User
          </button>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-4 gap-5 mt-8">

          <SummaryCard
            title="Total Users"
            value="20"
          />

          <SummaryCard
            title="Prime Users"
            value="5"
          />

          <SummaryCard
            title="Non Prime Users"
            value="15"
          />

          <SummaryCard
            title="Family Members"
            value="49"
          />

        </div>

        {/* Search + Filters */}
        <div className="flex gap-4 mt-8">

          <input
            type="text"
            placeholder="Search users..."
            className="flex-1 bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none"
          />

          <select className="bg-white border border-gray-200 rounded-xl px-4 py-3">
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>

        </div>

        {/* Table */}
        <UserTable />

      </div>

    </div>
  );
}