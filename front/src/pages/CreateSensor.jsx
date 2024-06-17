import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CreateSensor = () => {
    const [nome, setNome] = useState('');
    const [tipo, setTipo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [localizacao, setLocalizacao] = useState('');
    const [responsavel, setResponsavel] = useState('');
    const [token, setToken] = useState('');

    useEffect(() => {
        const tokenStoraged = sessionStorage.getItem('token');
        if (tokenStoraged) {
            setToken(tokenStoraged);
            console.log("Token stored:", tokenStoraged);
        } else {
            console.log("No token found in session storage.");
        }
    }, []);

    const handleCreateSensor = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/sensores/', {
                nome,
                tipo,
                descricao,
                latitude,
                longitude,
                localizacao,
                responsavel,
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }
            });

            if (response.status === 201) {
                alert('Sensor criado com sucesso!');
                // Limpar os campos do formulário
                setNome('');
                setTipo('');
                setDescricao('');
                setLatitude('');
                setLongitude('');
                setLocalizacao('');
                setResponsavel('');
            } else {
                alert('Falha ao criar o sensor');
            }
        } catch (error) {
            console.error('Erro ao criar o sensor:', error);
            alert('Falha ao criar o sensor');
        }
    };

    return (
        <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Criar Sensor</h2>
            <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Nome do Sensor</label>
                <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-md"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Nome do Sensor"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Tipo do Sensor</label>
                <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-md"
                    value={tipo}
                    onChange={(e) => setTipo(e.target.value)}
                    placeholder="Tipo do Sensor"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Descrição</label>
                <textarea
                    className="w-full px-4 py-2 border rounded-md"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    placeholder="Descrição"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Latitude</label>
                <input
                    type="number"
                    className="w-full px-4 py-2 border rounded-md"
                    value={latitude}
                    onChange={(e) => setLatitude(e.target.value)}
                    placeholder="Latitude"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Longitude</label>
                <input
                    type="number"
                    className="w-full px-4 py-2 border rounded-md"
                    value={longitude}
                    onChange={(e) => setLongitude(e.target.value)}
                    placeholder="Longitude"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Localização</label>
                <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-md"
                    value={localizacao}
                    onChange={(e) => setLocalizacao(e.target.value)}
                    placeholder="Localização"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Responsável</label>
                <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-md"
                    value={responsavel}
                    onChange={(e) => setResponsavel(e.target.value)}
                    placeholder="Responsável"
                />
            </div>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                onClick={handleCreateSensor}
            >
                Criar Sensor
            </button>
        </div>
    );
};

export default CreateSensor;
