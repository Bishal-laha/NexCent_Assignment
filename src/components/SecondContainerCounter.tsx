"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Item {
    id: number
    imgLink: string
    imgAlt: string
    data: number
    text: string
}

interface IItem {
    item: Item,
    isVisible: boolean
}

function SecondContainerCounter({ item, isVisible }: IItem) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isVisible) {
            timer = setInterval(() => {
                setCount((prev) => {
                    if (prev < item.data) {
                        const step = Math.min(5000, item.data - prev);
                        return prev + step;
                    }
                    clearInterval(timer);
                    return prev;
                });
            }, 60);
        } else
            setCount(0);
        return () => {
            clearInterval(timer);
        }
    }, [isVisible]);

    return (
        <div key={item.id} className="flex gap-2 justify-left items-center w-full">
            <Image src={item.imgLink} alt={item.imgAlt} width={30} height={30} />
            <div>
                <h3 className="font-bold opacity-80 duration-300 hover:duration-300 hover:scale-110 cursor-pointer dark:text-white">{count.toLocaleString()}</h3>
                <p className="text-justify text-[0.7rem] opacity-70 w-[98%] lg:w-full dark:text-white">{item.text}</p>
            </div>
        </div>
    )
}

export default SecondContainerCounter;