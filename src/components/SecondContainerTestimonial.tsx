"use client";
import Image from "next/image";
import { second_container_testimonial_heading, second_container_testimonial_text } from "@/constant/lang_constant";
import { testimonial_image_detail_data } from "@/constant/data";

function SecondContainerTestimonial() {
    return (
        <div className="p-3 md:p-6 text-center mt-6 mb-3 lg:mt-0 dark:text-white">
            <h1 className="font-semibold text-[1.5rem] opacity-80 dark:opacity-100">{second_container_testimonial_heading}</h1>
            <p className="text-[0.7rem] opacity-70 w-[80%] lg:w-[40%] mx-auto mt-3">{second_container_testimonial_text}</p>
            <div className="flex flex-col md:flex-row justify-evenly items-center mt-8 gap-5 lg:gap-0 flex-wrap cursor-pointer">
                {testimonial_image_detail_data.map((item) => <Image key={item.id} src={item.imgLink} alt={item.imgAlt} width={220} height={220} className="duration-300 hover:duration-300 hover:scale-110" />)}
            </div>
        </div>
    )
}

export default SecondContainerTestimonial;