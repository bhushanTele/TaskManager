import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useCreateTask from "../../Hooks/tasks/useCreateTask";
import useFetchEmployees from "../../Hooks/users/useFetchEmployees";

import EmployeeDropdown from "../../components/Manager/EmployeeDropdown";

const CreateTask = () => {

    const navigate = useNavigate();

    const { createTask, loading } = useCreateTask();

    const {
        employees,
        loading: employeeLoading
    } = useFetchEmployees();

    const [formData, setFormData] = useState({

        title: "",

        description: "",

        priority: "medium",

        dueDate: "",

        estimatedTime: "",

        assignedTo: ""

    });

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        const response = await createTask(formData);

        if (response) {

            navigate("/manager/tasks");

        }

    };

    return (

        <div className="max-w-3xl mx-auto px-6 py-10">

            <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-8">

                <h1 className="text-3xl font-bold text-slate-900 mb-2">
                    Assign Task
                </h1>

                <p className="text-gray-500 mb-8">
                    Create a task and assign it to an employee.
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                >

                    <div>

                        <label className="block mb-2 font-medium">
                            Title
                        </label>

                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />

                    </div>

                    <div>

                        <label className="block mb-2 font-medium">
                            Description
                        </label>

                        <textarea
                            rows="4"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div>

                            <label className="block mb-2 font-medium">
                                Priority
                            </label>

                            <select
                                name="priority"
                                value={formData.priority}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >

                                <option value="low">Low</option>

                                <option value="medium">Medium</option>

                                <option value="high">High</option>

                            </select>

                        </div>

                        <div>

                            <label className="block mb-2 font-medium">
                                Due Date
                            </label>

                            <input
                                type="date"
                                name="dueDate"
                                value={formData.dueDate}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />

                        </div>

                    </div>

                    <div>

                        <label className="block mb-2 font-medium">
                            Estimated Time
                        </label>

                        <input
                            type="text"
                            name="estimatedTime"
                            placeholder="e.g. 4 Hours"
                            value={formData.estimatedTime}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />

                    </div>

                    <EmployeeDropdown
                        employees={employees}
                        loading={employeeLoading}
                        value={formData.assignedTo}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                assignedTo: e.target.value
                            })
                        }
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
                    >
                        {loading
                            ? "Assigning..."
                            : "Assign Task"}
                    </button>

                </form>

            </div>

        </div>

    );

};

export default CreateTask;