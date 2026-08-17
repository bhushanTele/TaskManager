import { Link } from "react-router-dom";

import {
    ClipboardList,
    CheckCircle,
    Clock,
    Plus
} from "lucide-react";

import useFetchTasks from "../../Hooks/tasks/useFetchTasks";

import ManagerTaskList from "../../components/Manager/TaskList";

const Dashboard = () => {

    const {
        tasks,
        loading,
        error
    } = useFetchTasks();

    const totalTasks = tasks.length;

    const completedTasks = tasks.filter(
        task => task.completed
    ).length;

    const pendingTasks = tasks.filter(
        task => !task.completed
    ).length;

    const recentTasks = tasks.slice(0, 3);

    if (loading) {

        return (

            <div className="flex justify-center items-center h-screen">

                <h2 className="text-xl font-semibold">
                    Loading Dashboard...
                </h2>

            </div>

        );

    }

    if (error) {

        return (

            <div className="text-center mt-10 text-red-600">

                {error}

            </div>

        );

    }

    return (

        <div className="max-w-7xl mx-auto px-6 py-10">

            <div className="flex justify-between items-center mb-10">

                <div>

                    <h1 className="text-4xl font-bold text-slate-900">
                        Manager Dashboard
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Manage employees and assigned tasks.
                    </p>

                </div>

                <Link
                    to="/manager/create-task"
                    className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded-lg hover:bg-indigo-700 transition"
                >
                    <Plus size={20} />
                    Assign Task
                </Link>

            </div>

            {/* Statistics */}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

                <div className="bg-white rounded-xl shadow border p-6">

                    <div className="flex items-center gap-4">

                        <ClipboardList className="text-indigo-600" />

                        <div>

                            <p className="text-gray-500">
                                Total Tasks
                            </p>

                            <h2 className="text-3xl font-bold">
                                {totalTasks}
                            </h2>

                        </div>

                    </div>

                </div>

                <div className="bg-white rounded-xl shadow border p-6">

                    <div className="flex items-center gap-4">

                        <Clock className="text-yellow-500" />

                        <div>

                            <p className="text-gray-500">
                                Pending Tasks
                            </p>

                            <h2 className="text-3xl font-bold">
                                {pendingTasks}
                            </h2>

                        </div>

                    </div>

                </div>

                <div className="bg-white rounded-xl shadow border p-6">

                    <div className="flex items-center gap-4">

                        <CheckCircle className="text-green-600" />

                        <div>

                            <p className="text-gray-500">
                                Completed Tasks
                            </p>

                            <h2 className="text-3xl font-bold">
                                {completedTasks}
                            </h2>

                        </div>

                    </div>

                </div>

            </div>

            {/* Recent Tasks */}

            <div>

                <div className="flex justify-between items-center mb-6">

                    <h2 className="text-2xl font-bold">
                        Recently Assigned Tasks
                    </h2>

                    <Link
                        to="/manager/tasks"
                        className="text-indigo-600 hover:underline"
                    >
                        View All
                    </Link>

                </div>

                <ManagerTaskList
                    tasks={recentTasks}
                    onEdit={() => {}}
                    onDelete={() => {}}
                />

            </div>

        </div>

    );

};

export default Dashboard;