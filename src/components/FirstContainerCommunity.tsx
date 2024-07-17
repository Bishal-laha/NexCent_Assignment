"use client";
import Image from "next/image";
import { community_data } from "@/constant/data";
import { first_container_community_heading, first_container_community_p } from "@/constant/lang_constant";

function FirstContainerCommunity() {
    return (
        <div className="text-center mt-[15%] md:mt-[10%] lg:mt-[5%]">
            <h1 className="font-semibold text-[1.5rem] lg:w-[36%] mx-auto opacity-80 dark:text-white dark:opacity-100">{first_container_community_heading}</h1>
            <p className="text-[0.9rem] lg:text-[0.7rem] opacity-70 mt-2 dark:text-white">{first_container_community_p}</p>
            <div className="flex flex-col md:flex-row justify-evenly items-center flex-1 w-full mt-7 gap-8 md:gap-0">
                {community_data.map((item) => (
                    <div key={item.id} className="flex flex-col justify-center items-center gap-1">
                        <Image src={item.imgLink} width={40} height={40} alt={item.imgAlt} className="dark:bg-white dark:rounded-full dark:p-1 dark:w-[13%]" />
                        <h2 className="font-bold text-[1rem] opacity-80 md:w-[50%] lg:w-[30%] dark:text-white dark:opacity-100">{item.heading}</h2>
                        <p className=" text-[0.7rem] md:w-[70%] lg:w-[50%] dark:text-white">{item.text}</p>
                    </div>))}
            </div>
        </div>
    )
}

export default FirstContainerCommunity;