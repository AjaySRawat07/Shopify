import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../store/userSlice";

const UpdateUserForm = ({ setShowForm }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.selectedUser);

  const [updatedData, setUpdatedData] = useState({
    uuid: user.login.uuid,
    name: {first : user.name.first , last:user.name.last},
    email: user.email,
    gender: user.gender,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(updatedData));
    setShowForm(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-xl font-bold mb-4 text-center">Update User</h2>

        <label className="block font-semibold mb-1">First Name:</label>
        <input
          type="text"
          value={updatedData.name.first}
          onChange={(e) => setUpdatedData({ ...updatedData, name : {...updatedData.name,first: e.target.value} })}
          className="block w-full border p-2 rounded mb-3"
        />

     <label className="block font-semibold mb-1">Last Name:</label>
        <input
          type="text"
          value={updatedData.name.last}
          onChange={(e) => setUpdatedData({ ...updatedData, name: { ...updatedData.name, last: e.target.value } })}
          className="block w-full border p-2 rounded mb-3"
        />

        <label className="block font-semibold mb-1">Email:</label>
        <input
          type="email"
          value={updatedData.email}
          onChange={(e) => setUpdatedData({ ...updatedData, email: e.target.value })}
          className="block w-full border p-2 rounded mb-3"
        />

        <label className="block font-semibold mb-1">Gender:</label>
        <select
          value={updatedData.gender}
          onChange={(e) => setUpdatedData({ ...updatedData, gender: e.target.value })}
          className="block w-full border p-2 rounded mb-3"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <div className="flex justify-between mt-4">
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Save
          </button>
          <button
            type="button"
            onClick={() => setShowForm(false)}
            className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUserForm;
