import { Button } from "@nextui-org/react"

export default function Menu({ onEscolhaChange }) {
    return(
        <>
            <div className="mt-16 p-2 bg-blue-500">
                <div className="w-2/6 m-auto flex justify-between">
                    <Button className="text-white bg-transparent" onClick={() => onEscolhaChange('Temperatura')}>Temperatura</Button>
                    <Button className="text-white bg-transparent" onClick={() => onEscolhaChange('Umidade')}>Umidade</Button>
                    <Button className="text-white bg-transparent" onClick={() => onEscolhaChange('Luminosidade')}>Luminosidade</Button>
                </div>
            </div>
        </>
    )
}