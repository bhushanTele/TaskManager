import { Link } from "react-router-dom";

import {
  ClipboardList,
  CheckCircle2,
  CalendarClock,
  ArrowRight,
  PlusCircle,
} from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>

            <span className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-semibold mb-6">
              <ClipboardList size={18} />
              Smart Task Management
            </span>

            <h1 className="text-6xl font-extrabold text-gray-900 leading-tight">
              Stay Organized.
              <br />
              <span className="text-indigo-600">
                Get More Done.
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-8 max-w-xl">
              Organize your work, track progress, prioritize important
              tasks, and never miss a deadline. Everything you need to
              manage your daily workflow in one place.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <Link
                to="/create-task"
                className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition"
              >
                <PlusCircle size={20} />
                Create Task
              </Link>

              <Link
                to="/tasks"
                className="flex items-center gap-2 border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-6 py-3 rounded-xl font-semibold transition"
              >
                View Tasks
                <ArrowRight size={18} />
              </Link>

            </div>

          </div>

          {/* Right */}
          <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100">

            <h2 className="text-2xl font-bold mb-8 text-gray-800">
              Why Choose Task Manager?
            </h2>

            <div className="space-y-8">

              <div className="flex gap-5">
                <div className="bg-indigo-100 p-4 rounded-xl">
                  <ClipboardList className="text-indigo-600" size={28} />
                </div>

                <div>
                  <h3 className="font-semibold text-xl">
                    Organize Tasks
                  </h3>

                  <p className="text-gray-500 mt-1">
                    Create and manage all your daily tasks from one
                    simple dashboard.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="bg-green-100 p-4 rounded-xl">
                  <CheckCircle2 className="text-green-600" size={28} />
                </div>

                <div>
                  <h3 className="font-semibold text-xl">
                    Track Progress
                  </h3>

                  <p className="text-gray-500 mt-1">
                    Mark completed tasks and monitor your productivity
                    effortlessly.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="bg-orange-100 p-4 rounded-xl">
                  <CalendarClock className="text-orange-600" size={28} />
                </div>

                <div>
                  <h3 className="font-semibold text-xl">
                    Never Miss Deadlines
                  </h3>

                  <p className="text-gray-500 mt-1">
                    Keep track of due dates and estimated completion
                    times with ease.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Bottom Cards */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <h3 className="text-3xl font-bold text-indigo-600 mb-2">
              📋
            </h3>

            <h4 className="text-xl font-semibold">
              Create Tasks
            </h4>

            <p className="text-gray-500 mt-3">
              Add new tasks with priorities, descriptions and due dates.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <h3 className="text-3xl font-bold text-green-600 mb-2">
              ✅
            </h3>

            <h4 className="text-xl font-semibold">
              Complete Tasks
            </h4>

            <p className="text-gray-500 mt-3">
              Keep your work organized by completing tasks as you finish
              them.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <h3 className="text-3xl font-bold text-orange-500 mb-2">
              🚀
            </h3>

            <h4 className="text-xl font-semibold">
              Boost Productivity
            </h4>

            <p className="text-gray-500 mt-3">
              Focus on what matters and improve your daily productivity.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
};

export default Home;