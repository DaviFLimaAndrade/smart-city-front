import React, { useState, useEffect } from "react";
import Menu from "../components/Menu";
import Painel from "../components/Painel";
import PainelMap from "../components/PainelMap";
import Celular from "../assets/Celular.png";
import { Button } from "@nextui-org/react";
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
        }
    }, []);

    useEffect(() => {
        if (token) {
            getSensores();
        }
    }, [token, escolha]);

    const getSensores = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/sensores/?tipo=${escolha}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setSensores(response.data);
        } catch (error) {
            console.error("Failed to fetch sensores:", error);
        }
    };

    const handleEscolhaChange = (novaEscolha) => {
        setEscolha(novaEscolha);
    };

    const handleSensorChange = async (sensor) => {
        setSensor(sensor);
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/${sensor.tipo.toLowerCase()}/?sensor=${sensor.id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setSensorData(response.data);
        } catch (error) {
            console.error("Failed to fetch sensor data:", error);
        }
    };

    return (
        <>
            
            <section>
                <div className="bg-black-500 flex-wrap items-center h=100%">

                    <Painel sensor={sensor} sensorData={sensorData}/>

                    <PainelMap sensores={sensores} onClickMarker={handleSensorChange} />
                    <div className="text-right mt-auto mb-3 flex justify-around">
                        <p className='text-black text-small'>lat -22.345.23 long -47.234.21</p>
                        <p className="text-black text-small">Senai Roberto Mange  •</p>
                    </div>

                </div>
            </section>
            <Menu onEscolhaChange={handleEscolhaChange} />
            <Footer />
        </>
    );
}
