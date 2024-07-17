"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";
import Drawer from "./Drawer";
import { route_data } from "@/constant/data";
import { header_btn_1, header_btn_2, header_logo_name } from "@/constant/lang_constant";

function Header() {
    return (
        <div className="w-full bg-[#F5F7FA] dark:bg-[#1a1a1a] py-3">
            <div className="max-w-[90%] mx-auto h-[50px] flex justify-between items-center">
                <div className="lg:hidden">
                    <Drawer />
                </div>
                <div className="flex justify-center items-center gap-2">
                    <Image src="/logo_nav.svg" width={30} height={30} alt="Nav Logo" />
                    <h1 className="font-bold text-[1.5rem] md:text-[2rem] dark:text-white">{header_logo_name}</h1>
                </div>
                <div className="lg:flex lg:justify-center lg:items-center list-none lg:gap-8 dark:text-white hidden md:hidden">
                    {route_data.map((item, id) => <Link href="#" key={id}><li className="duration-300 hover:scale-105 hover:duration-300 hover:opacity-60 hover:text-green-900 dark:hover:text-green-200">{item.name}</li></Link>)}
                </div>
                <ThemeToggle />
                <div className="hidden md:flex md:justify-center md:items-center md:gap-5">
                    <button className="text-[#4CAF4F] py-2 px-4 rounded-lg duration-300 hover:duration-300 hover:text-green-600 hover:bg-green-100">{header_btn_1}</button>
                    <button className="bg-[#4CAF4F] py-2 px-4 rounded-lg duration-300 text-white hover:duration-300 hover:bg-green-600">{header_btn_2}</button>
                </div>
            </div>
        </div>
    )
}

export default Header;