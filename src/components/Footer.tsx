"use client";
import Image from "next/image";
import { footer_btn_1, footer_heading, header_logo_name, footer_div_1_heading, footer_div_2_heading, footer_div_3_heading, footer_sub_text_1, footer_sub_text_2 } from "@/constant/lang_constant";
import { footer_sub_1_text_data, footer_sub_2_text_data, footer_logo_data } from "@/constant/data";
import { IoIosSend } from "react-icons/io";

function Footer() {
    return (
        <div className="w-full bg-white dark:bg-black mt-8">
            <div className="flex flex-col justify-center items-center gap-6">
                <h1 className="font-bold text-[1.5rem] md:text-[2rem] opacity-80 dark:opacity-100 text-center w-[80%] lg:w-[40%] dark:text-white">{footer_heading}</h1>
                <button className="bg-[#4CAF4F] py-2 px-4 rounded-lg duration-300 text-white hover:duration-300 hover:bg-green-600">{footer_btn_1}</button>
                <div className=" bg-[#263238] dark:bg-[#1a1a1a]  text-white p-3 md:p-6 rounded-lg w-full list-none">
                    <div className="lg:w-[80%] flex flex-col items-center md:items-start md:grid md:grid-cols-5 gap-4 mx-auto text-center md:text-left">
                        <div className="flex justify-center items-center md:items-start gap-5 flex-col col-span-2 w-full">
                            <div className="flex justify-center items-center gap-2">
                                <Image src="/logo_nav.svg" width={30} height={30} alt="Nav Logo" />
                                <h1 className="font-bold text-[1.5rem] dark:text-white">{header_logo_name}</h1>
                            </div>
                            <p className="text-[0.8rem] opacity-75">{footer_sub_text_1}</p>
                            <p className="text-[0.8rem] opacity-75">{footer_sub_text_2}</p>
                            <div className="flex flex-wrap justify-center items-center gap-4">
                                {footer_logo_data.map((item, id) => <Image key={id} src={item.imgLink} alt={item.imgAlt} width={30} height={30} className="duration-300 hover:duration-300 hover:scale-125 cursor-pointer" />)}
                            </div>
                        </div>
                        <div>
                            <h2 className="font-bold">{footer_div_1_heading}</h2>
                            {footer_sub_1_text_data.map((item, id) => <li key={id} className="text-[0.8rem] opacity-75 mt-2 duration-300 hover:duration-300 hover:opacity-100 cursor-pointer">{item}</li>)}
                        </div>
                        <div>
                            <h2 className="font-bold">{footer_div_2_heading}</h2>
                            {footer_sub_2_text_data.map((item, id) => <li key={id} className="text-[0.8rem] opacity-75 mt-2 duration-300 hover:duration-300 hover:opacity-100 cursor-pointer">{item}</li>)}
                        </div>
                        <div>
                            <h2 className="font-bold">{footer_div_3_heading}</h2>
                            <div className="relative mt-3">
                                <input className="bg-[#b7b7b759] w-full md:w-[118%] lg:w-full p-2 rounded-md text-[0.7rem] text-white outline-none" placeholder="Your email address" />
                                <span className="absolute right-2 md:-right-4 lg:right-2 top-2 duration-300 hover:duration-300 hover:rotate-[255deg] cursor-pointer"><IoIosSend /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;