"use client";
import Image from "next/image";
import { first_container_detail_btn, first_container_detail_heading, first_container_detail_para } from "@/constant/lang_constant";

function FirstContainerDetail() {
    return (
        <div className="w-full flex flex-col md:flex-row gap-2 justify-evenly items-center mt-7">
            <Image src="/first_container_detail_img.svg" width={300} height={300} alt="Detail Image" className="duration-300 hover:duration-300 hover:translate-x-5" />
            <div className="flex flex-col gap-3 md:w-[50%]">
                <h1 className="font-semibold text-[1.5rem] opacity-80 lg:w-[80%] dark:text-white dark:opacity-100">{first_container_detail_heading}</h1>
                <p className="text-justify text-[0.8rem] opacity-70 w-[98%] lg:w-[90%] dark:text-white">{first_container_detail_para}</p>
                <button className="bg-[#4CAF4F] py-2 px-4 rounded-lg duration-300 text-white hover:duration-300 hover:bg-green-600">{first_container_detail_btn}</button>
            </div>
        </div>
    )
}

export default FirstContainerDetail;