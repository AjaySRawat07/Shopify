import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import shoppingImg from "../assets/simple.jpg";

// Validation Schema using Yup
const schema = yup.object().shape({
  name: yup.string().min(3, "Name must be at least 3 characters").required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup
    .string()
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const SignUp = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  // Handle SignUp Submission & Save to LocalStorage
  const onSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const newUser = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      password: data.password, // Storing password in LocalStorage is NOT recommended for real apps
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful🚀🚀. Redirecting to Login...");
    navigate("/login");
  };

  return (
    <div className="flex h-screen">
      {/* Left Side (Signup Form) */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-gray-100 p-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-2">Create an Account</h1>
        <p className="text-gray-600 text-center mb-6">Join us for an amazing shopping experience!</p>

        <form onSubmit={handleSubmit(onSubmit)} className="w-2/3 space-y-4">
          {/* Name Input */}
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              {...register("name")}
              className="w-full border p-2 rounded mt-1"
              placeholder="Enter your name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

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

          {/* Phone Number Input */}
          <div>
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="text"
              {...register("phone")}
              className="w-full border p-2 rounded mt-1"
              placeholder="Enter your phone number"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
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

          {/* Confirm Password Input */}
          <div>
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              {...register("confirmPassword")}
              className="w-full border p-2 rounded mt-1"
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
          </div>

          {/* Signup Button */}
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-800 transition">
            Sign Up
          </button>

          {/* Already have an account? */}
          <p className="text-center text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Login
            </a>
          </p>
        </form>
      </div>

      {/* Right Side (Image Section) */}
      <div className="w-1/2 flex items-center justify-center bg-gray-200">
        <img src={shoppingImg} alt="Shopping" className="w-full min-h-96 rounded-lg shadow-lg" />
      </div>
    </div>
  );
};

export default SignUp;
