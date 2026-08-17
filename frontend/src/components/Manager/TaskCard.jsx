// import React from "react";

// const ManagerTaskCard = ({ task }) => {
//     return (
//         <div className="bg-white rounded-xl shadow-md border p-5 hover:shadow-lg transition">

//             <div className="flex justify-between items-start">

//                 <div>
//                     <h2 className="text-xl font-semibold">
//                         {task.title}
//                     </h2>

//                     <p className="text-gray-600 mt-1">
//                         {task.description || "No description"}
//                     </p>
//                 </div>

//                 <span
//                     className={`px-3 py-1 rounded-full text-sm font-medium ${
//                         task.priority === "high"
//                             ? "bg-red-100 text-red-700"
//                             : task.priority === "medium"
//                             ? "bg-yellow-100 text-yellow-700"
//                             : "bg-green-100 text-green-700"
//                     }`}
//                 >
//                     {task.priority}
//                 </span>

//             </div>

//             <div className="mt-4 space-y-2 text-sm text-gray-700">

//                 <p>
//                     <strong>Status:</strong>{" "}
//                     {task.completed ? "Completed" : "Pending"}
//                 </p>

//                 <p>
//                     <strong>Assigned To:</strong>{" "}
//                     {task.assignedTo?.username || "Unassigned"}
//                 </p>

//                 {task.dueDate && (
//                     <p>
//                         <strong>Due:</strong>{" "}
//                         {new Date(task.dueDate).toLocaleDateString()}
//                     </p>
//                 )}

//                 {task.estimatedTime && (
//                     <p>
//                         <strong>Estimated Time:</strong>{" "}
//                         {task.estimatedTime}
//                     </p>
//                 )}

//             </div>

//             <div className="mt-5 flex gap-3">

//                 <button
//                     className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
//                 >
//                     Edit
//                 </button>

//                 <button
//                     className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
//                 >
//                     Delete
//                 </button>

//             </div>

//         </div>
//     );
// };

// export default ManagerTaskCard;


import React from "react";
import { useNavigate } from "react-router-dom";
import { Pencil, Trash2 } from "lucide-react";

import useDeleteTask from "../../Hooks/tasks/useDeleteTask";

const ManagerTaskCard = ({ task, onDelete }) => {
    const navigate = useNavigate();

    const {
        deleteTask,
        loading,
        error,
    } = useDeleteTask();

    // Edit task
    const handleEdit = () => {
        navigate(`/edit-task/${task._id}`);
    };

const handleDelete = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const confirmDelete = window.confirm(
        "Are you sure you want to delete this task?"
    );

    if (!confirmDelete) return;

    console.log("Deleting:", task._id);

    const result = await deleteTask(task._id);

    console.log("Delete result:", result);

    if (result !== null) {
        onDelete?.(task._id);
    }
};

    return (
        <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6">

            <div className="flex justify-between items-start">

                <div>
                    <h2 className="text-xl font-semibold">
                        {task.title}
                    </h2>

                    <p className="text-gray-600 mt-1">
                        {task.description || "No description"}
                    </p>
                </div>

                <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                        task.priority === "high"
                            ? "bg-red-100 text-red-700"
                            : task.priority === "medium"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-green-100 text-green-700"
                    }`}
                >
                    {task.priority}
                </span>

            </div>

            <div className="mt-4 space-y-2 text-sm text-gray-700">

                <p>
                    <strong>Status:</strong>{" "}
                    {task.completed ? "Completed" : "Pending"}
                </p>

                <p>
                    <strong>Assigned To:</strong>{" "}
                    {task.assignedTo?.username || "Unassigned"}
                </p>

                {task.dueDate && (
                    <p>
                        <strong>Due:</strong>{" "}
                        {new Date(task.dueDate).toLocaleDateString()}
                    </p>
                )}

                {task.estimatedTime && (
                    <p>
                        <strong>Estimated Time:</strong>{" "}
                        {task.estimatedTime}
                    </p>
                )}

            </div>

            {/* Error */}
            {error && (
                <p className="mt-3 text-sm text-red-600">
                    {error}
                </p>
            )}

            {/* Buttons */}
            <div className="mt-5 flex gap-3">

                {/* Edit */}
                <button
                    type="button"
                    onClick={handleEdit}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                    <Pencil size={16} />
                    Edit
                </button>

                {/* Delete */}
                <button
                    type="button"
                    onClick={handleDelete}
                    disabled={loading}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition disabled:opacity-50"
                >
                    <Trash2 size={16} />

                    {loading ? "Deleting..." : "Delete"}
                </button>

            </div>

        </div>
    );
};

export default ManagerTaskCard;