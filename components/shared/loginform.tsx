'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";

export default function Login() {
    const [username, setName] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        toast.loading("Logging in...");

        const res = await fetch("/api/auth", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        toast.dismiss();

        const data = await res.json();

        if (res.ok) {
            toast.success("Login successful!");

            // Сохраняем токен в localStorage
            localStorage.setItem("token", data.token);

            // Перенаправляем пользователя
            router.push("/");
        } else {
            toast.error(data.error || "Login failed.");
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            <Toaster position="top-center" />
            <h1>Login</h1>
            <form
                onSubmit={handleLogin}
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
                    Login
                </button>
            </form>
        </div>
    );
}
