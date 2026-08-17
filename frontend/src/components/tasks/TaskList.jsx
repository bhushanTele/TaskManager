import TaskCard from "./TaskCard";

const TaskList = ({ tasks }) => {
  if (!tasks || tasks.length === 0) {
    return (
      <div className="max-w-5xl mx-auto mt-16">
        <div className="bg-white rounded-2xl shadow-lg p-12 text-center border border-gray-200">
          <div className="text-6xl mb-4">📋</div>

          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            No Tasks Found
          </h2>

          <p className="text-gray-500">
            Start by creating your first task.
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-800">
            My Tasks
          </h1>

          <p className="text-gray-500 mt-2">
            Manage your daily work efficiently.
          </p>
        </div>

        <div className="mt-4 md:mt-0">
          <span className="bg-indigo-100 text-indigo-700 px-5 py-2 rounded-full font-semibold">
            {tasks.length} {tasks.length === 1 ? "Task" : "Tasks"}
          </span>
        </div>
      </div>

      {/* Task Grid */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {tasks.map((task) => (
          <TaskCard
            key={task._id || task.id}
            task={task}
          />
        ))}
      </div>
    </section>
  );
};

export default TaskList;