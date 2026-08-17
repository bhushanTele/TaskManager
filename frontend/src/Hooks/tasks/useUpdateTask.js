// import { useState } from "react";
// import axios from "axios";

// const API_URL = "http://localhost:5000/api/tasks";

// const useUpdateTask = () => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const updateTask = async (id, taskData) => {
//     try {
//       setLoading(true);
//       setError(null);

//       const response = await axios.put(`${API_URL}/${id}`, taskData);

//       return response.data;
//     } catch (err) {
//       setError(err.response?.data?.message || err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return {
//     updateTask,
//     loading,
//     error,
//   };
// };

// export default useUpdateTask;


import { useState } from "react";
import axios from "../../api/axios";

const useUpdateTask = () => {
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  const updateTask = async (id, taskData) => {
    try {
      setLoading(true);

      setError(null);

      const response = await axios.put(
        `/tasks/${id}`,
        taskData
      );

      return response.data;
    } catch (err) {
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
    updateTask,
    loading,
    error,
  };
};

export default useUpdateTask;