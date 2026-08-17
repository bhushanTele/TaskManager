import TaskList from "../../components/tasks/TaskList";
import useFetchTasks from "../../Hooks/tasks/useFetchTasks";

import {
  ClipboardList,
  CheckCircle2,
  Clock3,
  LoaderCircle,
} from "lucide-react";

const Tasks = () => {
  const { tasks, loading } = useFetchTasks();

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <LoaderCircle
          className="animate-spin text-indigo-600"
          size={60}
        />

        <h2 className="mt-6 text-2xl font-semibold text-gray-700">
          Loading Tasks...
        </h2>

        <p className="text-gray-500">
          Please wait while we fetch your tasks.
        </p>
      </div>
    );
  }

  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = tasks.length - completedTasks;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-10 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12">

          <div>
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-semibold mb-4">
              <ClipboardList size={18} />
              Task Dashboard
            </div>

            <h1 className="text-5xl font-extrabold text-gray-800">
              All Your Tasks
            </h1>

            <p className="mt-4 text-lg text-gray-600 max-w-2xl">
              Stay organized and keep track of your daily work. Monitor
              completed and pending tasks in one place.
            </p>
          </div>

          <div className="mt-8 lg:mt-0 bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
            <p className="text-gray-500 text-sm">
              Total Tasks
            </p>

            <h2 className="text-4xl font-bold text-indigo-600">
              {tasks.length}
            </h2>
          </div>

        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">

          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 flex items-center gap-5">
            <div className="bg-green-100 p-4 rounded-xl">
              <CheckCircle2
                className="text-green-600"
                size={30}
              />
            </div>

            <div>
              <p className="text-gray-500">
                Completed Tasks
              </p>

              <h2 className="text-3xl font-bold text-green-600">
                {completedTasks}
              </h2>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 flex items-center gap-5">
            <div className="bg-yellow-100 p-4 rounded-xl">
              <Clock3
                className="text-yellow-600"
                size={30}
              />
            </div>

            <div>
              <p className="text-gray-500">
                Pending Tasks
              </p>

              <h2 className="text-3xl font-bold text-yellow-600">
                {pendingTasks}
              </h2>
            </div>
          </div>

        </div>

        {/* Task List */}
        <TaskList tasks={tasks} />

      </div>
    </div>
  );
};

export default Tasks;