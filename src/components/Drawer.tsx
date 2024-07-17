"use client";
import Image from "next/image";
import Link from "next/link";
import { Drawer as D, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTrigger } from "@/components/ui/drawer";
import { header_btn_1, header_btn_2, header_logo_name } from "@/constant/lang_constant";
import { route_data } from "@/constant/data";
import { IoIosOpen, IoMdExit, IoMdMenu } from "react-icons/io";

function Drawer() {
    return (
        <D direction="left">
            <DrawerTrigger>
                <IoMdMenu className="dark:text-white duration-300 hover:duration-300 hover:rotate-180 mt-2" size={30} />
            </DrawerTrigger>
            <DrawerContent className='bg-[#eaffe1a1] h-screen top-0 right-0 mt-0 w-full rounded-none'>
                <DrawerHeader className="relative">
                    <div className="flex justify-start items-center gap-2 ">
                        <Image src="/logo_nav.svg" width={50} height={50} alt="Nav Logo" />
                        <h1 className="font-bold text-[2rem] md:text-[2.5rem] dark:text-white">{header_logo_name}</h1>
                    </div>
                    {route_data.map((item, id) => (<Link href={item.link} key={id}>
                        <div className="text-[1.5rem] md:text-[1.8rem] font-semibold opacity-80 p-3 mt-5 rounded-lg duration-300 hover:duration-300 hover:bg-[rgba(0,0,0,0.1)] hover:text-white">
                            <div className="flex justify-between items-center">
                                <h3>{item.name}</h3>
                                <IoIosOpen className="cursor-pointer text-[2.5rem] rounded-full p-2 duration-300 hover:duration-300 hover:scale-150 text-black" />
                            </div>
                        </div>
                    </Link>))}
                    <div className="flex flex-col gap-3 mt-[20%] text-[1.8rem] font-semibold">
                        <button className="text-[#4CAF4F] bg-green-100 p-3 rounded-lg duration-300 hover:duration-300  hover:bg-green-200 hover:text-black">{header_btn_1}</button>
                        <button className="bg-[#4CAF4F] p-3 rounded-lg duration-300 text-white hover:duration-300 hover:bg-green-600">{header_btn_2}</button>
                    </div>
                </DrawerHeader>
                <DrawerFooter>
                    <DrawerClose>
                        <button className="absolute top-10 right-7 text-[2rem] md:text-[2.5rem] duration-300 hover:duration-300 hover:scale-150 "><IoMdExit /></button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </D>
    )
}

export default Drawer;