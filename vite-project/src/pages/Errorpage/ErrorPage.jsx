import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ErrorPage = () => {
    const navigate = useNavigate();
    const [count, setCount] = useState(3);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount(prevCount => prevCount - 1);
        }, 1000);
        setTimeout(() => {
            navigate("/");
        }, 3000);
        return () => clearInterval(intervalId);
    }, [navigate]);

    return (
        <div>
            <h1>Error 404</h1>
            <p>Page not found</p>
            <p>Volverá al menú principal en {count} segundos ...</p>
        </div>
    );
};

export default ErrorPage;
