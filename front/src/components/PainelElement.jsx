import { Popover, PopoverTrigger, PopoverContent, Button, Card } from "@nextui-org/react";

export default function PainelElement(props) {
    return (
        <>
            <Popover
                className="w-86 mt=30"
                showArrow
                offset={10}
                placement="bottom"
                motionProps={{
                    variants: {
                        enter: {
                            y: 0,
                            opacity: 1,
                            duration: 0.1,
                            transition: {
                                opacity: {
                                    duration: 0.15,
                                },
                            },
                        },
                        exit: {
                            y: "40%",
                            opacity: 0,
                            duration: 0,
                            transition: {
                                opacity: {
                                    duration: 0.1,
                                },
                            },
                        },
                    },
                }}
            >
                <PopoverTrigger>
                    <Card isPressable className="w-[240px] h-32 my-1 bg-transparent shadow-none border">
                        <h1 className="text-5xl text-black mb-3">{props.measure}</h1>
                        <p className="text-base  text-black">{props.sensorType}</p>
                    </Card>
                </PopoverTrigger>
                <PopoverContent>
                    <div className="px-1 py-2">
                        <div className="font-medium mb-2">{props.title}</div>
                        <div className="text-tiny">{props.subtitle}</div>
                    </div>
                </PopoverContent>
            </Popover>
        </>
    )
}