"use client";
import Footer from "./Footer";
import SecondContainerDetail from "./SecondContainerDetail";
import SecondContainerNumericDetail from "./SecondContainerNumericDetail";
import SecondContainerProduct from "./SecondContainerProduct";
import SecondContainerTestimonial from "./SecondContainerTestimonial";


function SecondContainer() {
    return (
        <div className="w-full bg-[#F5F7FA] dark:bg-black pt-1 pb-5">
            <div className="max-w-[85%] mx-auto bg-white dark:bg-[#020817] rounded-lg shadow-2xl">
                <SecondContainerNumericDetail />
                <SecondContainerDetail />
                <SecondContainerProduct />
                <SecondContainerTestimonial />
                <Footer />
            </div>
        </div>
    )
}

export default SecondContainer;