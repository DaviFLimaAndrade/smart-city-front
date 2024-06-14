import { Button } from "@nextui-org/react"

export default function Menu({ onEscolhaChange }) {
    return(
        <>
            <div className=" bg-black">
                <div className="w-2/6 m-auto flex justify-between mt-[0px]">
                    <Button className="text-white bg-transparent" onClick={() => onEscolhaChange('Temperatura')}>Temperatura</Button>
                    <Button className="text-white bg-transparent" onClick={() => onEscolhaChange('Umidade')}>Umidade</Button>
                    <Button className="text-white bg-transparent" onClick={() => onEscolhaChange('Luminosidade')}>Luminosidade</Button>
                </div>
            </div>
        </>
    )
}