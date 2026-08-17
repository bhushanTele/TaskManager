// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md border-b border-gray-200">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

//         {/* Logo */}
//         <NavLink
//           to="/"
//           className="text-3xl font-extrabold text-indigo-600 tracking-wide"
//         >
//           Task<span className="text-gray-800">Manager</span>
//         </NavLink>

//         {/* Navigation Links */}
//         <div className="flex items-center gap-6 text-lg font-medium">

//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               `transition duration-300 ${
//                 isActive
//                   ? "text-indigo-600 border-b-2 border-indigo-600 pb-1"
//                   : "text-gray-600 hover:text-indigo-600"
//               }`
//             }
//           >
//             Home
//           </NavLink>

//           <NavLink
//             to="/tasks"
//             className={({ isActive }) =>
//               `transition duration-300 ${
//                 isActive
//                   ? "text-indigo-600 border-b-2 border-indigo-600 pb-1"
//                   : "text-gray-600 hover:text-indigo-600"
//               }`
//             }
//           >
//             Tasks
//           </NavLink>

//           <NavLink
//             to="/create-task"
//             className={({ isActive }) =>
//               isActive
//                 ? "bg-indigo-700 text-white px-5 py-2 rounded-lg shadow-md"
//                 : "bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition duration-300 shadow-md hover:shadow-lg"
//             }
//           >
//             + Create Task
//           </NavLink>

//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));

    const isManager = user?.role === "manager";

    const handleLogout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        navigate("/login");

    };

    const linkClass = ({ isActive }) =>
        `transition duration-300 ${
            isActive
                ? "text-indigo-600 border-b-2 border-indigo-600 pb-1"
                : "text-gray-600 hover:text-indigo-600"
        }`;

    return (

        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md border-b border-gray-200">

            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}

                <NavLink
                    to={isManager ? "/manager" : "/"}
                    className="text-3xl font-extrabold text-indigo-600 tracking-wide"
                >
                    Task<span className="text-gray-800">Manager</span>
                </NavLink>

                {/* Navigation */}

                <div className="flex items-center gap-6 text-lg font-medium">

                    {isManager ? (

                        <>
                            <NavLink
                                to="/manager"
                                className={linkClass}
                            >
                                Dashboard
                            </NavLink>

                            <NavLink
                                to="/manager/tasks"
                                className={linkClass}
                            >
                                Assigned Tasks
                            </NavLink>

                            <NavLink
                                to="/manager/create-task"
                                className={({ isActive }) =>
                                    isActive
                                        ? "bg-indigo-700 text-white px-5 py-2 rounded-lg shadow-md"
                                        : "bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition duration-300 shadow-md hover:shadow-lg"
                                }
                            >
                                + Assign Task
                            </NavLink>

                        </>

                    ) : (

                        <>
                            <NavLink
                                to="/"
                                className={linkClass}
                            >
                                Home
                            </NavLink>

                            <NavLink
                                to="/tasks"
                                className={linkClass}
                            >
                                My Tasks
                            </NavLink>

                        </>

                    )}

                </div>

                {/* Right Side */}

                <div className="flex items-center gap-4">

                    <div className="text-right">

                        <p className="text-sm font-semibold text-gray-800">
                            {user?.username}
                        </p>

                        <p className="text-xs text-gray-500 capitalize">
                            {user?.role}
                        </p>

                    </div>

                    <button
                        onClick={handleLogout}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
                    >
                        Logout
                    </button>

                </div>

            </div>

        </nav>

    );

};

export default Navbar;