import { Button } from "@nextui-org/react"
import { Link } from "react-router-dom"
import InputText from "./InputText"
import InputPassword from "./InputPassword"

export default function Forms(props) {

    return (
        <form action="">
            <div className="">
                <h1 className="text-5xl flex justify-center mb-5">{props.title}</h1>
                <p className="text-xl flex justify-center w-3/5 m-auto text-center text-gray-500">{props.subtitle}</p>
            </div>

            <div className="w-2/4 m-auto grid gap-12 py-12">
                <InputText />
                <InputPassword />
                {props.element}
            </div>

            <div className="w-2/4 m-auto py-5">
                <Button type="submit" color="primary" className="w-1/4 m-auto flex justify-center">{props.textButton}</Button>

                <div className="flex justify-center m-auto mt-5">
                    <span className="text-gray-500">{props.span}</span>
                    <Link className="text-sky-500 ml-1">{props.link}</Link>
                </div>
            </div>

        </form>
    )
}