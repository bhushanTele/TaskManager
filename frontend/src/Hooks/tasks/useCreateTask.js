



import { useState } from "react";
import axios from "../../api/axios";

const useCreateTask = () => {
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  const createTask = async (taskData) => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.post(
        "/tasks",
        taskData
      );

      return response.data;
    } catch (err) {
      setError(
        err.response?.data?.message ||
        err.message
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    createTask,
    loading,
    error,
  };
};

export default useCreateTask;