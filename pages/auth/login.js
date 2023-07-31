import React from 'react'

import { useState } from "react";
import { Button, TextField } from "@mui/material";

import { useRouter } from 'next/router';


import axios from "axios";


import styles from "./login.module.scss"

export default function login() {
    const router = useRouter();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const validateIp = () => {
        return true;
    }


    const authenticate = () => {
        return true;
    }

    const handleLogin = async () => {
        // Here, you can perform validation, authentication, and error handling logic
        // For this example, let's just focus on displaying error messages.

        // Clear previous errors
        setErrors([]);

        // Add example validation for the fields
        if (!username) {
            setErrors((prevErrors) => [...prevErrors, "Username is required."]);
        }
        if (!password) {
            setErrors((prevErrors) => [...prevErrors, "Password is required."]);
        }
        
        if (!validateIp()) {
            setErrors((prevErrors) => [...prevErrors, "IP Address is incorrect"]);
            
        }
        const response = await axios.post('/api/auth/login', {username: username, password: password});
        console.log(response)
        if (response.status == 200){
            router.push('/dashboard');
        }

    };

    return (
        <div className={styles["login-container"]}>
            <div className={styles.logo}>
                {/* Your logo goes here */}
                {/* <img src="/path/to/logo.png" alt="Logo" /> */}
            </div>
            <div className={styles.form}>
                
                <TextField
                    className={styles["input-field"]}
                    label="Username"
                    variant="outlined"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    className={styles["input-field"]}
                    type="password"
                    label="Password"
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                
                <Button
                    className={styles["login-button"]}
                    variant="contained"
                    color="primary"
                onClick={handleLogin}
                >
                    Login
                </Button>
            </div>
            <div className={styles["error-messages"]}>
                {/* ... error messages code */}
            </div>
        </div>
    );
};

