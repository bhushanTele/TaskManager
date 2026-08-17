import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  ArrowLeft,
  LoaderCircle,
  ClipboardPen,
} from "lucide-react";

import TaskForm from "../../components/tasks/TaskForm";
import useFetchTasks from "../../Hooks/tasks/useFetchTasks";
import useUpdateTask from "../../Hooks/tasks/useUpdateTask";

const EditTask = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const { tasks, loading } = useFetchTasks();

  const { updateTask } = useUpdateTask();

  const [task, setTask] = useState(null);

  useEffect(() => {
    if (!loading) {
    const foundTask = tasks.find(
  (t) => t.id === id
);

      setTask(foundTask);
    }
  }, [loading, tasks, id]);

  const handleUpdate = async (taskData) => {
    await updateTask(id, taskData);

    navigate("/tasks");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <LoaderCircle
          className="animate-spin text-indigo-600"
          size={55}
        />
      </div>
    );
  }

  if (!task) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white rounded-2xl shadow-lg p-10 text-center">
          <h2 className="text-3xl font-bold text-red-500">
            Task Not Found
          </h2>

          <button
            onClick={() => navigate("/tasks")}
            className="mt-6 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white transition"
          >
            Back to Tasks
          </button>
        </div>
      </div>
    );
  }

return (
  <div className="min-h-screen bg-slate-50 relative overflow-hidden">

    {/* Background Blobs */}
    <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl -translate-x-40 -translate-y-40"></div>

    <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-violet-200/40 rounded-full blur-3xl translate-x-32 translate-y-32"></div>

    <div className="relative max-w-7xl mx-auto px-6 py-14">

      {/* Back */}
      <button
        onClick={() => navigate("/tasks")}
        className="inline-flex items-center gap-2 text-gray-500 hover:text-indigo-600 transition font-medium"
      >
        <ArrowLeft size={18} />
        Back to Tasks
      </button>

      <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-20 items-center mt-10">

        {/* Left Content */}

        <div>

          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-indigo-100 text-indigo-700 font-semibold">

            <ClipboardPen size={20} />

            Edit Existing Task

          </div>

          <h1 className="mt-8 text-6xl font-black leading-tight text-gray-900">

            Keep your
            <br />

            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-blue-600 bg-clip-text text-transparent">
              productivity
            </span>

            <br />

            up to date.

          </h1>

          <p className="mt-8 text-xl leading-9 text-gray-500 max-w-xl">

            Update your task details, adjust priorities, modify deadlines,
            or revise estimated time without losing your progress.

          </p>

          <div className="flex gap-10 mt-14">

            <div>

              <h2 className="text-3xl font-bold text-indigo-600">
                100%
              </h2>

              <p className="text-gray-500 mt-1">
                Easy Editing
              </p>

            </div>

            <div>

              <h2 className="text-3xl font-bold text-indigo-600">
                Fast
              </h2>

              <p className="text-gray-500 mt-1">
                Instant Update
              </p>

            </div>

            <div>

              <h2 className="text-3xl font-bold text-indigo-600">
                Secure
              </h2>

              <p className="text-gray-500 mt-1">
                Local Storage
              </p>

            </div>

          </div>

        </div>

        {/* Right Form */}

        <div className="relative">

          {/* Floating Card */}

          <div className="absolute -top-6 -right-6 w-full h-full rounded-[40px] bg-gradient-to-br from-indigo-500 to-violet-500 opacity-15 blur-2xl"></div>

          <div className="relative bg-white/80 backdrop-blur-xl rounded-[36px] shadow-2xl p-8">

            <TaskForm
              initialValues={task}
              onSubmit={handleUpdate}
              submitText="Update Task"
            />

          </div>

        </div>

      </div>

    </div>

  </div>
);
};

export default EditTask;