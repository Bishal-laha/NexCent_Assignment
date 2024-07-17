"use client";
import Image from "next/image";
import { client_data } from "@/constant/data";
import { first_container_client_p, first_container_client_heading } from "@/constant/lang_constant";

function FirstContainerClient() {
    return (
        <div className="text-center dark:text-white">
            <h1 className="font-semibold text-[1.5rem] opacity-80 dark:opacity-100">{first_container_client_heading}</h1>
            <p className="text-[0.7rem] opacity-70">{first_container_client_p}</p>
            <div className="w-full flex flex-wrap justify-evenly items-center gap-5 mt-6 ">
                {client_data.map((item) => <Image key={item.id} src={item.imgLink} width={30} height={30} alt={item.imgAlt} className="dark:bg-white dark:rounded-full dark:p-1 dark:w-[9%] md:dark:w-[20%] lg:dark:w-[5%] duration-300 hover:duration-300 hover:scale-125 cursor-pointer" />)}
            </div>
        </div>
    )
}

export default FirstContainerClient;