"use client";
import Image from "next/image";
import { second_container_product_heading, second_container_product_logo_text, second_container_product_sub_text, second_container_product_text } from "@/constant/lang_constant";
import { product_logo_detail_data } from "@/constant/data";

function SecondContainerProduct() {
    return (
        <div className="bg-[#F5F7FA] dark:bg-[#141c29] p-3 md:p-6 flex flex-col md:flex-row justify-evenly items-center mt-8">
            <Image src="/second_container_product_img.svg" alt="Product Image" width={270} height={270} className="duration-300 hover:duration-300 hover:scale-105 cursor-pointer" />
            <div className="w-[90%] mt-2 md:mt-0 md:w-[45%] lg:w-[50%] dark:text-white">
                <p className="text-[0.8rem] opacity-75 text-justify">{second_container_product_text}</p>
                <h2 className="text-[#4CAF4F] font-bold mt-3">{second_container_product_heading}</h2>
                <p className="text-[0.7rem] opacity-60 mt-2">{second_container_product_sub_text}</p>
                <div className="flex flex-wrap gap-5 justify-start items-center text-[#4CAF4F] mt-6 cursor-pointer">
                    {product_logo_detail_data.map((item) => <Image key={item.id} src={item.imgLink} alt={item.imgAlt} width={30} height={30} className="dark:bg-white dark:rounded-full dark:p-1 dark:w-[15%]  lg:dark:w-[7%] duration-300 hover:duration-300 hover:scale-125" />)}
                    <div className="font-semibold hover:duration-300 hover:opacity-60 duration-300 cursor-pointer text-[0.9rem]">
                        {second_container_product_logo_text}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondContainerProduct;