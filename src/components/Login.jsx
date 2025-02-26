import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import shoppingImg from "../assets/simple.img2.jpg";

// Validation Schema
const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    //  Check if user exists
    const existingUser = users.find((user) => user.email === data.email && user.password === data.password);
    
    if (existingUser) {
      localStorage.setItem("isAuthenticated", "true");
      alert("Login Successful🚀🚀");
      navigate("/"); // Redirect to HomePage
    } else {
      alert("Invalid Credentials❌. Please check your email and password.");
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Side (Login Form) */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-gray-100 p-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-2">Welcome to Shopify</h1>
        <p className="text-gray-600 text-center mb-6">It's great to have you back!</p>

        <form onSubmit={handleSubmit(onSubmit)} className="w-2/3 space-y-4">
          {/* Email Input */}
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              {...register("email")}
              className="w-full border p-2 rounded mt-1"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              {...register("password")}
              className="w-full border p-2 rounded mt-1"
              placeholder="Enter your password"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>

          {/* Login Button */}
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-800 transition">
            Login
          </button>

          {/* Create Account Button */}
          <button type="button" className="w-full bg-gray-400 text-white p-2 rounded hover:bg-gray-600 transition">
            <a href="/signup">Create Account</a>
          </button>
        </form>
      </div>

      {/* Right Side (Image Section) */}
      <div className="w-1/2 h-screen flex items-center justify-center bg-gray-200">
        <img src={shoppingImg} alt="Shopping" className="w-full mb-10 rounded-lg shadow-lg" />
      </div>
    </div>
  );
};

export default Login;
