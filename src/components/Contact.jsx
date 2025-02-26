import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
      localStorage.removeItem("isAuthenticated");
      navigate("/login");
    };
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center">
      <div className="text-red-500 text-4xl text-center">
        Contact component is Under Development
      </div>

      <button onClick={handleLogout} className="fixed bottom-5 right-5 bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700 transition">
        Logout
      </button>
    </div>
  );
};

export default Contact;
