import React from "react";
import { Button } from "@nextui-org/react";

export default function Menu({ onEscolhaChange }) {
    const handleEscolhaChange = (novaEscolha) => {
        console.log("Escolha no Menu:", novaEscolha); // Log para verificar escolha no Menu
        onEscolhaChange(novaEscolha); // Passa a escolha diretamente
    };

    return (
        <>
            <div className="bg-black">
                <div className="w-2/6 m-auto flex justify-between mt-[0px]">
                    <Button className="text-white bg-transparent" onClick={() => handleEscolhaChange('Temperatura')}>Temperatura</Button>
                    <Button className="text-white bg-transparent" onClick={() => handleEscolhaChange('Umidade')}>Umidade</Button>
                    <Button className="text-white bg-transparent" onClick={() => handleEscolhaChange('Luminosidade')}>Luminosidade</Button>
                </div>
            </div>
        </>
    );
}
