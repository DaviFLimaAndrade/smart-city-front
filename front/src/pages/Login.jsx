import { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const fetchToken = async () => {
        if (username && password) {
            try {
                const response = await axios.post(
                    'http://127.0.0.1:8000/api/token/',
                    {
                        username,
                        password
                    }
                );
                sessionStorage.setItem('token', response.data.access);
                sessionStorage.setItem('token_refresh', response.data.refresh);
                navigate("/");
            } catch (error) {
                setError("Failed to fetch token. Please check your credentials.");
                console.error("Failed to fetch token:", error);
            }
        } else {
            setError("Please enter both username and password");
        }
    };

    return (
        <div className="bg-slate-50 min-h-screen flex items-center justify-center">
            <form onSubmit={(e) => { e.preventDefault(); fetchToken(); }} className="bg-white p-8 rounded-lg shadow-md w-96">
                <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
                {error && <div className="mb-4 text-red-600 text-center">{error}</div>}
                <div className="mb-4">
                    <Input
                        type="text"
                        variant="underlined"
                        label="Username"
                        fullWidth
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-6">
                    <Input
                        type="password"
                        variant="underlined"
                        label="Password"
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <Button type="submit" color="primary" className="w-full">Entrar</Button>
            </form>
        </div>
    );
}
