"use client";
import { useEffect, useState, useRef } from "react";
import { second_container_numeric_heading_1, second_container_numeric_heading_2, second_container_numeric_text } from "@/constant/lang_constant";
import { numeric_detail_data } from "@/constant/data";
import SecondContainerCounter from "./SecondContainerCounter";

function SecondContainerNumericDetail() {
    const [isVisible, setIsVisible] = useState(false);
    const componentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            console.log(entry.isIntersecting);
            setIsVisible(entry.isIntersecting);
        }, { threshold: 0.5 });

        if (componentRef.current)
            observer.observe(componentRef.current);

        return () => {
            if (componentRef.current)
                observer.observe(componentRef.current);
        }
    }, []);

    return (
        <div ref={componentRef} className="bg-[#F5F7FA] dark:bg-[#141c29] p-3 md:p-8 flex flex-col md:flex-row justify-center items-center">
            <div className="w-full text-center md:text-left md:w-[60%] lg:w-[40%]">
                <h1 className="font-semibold text-[1.5rem] opacity-80 lg:w-[80%] dark:text-white dark:opacity-100">{second_container_numeric_heading_1}</h1>
                <h1 className="font-semibold text-[1.5rem] opacity-80 lg:w-[80%] text-[#4CAF4F] dark:opacity-100">{second_container_numeric_heading_2}</h1>
                <p className="text-justify text-[0.8rem] opacity-70 w-[98%] lg:w-[90%] dark:text-white">{second_container_numeric_text}</p>
            </div>
            <div className="grid grid-cols-2 gap-4 w-[80%] my-5 md:w-[60%] lg:w-[40%]">
                {numeric_detail_data.map((item) => (
                    <SecondContainerCounter key={item.id} item={item} isVisible={isVisible} />
                ))}
            </div>
        </div>
    )
}

export default SecondContainerNumericDetail;