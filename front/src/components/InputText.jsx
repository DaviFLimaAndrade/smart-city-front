import { Input } from "@nextui-org/react";

export default function InputText( props ) {

    return (
        <div className="flex flex-col gap-4">
            <Input type={props.type} variant="underlined" label={props.label} placeholder={props.placeholder} />
        </div>
    )
}