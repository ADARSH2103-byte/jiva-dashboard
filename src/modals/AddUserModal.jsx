import { useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";

export default function AddUserModal({
  show,
  setShow,
}) {

  const { addUser } =
    useContext(UserContext);

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      role: "Patient",
      status: "Active",
      appointments: 0,
      spent: 0,
      familyMembers: 0,
    });

  const handleSubmit = (e) => {

    e.preventDefault();

    addUser({
      id: Date.now(),
      ...formData,
    });

    setShow(false);

  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white w-[500px] rounded-2xl p-8">

        <h2 className="text-2xl font-bold mb-6">
          Add User
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border rounded-xl px-4 py-3"
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value,
              })
            }
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-xl px-4 py-3"
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
          />

          <select
            className="w-full border rounded-xl px-4 py-3"
            onChange={(e) =>
              setFormData({
                ...formData,
                role: e.target.value,
              })
            }
          >

            <option>
              Patient
            </option>

            <option>
              Nurse
            </option>

          </select>

          <div className="flex justify-end gap-3 pt-4">

            <button
              type="button"
              onClick={() => setShow(false)}
              className="border px-5 py-3 rounded-xl"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-black text-white px-5 py-3 rounded-xl"
            >
              Add User
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}