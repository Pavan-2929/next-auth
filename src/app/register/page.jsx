"use client";

import React, { useState } from "react";
import axios from "axios"; 
import { useRouter } from "next/navigation";

const Register = () => {

  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const onLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("api/users/register", formData);

      console.log(response.data);
      router.push("/login")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex justify-center mt-14 ">
        <form
          onSubmit={onLogin}
          className="w-full lg:w-1/2 p-10 pb-0 rounded-lg mt-4 font-semibold bg-slate-600"
        >
          <h1 className="sm:text-4xl text-3xl font-bold mb-10 text-white">
            Register with your account
          </h1>
          <div className="mb-4">
            <label htmlFor="email" className="text-yellow-600">
              username
            </label>
            <input
              type="text"
              id="username"
              onChange={handleChange}
              className="w-full p-2 border bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="text-yellow-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              onChange={handleChange}
              className="w-full p-2 border bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="text-yellow-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              onChange={handleChange}
              className="w-full p-2 border bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded"
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-yellow-500 text-white p-2 mt-5 mb-10 hover:bg-yellow-600 rounded"
            >
              Register Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
