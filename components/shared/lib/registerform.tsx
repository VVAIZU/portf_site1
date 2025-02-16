'use client';

import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

export default function Register() {
    const [username, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        toast.loading("Registering...");

        const res = await fetch("/api/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        toast.dismiss();

        const data = await res.json();

        if (res.ok) {
            toast.success(`Registration successful! Welcome, ${data.users.username}.`);
            setName("");
            setPassword("");
        } else {
            toast.error(data.error || "An error occurred during registration.");
        }
    };

    return (
        <div className="mt-40">
            <Toaster position="top-center" />
            <h1>Register</h1>
            <form
                onSubmit={handleRegister}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    maxWidth: "300px",
                }}
            >
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={username}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" style={{ padding: "10px", cursor: "pointer" }}>
                    Register
                </button>
            </form>
        </div>
    );
}
