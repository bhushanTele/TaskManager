// import { Link } from "react-router-dom";
// import {
//   Calendar,
//   Clock3,
//   Pencil,
//   Trash2,
//   CheckCircle2,
//   RotateCcw,
// } from "lucide-react";

// import useDeleteTask from "../../Hooks/tasks/useDeleteTask";
// import useUpdateTask from "../../Hooks/tasks/useUpdateTask";

// const TaskCard = ({ task }) => {
//   const { deleteTask } = useDeleteTask();
//   const { updateTask } = useUpdateTask();

//   const priorityStyles = {
//     high: "bg-red-50 text-red-600 border-red-200",
//     medium: "bg-yellow-50 text-yellow-700 border-yellow-200",
//     low: "bg-green-50 text-green-700 border-green-200",
//   };

// const handleDelete = async (e) => {
//     e.preventDefault();
//     e.stopPropagation();

//     const confirmDelete = window.confirm(
//         "Are you sure you want to delete this task?"
//     );

//     if (!confirmDelete) return;

//     console.log("Deleting:", task._id);

//     const result = await deleteTask(task._id);

//     console.log("Delete result:", result);

//     if (result !== null) {
//         onDelete?.(task._id);
//     }
// };

//   const handleToggleComplete = async () => {
//     await updateTask(task.id, {
//       completed: !task.completed,
//     });

//     window.location.reload();
//   };

//   return (
//     <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full overflow-hidden">

//       {/* Top Accent */}
//       <div
//         className={`h-1 ${
//           task.priority === "high"
//             ? "bg-red-500"
//             : task.priority === "medium"
//             ? "bg-yellow-500"
//             : "bg-green-500"
//         }`}
//       />

//       <div className="p-6 flex flex-col flex-1">

//         {/* Header */}
//         <div className="flex justify-between items-start gap-4">

//           <div>
//             <h2 className="text-2xl font-bold text-slate-900 leading-tight">
//               {task.title}
//             </h2>

//             <p className="mt-3 text-gray-500 leading-7">
//               {task.description || "No description available."}
//             </p>
//           </div>

//           <span
//             className={`px-3 py-1 rounded-full text-xs font-semibold border ${
//               priorityStyles[task.priority]
//             }`}
//           >
//             {task.priority.toUpperCase()}
//           </span>

//         </div>

//         {/* Info Box */}
//         <div className="mt-6 bg-slate-50 rounded-xl p-4 space-y-3">

//           <div className="flex items-center gap-3 text-gray-600">
//             <Calendar size={18} />
//             <span>{task.dueDate || "No Due Date"}</span>
//           </div>

//           <div className="flex items-center gap-3 text-gray-600">
//             <Clock3 size={18} />
//             <span>{task.estimatedTime || "Not specified"}</span>
//           </div>

//           <div>
//             <span
//               className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
//                 task.completed
//                   ? "bg-green-100 text-green-700"
//                   : "bg-orange-100 text-orange-700"
//               }`}
//             >
//               {task.completed ? "Completed" : "Pending"}
//             </span>
//           </div>

//         </div>

//         {/* Footer */}
//         <div className="mt-auto pt-6">

//           <div className="border-t border-gray-200 mb-4"></div>

//           <div className="grid grid-cols-3 gap-2">

//             {/* Edit */}
//             <Link
//               to={`/edit-task/${task.id}`}
//               className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 py-2 text-gray-700 hover:bg-gray-50 transition text-sm font-medium"
//             >
//               <Pencil size={16} />
//               Edit
//             </Link>

//             {/* Done */}
//             <button
//               onClick={handleToggleComplete}
//               className={`flex items-center justify-center gap-2 rounded-lg py-2 text-white transition text-sm font-medium ${
//                 task.completed
//                   ? "bg-amber-500 hover:bg-amber-600"
//                   : "bg-indigo-600 hover:bg-indigo-700"
//               }`}
//             >
//               {task.completed ? (
//                 <>
//                   <RotateCcw size={16} />
//                   Undo
//                 </>
//               ) : (
//                 <>
//                   <CheckCircle2 size={16} />
//                   Done
//                 </>
//               )}
//             </button>

//             {/* Delete */}
//             <button
//               onClick={handleDelete}
//               className="flex items-center justify-center gap-2 rounded-lg border border-red-200 text-red-600 py-2 hover:bg-red-50 transition text-sm font-medium"
//             >
//               <Trash2 size={16} />
//               Delete
//             </button>

//           </div>

//         </div>

//       </div>

//     </div>
//   );
// };

// export default TaskCard;



import { Link } from "react-router-dom";
import {
    Calendar,
    Clock3,
    Pencil,
    Trash2,
    CheckCircle2,
    RotateCcw,
} from "lucide-react";

