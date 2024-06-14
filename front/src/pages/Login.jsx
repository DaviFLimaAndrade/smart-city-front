import Map from "../assets/Map.png"
import InputPassword from "../components/InputPassword"
import { Button } from "@nextui-org/react"
import { Link } from "react-router-dom"
import { Input } from "@nextui-org/react"
import Menu from "../components/Menu"
import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Login() {
    const navigate = useNavigate();

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const fetchToken = async () => {
        if (username && password) {
            try {
                const response = await axios.post(
                    'http://127.0.0.1:8000/api/token/',
                    {
                        username,
                        password
                    }
                )
                sessionStorage.setItem('token', response.data.access)
                sessionStorage.setItem('token_refresh', response.data.refresh)
                navigate("/home")
            } catch (error) {
                console.error("Failed to fetch token:", error)
            }
        } else {
            alert("Please enter both username and password")
        }
    }

    return (
        <div className="bg-slate-50 grid grid-cols-2 min-h-screen">
            <div>
                <img src={Map} alt="Map"
                    className="
                    rotate-12
                    fixed
                    xl:mt-40
                    mr-96"
                />
            </div>

            <div className="flex items-center justify-center h-screen">
                <form onSubmit={(e) => { e.preventDefault(); fetchToken(); }}>
                    <div className="">
                        <h1 className="text-5xl flex justify-center mb-5">Bem-vindo de volta!</h1>
                        <p className="text-xl flex justify-center w-3/5 m-auto text-center text-gray-500">Estamos felizes em vê-lo de volta. Por favor, entre com sua conta para continuar aproveitando nossos serviços.</p>
                    </div>

                    <div className="w-2/4 m-auto grid gap-12 py-12">
                        <Input type="text" variant="underlined" label="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <Input type="password" variant="underlined" label="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        {/* <InputPassword label="Senha" value={password} onChange={(e) => setPassword(e.target.value)} /> */}
                    </div>

                    <div className="w-2/4 m-auto py-5">
                        <Button type="submit" color="primary" className="w-1/4 m-auto flex justify-center">Entrar</Button>

                        <div className="flex justify-center m-auto mt-5">
                            <span className="text-gray-500">Não possui cadastro?</span>
                            <Link to="/signup" className="text-sky-500 ml-1">Clique aqui</Link>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}
