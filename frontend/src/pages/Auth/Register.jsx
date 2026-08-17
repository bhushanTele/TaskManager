import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  User,
  Lock,
  UserPlus,
  ClipboardCheck,
} from "lucide-react";

import useRegister from "../../Hooks/auth/useRegister";

const Register = () => {
  const navigate = useNavigate();

  const { register, loading, error } = useRegister();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [validationError, setValidationError] = useState("");

  const handleChange = (e) => {
    setValidationError("");

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setValidationError("Passwords do not match.");
      return;
    }

    const response = await register({
      username: formData.username,
      password: formData.password,
    });

    if (response) {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 flex items-center justify-center px-6">

      <div className="grid lg:grid-cols-2 max-w-6xl w-full items-center gap-16">

        {/* Left Section */}

        <div className="hidden lg:block">

          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-indigo-100 text-indigo-700 font-semibold mb-8">
            <ClipboardCheck size={22} />
            Task Manager
          </div>

          <h1 className="text-6xl font-extrabold leading-tight text-slate-900">
            Start organizing
            <span className="text-indigo-600"> your work </span>
            today.
          </h1>

          <p className="mt-8 text-lg text-gray-600 leading-8">
            Create your account and manage all your daily tasks in one
            secure place. Stay productive with an organized workflow.
          </p>

          <div className="mt-10 flex gap-4">

            <div className="bg-white rounded-2xl shadow-md px-6 py-5">
              <h3 className="font-bold text-2xl text-indigo-600">
                Secure
              </h3>

              <p className="text-gray-500 mt-2">
                JWT Authentication
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-md px-6 py-5">
              <h3 className="font-bold text-2xl text-indigo-600">
                Personal
              </h3>

              <p className="text-gray-500 mt-2">
                Your own task space
              </p>

            </div>

          </div>

        </div>

        {/* Right Section */}

        <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100">

          <div className="text-center mb-8">

            <div className="mx-auto h-20 w-20 rounded-3xl bg-indigo-100 flex items-center justify-center">

              <UserPlus
                size={40}
                className="text-indigo-600"
              />

            </div>

            <h2 className="mt-6 text-4xl font-bold text-slate-900">
              Create Account
            </h2>

            <p className="mt-3 text-gray-500">
              Join Task Manager and organize your work.
            </p>

          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            {/* Username */}

            <div>

              <label className="text-sm font-semibold text-gray-700">
                Username
              </label>

              <div className="relative mt-2">

                <User
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  name="username"
                  placeholder="Enter username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />

              </div>

            </div>

            {/* Password */}

            <div>

              <label className="text-sm font-semibold text-gray-700">
                Password
              </label>

              <div className="relative mt-2">

                <Lock
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />

              </div>

            </div>

            {/* Confirm Password */}

            <div>

              <label className="text-sm font-semibold text-gray-700">
                Confirm Password
              </label>

              <div className="relative mt-2">

                <Lock
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />

              </div>

            </div>

            {(validationError || error) && (

              <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-red-600 text-sm">

                {validationError || error}

              </div>

            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition duration-300 disabled:opacity-60"
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>

          </form>

          <p className="text-center text-gray-500 mt-8">

            Already have an account?{" "}

            <Link
              to="/login"
              className="text-indigo-600 hover:text-indigo-700 font-semibold"
            >
              Login
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
};

export default Register;