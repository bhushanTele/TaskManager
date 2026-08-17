import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/api/auth/register";

const useRegister = () => {

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState(null);

    const register = async (userData) => {

        try {

            setLoading(true);

            setError(null);

            const response = await axios.post(
                API_URL,
                userData
            );

            // Save JWT Token
            localStorage.setItem(
                "token",
                response.data.token
            );

            // Save User Details
            localStorage.setItem(
                "user",
                JSON.stringify(response.data.user)
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
        register,
        loading,
        error
    };

};

export default useRegister;