import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/api/auth/login";

const useLogin = () => {

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState(null);

    const login = async (userData) => {

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

            console.log(response.data);

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
        login,
        loading,
        error
    };

};

export default useLogin;