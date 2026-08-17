// import { useEffect, useState } from "react";
// import axios from "axios";

// const API_URL = "http://localhost:5000/api/tasks";

// const useFetchTasks = () => {
//     const [tasks, setTasks] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     const fetchTasks = async () => {
//         try {
//             setLoading(true);
//             setError(null);

//             const response = await axios.get(API_URL);

//             setTasks(response.data);
//         } catch (err) {
//             setError(err.response?.data?.message || err.message);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchTasks();
//     }, []);

//     return {
//         tasks,
//         setTasks,
//         loading,
//         error,
//         fetchTasks,
//     };
// };

// export default useFetchTasks;



import { useEffect, useState } from "react";
import axios from "../../api/axios";

const useFetchTasks = () => {

    const [tasks, setTasks] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    const fetchTasks = async () => {

        try {

            setLoading(true);

            setError(null);

            const response = await axios.get("/tasks");

            setTasks(response.data);

        } catch (err) {

            setError(
                err.response?.data?.message ||
                err.message
            );

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        fetchTasks();

    }, []);

    return {

        tasks,

        setTasks,

        loading,

        error,

        fetchTasks,

    };

};

export default useFetchTasks;