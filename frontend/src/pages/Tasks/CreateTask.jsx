import TaskForm from "../../components/tasks/TaskForm";
import useCreateTask from "../../Hooks/tasks/useCreateTask";

import {
  ClipboardPlus,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const CreateTask = () => {
  const { createTask } = useCreateTask();

  const handleCreateTask = async (taskData) => {
    await createTask(taskData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-semibold mb-6">
              <Sparkles size={18} />
              Organize Your Work
            </div>

            <h1 className="text-5xl font-extrabold text-gray-800 leading-tight">
              Create a
              <span className="text-indigo-600"> New Task</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              Stay productive by planning your work efficiently. Add
              priorities, due dates, and estimated completion time to
              keep everything organized.
            </p>

            <div className="mt-10 space-y-5">

              <div className="flex items-center gap-4">
                <div className="bg-indigo-100 p-3 rounded-xl">
                  <ClipboardPlus
                    className="text-indigo-600"
                    size={24}
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800">
                    Plan Better
                  </h3>

                  <p className="text-gray-500">
                    Organize your daily tasks with ease.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-xl">
                  <ArrowRight
                    className="text-green-600"
                    size={24}
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800">
                    Track Progress
                  </h3>

                  <p className="text-gray-500">
                    Stay focused and complete tasks on time.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side */}
          <div>
            <TaskForm onSubmit={handleCreateTask} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default CreateTask;