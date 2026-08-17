import { useNavigate } from "react-router-dom";

import useFetchTasks from "../../Hooks/tasks/useFetchTasks";
import useDeleteTask from "../../Hooks/tasks/useDeleteTask";

import ManagerTaskList from "../../components/Manager/TaskList";

const AssignedTasks = () => {

    const navigate = useNavigate();

    const {
        tasks,
        loading,
        error,
        fetchTasks
    } = useFetchTasks();

    const {
        deleteTask
    } = useDeleteTask();

    const handleEdit = (task) => {

        navigate(`/edit-task/${task._id}`);

    };

    const handleDelete = async (taskId) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this task?"
        );

        if (!confirmDelete) return;

        const success = await deleteTask(taskId);

        if (success) {

            fetchTasks();

        }

    };

    if (loading) {

        return (

            <div className="flex justify-center items-center h-96">

                <p className="text-lg text-gray-500">
                    Loading tasks...
                </p>

            </div>

        );

    }

    if (error) {

        return (

            <div className="text-center mt-10">

                <p className="text-red-600 font-medium">
                    {error}
                </p>

            </div>

        );

    }

    return (

        <div className="max-w-7xl mx-auto px-6 py-8">

            <div className="flex justify-between items-center mb-8">

                <div>

                    <h1 className="text-3xl font-bold text-slate-900">
                        Assigned Tasks
                    </h1>

                    <p className="text-gray-500 mt-2">
                        View and manage all assigned tasks.
                    </p>

                </div>

            </div>

            <ManagerTaskList
                tasks={tasks}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />

        </div>

    );

};

export default AssignedTasks;