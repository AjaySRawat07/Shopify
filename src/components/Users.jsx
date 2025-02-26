import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, setGenderFilter, deleteUser, selectUser } from "../store/userSlice";
import UpdateUserForm from "./UpdateUserForm";

const Users = () => {
  const dispatch = useDispatch();
  const { filteredUsers, loading, error, genderFilter, selectedUser } = useSelector((state) => state.user);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">User List</h1>

      {/*  Gender Filter */}
      <div className="flex justify-center gap-6 mb-6">
        {["all", "male", "female"].map((gender) => (
          <label key={gender} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              checked={genderFilter === gender}
              onChange={() => dispatch(setGenderFilter(gender))}
              className="hidden"
            />
            <span
              className={`px-4 py-2 rounded-full text-white ${
                genderFilter === gender ? "bg-blue-600" : "bg-gray-400 hover:bg-gray-500"
              } transition`}
            >
              {gender.charAt(0).toUpperCase() + gender.slice(1)}
            </span>
          </label>
        ))}
      </div>

      {loading && <p className="text-center text-lg font-semibold">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}


      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 text-center bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="border p-3">Image</th>
              <th className="border p-3">Name</th>
              <th className="border p-3">Email</th>
              <th className="border p-3">Gender</th>
              <th className="border p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={user.login.uuid} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                <td className="border p-3">
                  <img src={user.picture.thumbnail} alt="User" className="w-16 h-16 rounded-full mx-auto" />
                </td>
                <td className="border p-3 font-semibold">{`${user.name.first} ${user.name.last}`}</td>
                <td className="border p-3">{user.email}</td>
                <td className="border p-3 capitalize">{user.gender}</td>
                <td className="border p-3">
                  <button
                    className="bg-green-500 text-white px-3 py-1 rounded mr-2 hover:bg-green-700 transition"
                    onClick={() => {
                      dispatch(selectUser(user));
                      setShowForm(true);
                    }}
                  >
                    ✏ Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                    onClick={() => dispatch(deleteUser(user.login.uuid))}
                  >
                    🗑 Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/*  Show Update Form When Editing */}
      {showForm && selectedUser && <UpdateUserForm setShowForm={setShowForm} />}
    </div>
  );
};

export default Users;
