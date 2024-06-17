import { Button, Input } from "@nextui-org/react"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

export default function Signup() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState(null)

    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            sessionStorage.setItem('token', token)
        }
    }, [token]);

    const createUser = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/create_user/', {
                username,
                email,
                password
            });
    
            const resp = await axios.post('http://127.0.0.1:8000/api/token/', {
                username,
                password
            });
            setToken(resp.data.access);
            navigate("/");
        } catch (error) {
            console.error("Failed to create user:", error);
        }
    };
    


    return (
        <div className="min-h-screen">

            <div className="flex items-center justify-center h-screen">

                <form action="">
                    <div className="">
                        <h1 className="text-5xl flex justify-center mb-5">Cadastro de usuario</h1>
                    </div>

                    <div className="w-2/4 m-auto grid gap-12 py-12">
                        <Input type="text" variant="underlined" label="Nome Completo" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <Input type="email" variant="underlined" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Input type="password" variant="underlined" label="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <div className="w-2/4 m-auto py-5">
                        <Button type="button" color="primary" className="w-1/4 m-auto flex justify-center" onClick={() => createUser()}>Cadastrar</Button>

                        <div className="flex justify-center m-auto mt-5">
                        </div>
                    </div>

                </form>

            </div>

            <div>

            </div>

        </div>
    )
}