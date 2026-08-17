// // import { useState } from "react";
// // import axios from "axios";

// // const API_URL = "http://localhost:5000/api/tasks";

// // const useDeleteTask = () => {
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState(null);

// //   const deleteTask = async (id) => {
// //     try {
// //       setLoading(true);
// //       setError(null);

// //       await axios.delete(`${API_URL}/${id}`);

// //       return true;
// //     } catch (err) {
// //       setError(err.response?.data?.message || err.message);
// //       return false;
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return {
// //     deleteTask,
// //     loading,
// //     error,
// //   };
// // };

// // export default useDeleteTask;


// import { useState } from "react";
// import axios from "../../api/axios";

// const useDeleteTask = () => {
//   const [loading, setLoading] = useState(false);

//   const [error, setError] = useState(null);

//   const deleteTask = async (id) => {
//     try {
//       setLoading(true);

//       setError(null);

//       await axios.delete(`/tasks/${id}`);

//       return true;
//     } catch (err) {
//       setError(
//         err.response?.data?.message ||
//         err.message
//       );

//       return false;
//     } finally {
//       setLoading(false);
//     }
//   };

//   return {
//     deleteTask,
//     loading,
//     error,
//   };
// };

// export default useDeleteTask;



import { useState } from "react";
import axios from "../../api/axios";

const useDeleteTask = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const deleteTask = async (id) => {
        try {
            setLoading(true);
            setError(null);

            console.log("Deleting task:", id);

            const response = await axios.delete(`/tasks/${id}`);

            console.log("Delete response:", response.data);

            return response.data;

        } catch (err) {
            console.error("Delete task error:", err);
            console.error("Backend response:", err.response?.data);

            setError(
                err.response?.data?.message ||
                err.message
            );

            return null;

        } finally {
            setLoading(false);
        }
    };

    return {
        deleteTask,
        loading,
        error,
    };
};

export default useDeleteTask;