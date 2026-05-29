import { orders } from "../../data/orders";

export default function OrderTable() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 mt-6 p-6">

      <h2 className="text-xl font-semibold mb-5">
        Order History
      </h2>

      <table className="w-full">

        <thead>

          <tr className="border-b text-left text-gray-500">

            <th className="pb-4">Medicine</th>
            <th>Quantity</th>
            <th>Amount</th>
            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          {orders.map((order) => (

            <tr
              key={order.id}
              className="border-b"
            >

              <td className="py-5">
                {order.medicine}
              </td>

              <td>{order.quantity}</td>

              <td>₹{order.amount}</td>

              <td>

                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                  {order.status}
                </span>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}