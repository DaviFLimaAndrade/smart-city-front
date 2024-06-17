import React, { useState, useEffect } from "react";
import Menu from "../components/Menu";
import Painel from "../components/Painel";
import PainelMap from "../components/PainelMap";
import Footer from "../components/Footer";
import axios from "axios";

export default function Home() {
    const [token, setToken] = useState('');
    const [sensores, setSensores] = useState([]);
    const [escolha, setEscolha] = useState('');
    const [sensor, setSensor] = useState('');
    const [sensorData, setSensorData] = useState('');

    useEffect(() => {
        const tokenStoraged = sessionStorage.getItem('token');
        if (tokenStoraged) {
            setToken(tokenStoraged);
            console.log("Token stored:", tokenStoraged);
        } else {
            console.log("No token found in session storage.");
        }
    }, []);

    useEffect(() => {
        console.log("Token or escolha changed:", { token, escolha });
        if (token && escolha) {
            console.log("Fetching sensores...");
            getSensores();
        }
    }, [token, escolha]);

    const getSensores = async () => {
        console.log("Entering getSensores function.");
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/sensores/?tipo=${escolha}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log("Response from getSensores:", response.data);
            setSensores(response.data);
        } catch (error) {
            console.error("Failed to fetch sensores:", error);
        }
        console.log("Exiting getSensores function.");
    };

    const handleEscolhaChange = (novaEscolha) => {
        console.log("Escolha changed in Home:", novaEscolha); // Log para verificar escolha no Home
        setEscolha(novaEscolha);
    };

    const handleSensorChange = async (sensor) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/temperatura_filter/', {
                sensor_id: sensor.id,
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log(response.data); // Verifique a resposta no console
            setSensorData(response.data);
        } catch (error) {
            console.error("Failed to fetch sensor data:", error);
        }
    };

    return (
        <>
            <div>
                <section className="h-[785px]">
                    <div className="bg-black-500 flex-wrap items-center">
                        <div className="text-right flex justify-center mt-[90px] gap-[20px] mb-[15px]">
                            <p className='text-black text-small'>lat -22.345.23 long -47.234.21</p>
                            <p className="text-black text-small">Senai Roberto Mange </p>
                        </div>
                        <PainelMap sensores={sensores} onClickMarker={handleSensorChange} />
                    </div>
                    <Painel sensor={sensor} sensorData={sensorData} />
                </section>
                <Menu onEscolhaChange={handleEscolhaChange} />
                <Footer />
            </div>
        </>
    );
}
