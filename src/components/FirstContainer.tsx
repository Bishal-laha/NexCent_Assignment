"use client";
import FirstContainerClient from "./FirstContainerClient";
import FirstContainerCommunity from "./FirstContainerCommunity";
import FirstContainerDetail from "./FirstContainerDetail";

function FirstContainer() {
    return (
        <div className="w-full bg-[#F5F7FA] dark:bg-black">
            <div className="max-w-[85%] mx-auto bg-white dark:bg-[#020817] rounded-lg shadow-2xl p-3 md:p-6">
                <FirstContainerClient />
                <FirstContainerCommunity />
                <FirstContainerDetail />
            </div>
        </div>
    )
}

export default FirstContainer;