import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import {
  User,
  Lock,
  LogIn,
  ClipboardCheck,
} from "lucide-react";

import useLogin from "../../Hooks/auth/useLogin";

const Login = () => {
  const navigate = useNavigate();

  const { login, loading, error } = useLogin();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await login(formData);

if (response) {

    if (response.user.role === "manager") {
        console.log("Role:", response.user.role);


        navigate("/manager");

    } else {

        navigate("/employee");

    }

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
            Organize your
            <span className="text-indigo-600"> Tasks </span>
            efficiently.
          </h1>

          <p className="mt-8 text-lg text-gray-600 leading-8">
            Stay productive by managing your daily tasks in one place.
            Login to access your personal dashboard, organize your work,
            and keep track of everything effortlessly.
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
                Fast
              </h3>

              <p className="text-gray-500 mt-2">
                MongoDB Powered
              </p>
            </div>

          </div>

        </div>

        {/* Right Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100">

          <div className="text-center mb-8">

            <div className="mx-auto h-20 w-20 rounded-3xl bg-indigo-100 flex items-center justify-center">

              <LogIn
                className="text-indigo-600"
                size={40}
              />

            </div>

            <h2 className="mt-6 text-4xl font-bold text-slate-900">
              Welcome Back
            </h2>

            <p className="mt-3 text-gray-500">
              Login to continue managing your tasks.
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

              <div className="mt-2 relative">

                <User
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter username"
                  required
                  className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-4 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
                />

              </div>

            </div>

            {/* Password */}
            <div>

              <label className="text-sm font-semibold text-gray-700">
                Password
              </label>

              <div className="mt-2 relative">

                <Lock
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  required
                  className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-4 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
                />

              </div>

            </div>

            {error && (
              <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-red-600 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white py-3 font-semibold transition disabled:opacity-60"
            >
              {loading ? "Signing In..." : "Login"}
            </button>

          </form>

          <p className="text-center text-gray-500 mt-8">

            Don't have an account?{" "}

            <Link
              to="/register"
              className="text-indigo-600 font-semibold hover:text-indigo-700"
            >
              Register
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
};

export default Login;