import useDeleteTask from "../../Hooks/tasks/useDeleteTask";
import useUpdateTask from "../../Hooks/tasks/useUpdateTask";

const TaskCard = ({ task, onDelete, onUpdate }) => {

    const {
        deleteTask,
        loading: deleteLoading,
    } = useDeleteTask();

    const {
        updateTask,
        loading: updateLoading,
    } = useUpdateTask();

    const priorityStyles = {
        high: "bg-red-50 text-red-600 border-red-200",
        medium: "bg-yellow-50 text-yellow-700 border-yellow-200",
        low: "bg-green-50 text-green-700 border-green-200",
    };

    // =========================
    // DELETE TASK
    // =========================
    const handleDelete = async (e) => {

        e.preventDefault();
        e.stopPropagation();

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this task?"
        );

        if (!confirmDelete) return;

        console.log("Deleting task:", task._id);

        const result = await deleteTask(task._id);

        console.log("Delete result:", result);

        if (result) {
            onDelete?.(task._id);
        }
    };

    // =========================
    // TOGGLE COMPLETE
    // =========================
    const handleToggleComplete = async (e) => {

        e.preventDefault();
        e.stopPropagation();

        const updatedTask = await updateTask(task._id, {
            completed: !task.completed,
        });

        if (updatedTask) {
            onUpdate?.(updatedTask);
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden flex flex-col">

            {/* Top Accent */}
            <div
                className={`h-1 ${
                    task.priority === "high"
                        ? "bg-red-500"
                        : task.priority === "medium"
                        ? "bg-yellow-500"
                        : "bg-green-500"
                }`}
            />

            <div className="p-6 flex flex-col flex-1">

                {/* Header */}
                <div className="flex justify-between items-start gap-4">

                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 leading-tight">
                            {task.title}
                        </h2>

                        <p className="mt-3 text-gray-500 leading-7">
                            {task.description || "No description available."}
                        </p>
                    </div>

                    {/* Priority */}
                    <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                            priorityStyles[task.priority]
                        }`}
                    >
                        {task.priority.toUpperCase()}
                    </span>

                </div>

                {/* Info Box */}
                <div className="mt-6 bg-slate-50 rounded-xl p-4 space-y-3">

                    <div className="flex items-center gap-3 text-gray-600">
                        <Calendar size={18} />
                        <span>
                            {task.dueDate || "No Due Date"}
                        </span>
                    </div>

                    <div className="flex items-center gap-3 text-gray-600">
                        <Clock3 size={18} />
                        <span>
                            {task.estimatedTime || "Not specified"}
                        </span>
                    </div>

                    <div>
                        <span
                            className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                                task.completed
                                    ? "bg-green-100 text-green-700"
                                    : "bg-orange-100 text-orange-700"
                            }`}
                        >
                            {task.completed
                                ? "Completed"
                                : "Pending"}
                        </span>
                    </div>

                </div>

                {/* Footer */}
                <div className="mt-auto pt-6">

                    <div className="border-t border-gray-200 mb-4"></div>

                    <div className="grid grid-cols-3 gap-2">

                        {/* EDIT */}
                        <Link
                            to={`/edit-task/${task._id}`}
                            className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 py-2 text-gray-700 hover:bg-gray-50 transition text-sm font-medium"
                        >
                            <Pencil size={16} />
                            Edit
                        </Link>

                        {/* DONE / UNDO */}
                        <button
                            type="button"
                            onClick={handleToggleComplete}
                            disabled={updateLoading}
                            className={`flex items-center justify-center gap-2 rounded-lg py-2 text-white transition text-sm font-medium disabled:opacity-50 ${
                                task.completed
                                    ? "bg-amber-500 hover:bg-amber-600"
                                    : "bg-indigo-600 hover:bg-indigo-700"
                            }`}
                        >

                            {task.completed ? (
                                <>
                                    <RotateCcw size={16} />
                                    {updateLoading ? "Updating..." : "Undo"}
                                </>
                            ) : (
                                <>
                                    <CheckCircle2 size={16} />
                                    {updateLoading ? "Updating..." : "Done"}
                                </>
                            )}

                        </button>

                        {/* DELETE */}
                        <button
                            type="button"
                            onClick={handleDelete}
                            disabled={deleteLoading}
                            className="flex items-center justify-center gap-2 rounded-lg border border-red-200 text-red-600 py-2 hover:bg-red-50 transition text-sm font-medium disabled:opacity-50"
                        >
                            <Trash2 size={16} />

                            {deleteLoading
                                ? "Deleting..."
                                : "Delete"}
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default TaskCard;