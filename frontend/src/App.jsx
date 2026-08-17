
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/common/Navbar";

import Home from "./pages/Home";
import Tasks from "./pages/Tasks/Tasks";
import CreateTask from "./pages/Tasks/CreateTask";
import EditTask from "./pages/Tasks/EditTask";
import Dashboard from "./pages/Manager/Dashboard";
import AssignedTasks from "./pages/Manager/AssignedTasks";
import ManagerCreateTask from "./pages/Manager/CreateTask";

import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

const ProtectedRoute = ({ children }) => {

    const token = localStorage.getItem("token");

    return token ? children : <Navigate to="/login" replace />;

};

const App = () => {

    const token = localStorage.getItem("token");

    return (

        <BrowserRouter>

            {/* Show Navbar only after login */}
            {token && <Navbar />}

            <Routes>

                {/* Public Routes */}

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/register"
                    element={<Register />}
                />

                {/* Protected Routes */}

                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <Home />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/tasks"
                    element={
                        <ProtectedRoute>
                            <Tasks />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/create-task"
                    element={
                        <ProtectedRoute>
                            <CreateTask />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/edit-task/:id"
                    element={
                        <ProtectedRoute>
                            <EditTask />
                        </ProtectedRoute>
                    }
                />

                {/* Unknown Routes */}

                <Route
                    path="*"
                    element={
                        <Navigate
                            to={token ? "/" : "/login"}
                            replace
                        />
                    }
                />

                <Route
                    path="/manager"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/manager/create-task"
                    element={
                        <ProtectedRoute>
                            <ManagerCreateTask />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/manager/tasks"
                    element={
                        <ProtectedRoute>
                            <AssignedTasks />
                        </ProtectedRoute>
                    }
                />

            </Routes>

        </BrowserRouter>

    );

};

export default App;

