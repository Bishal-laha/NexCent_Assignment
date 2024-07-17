"use client";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import useStore from "@/store/store";

function ThemeToggle() {
    const { toggleDark } = useStore();
    return (
        <div>
            <div className="relative w-16 h-6 flex items-center bg-[#4CAF4F] dark:bg-[#ffffff] cursor-pointer rounded-full duration-300 delay-75 p-1" onClick={() => toggleDark()}>
                <IoMdMoon className="text-white" size={20} />
                <div className="absolute right-0 bg-white dark:bg-red-500 w-6 h-6 rounded-full shadow-md delay-75 transform transition-transform duration-300 dark:left-0" />
                <IoMdSunny className="ml-auto text-yellow-400" size={20} />
            </div>
        </div>
    )
}

export default ThemeToggle;