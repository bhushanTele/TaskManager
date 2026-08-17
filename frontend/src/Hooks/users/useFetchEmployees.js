import { useEffect, useState } from "react";
import axios from "../../api/axios";

const useFetchEmployees = () => {

    const [employees, setEmployees] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    const fetchEmployees = async () => {

        try {

            setLoading(true);

            setError(null);

            const response = await axios.get("/users/employees");

            setEmployees(response.data);

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

        fetchEmployees();

    }, []);

    return {

        employees,

        loading,

        error,

        fetchEmployees,

    };

};

export default useFetchEmployees;