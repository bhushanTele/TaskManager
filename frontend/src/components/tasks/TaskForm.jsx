import { useEffect, useState } from "react";
import { ClipboardPlus, Save } from "lucide-react";

const TaskForm = ({
  onSubmit,
  initialValues = null,
}) => {
  const defaultTask = {
    title: "",
    description: "",
    priority: "medium",
    dueDate: "",
    estimatedTime: "",
  };

  const [task, setTask] = useState(defaultTask);

  useEffect(() => {
    if (initialValues) {
      setTask({
        ...defaultTask,
        ...initialValues,
      });
    } else {
      setTask(defaultTask);
    }
  }, [initialValues]);

  const handleChange = (e) => {
    setTask((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(task);

    // Clear form only when creating a task
    if (!initialValues) {
      setTask(defaultTask);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl p-8 border border-gray-200"
      >
        {/* Heading */}
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-indigo-100 p-3 rounded-xl">
            <ClipboardPlus className="text-indigo-600" size={28} />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              {initialValues ? "Edit Task" : "Create New Task"}
            </h2>

            <p className="text-gray-500">
              {initialValues
                ? "Update your task details."
                : "Fill in the details below to create a task."}
            </p>
          </div>
        </div>

        {/* Title */}
        <div className="mb-5">
          <label className="block text-gray-700 font-semibold mb-2">
            Task Title
          </label>

          <input
            type="text"
            name="title"
            placeholder="Enter task title"
            value={task.title}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
          />
        </div>

        {/* Description */}
        <div className="mb-5">
          <label className="block text-gray-700 font-semibold mb-2">
            Description
          </label>

          <textarea
            rows="4"
            name="description"
            placeholder="Describe the task..."
            value={task.description}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 resize-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
          />
        </div>

        {/* Priority & Due Date */}
        <div className="grid md:grid-cols-2 gap-5 mb-5">

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Priority
            </label>

            <select
              name="priority"
              value={task.priority}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
            >
              <option value="low">🟢 Low</option>
              <option value="medium">🟡 Medium</option>
              <option value="high">🔴 High</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Due Date
            </label>

            <input
              type="date"
              name="dueDate"
              value={task.dueDate || ""}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
            />
          </div>

        </div>

        {/* Estimated Time */}
        <div className="mb-8">
          <label className="block text-gray-700 font-semibold mb-2">
            Estimated Time
          </label>

          <input
            type="text"
            name="estimatedTime"
            placeholder="Example: 3 hours"
            value={task.estimatedTime}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4">

          <button
            type="submit"
            className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition"
          >
            {initialValues ? (
              <>
                <Save size={20} />
                Update Task
              </>
            ) : (
              <>
                <ClipboardPlus size={20} />
                Create Task
              </>
            )}
          </button>

        </div>
      </form>
    </div>
  );
};

export default TaskForm;