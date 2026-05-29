export default function Sidebar() {
  return (
    <div className="w-[260px] bg-white border-r border-gray-200 min-h-screen p-6">

      <h1 className="text-3xl font-bold text-green-600">
        Jiva Health
      </h1>

      <div className="mt-10 space-y-2">

        <div className="bg-green-50 text-green-600 px-4 py-3 rounded-xl font-medium">
          User Management
        </div>

        <div className="px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-xl cursor-pointer">
          Services
        </div>

        <div className="px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-xl cursor-pointer">
          Consultation
        </div>

        <div className="px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-xl cursor-pointer">
          Lab Test Booking
        </div>

        <div className="px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-xl cursor-pointer">
          Medicine Orders
        </div>

      </div>

    </div>
  );
}