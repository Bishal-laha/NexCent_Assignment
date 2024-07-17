"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { type CarouselApi } from "@/components/ui/carousel";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { carousel_data } from "@/constant/data";


function CarouselSection() {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        if (!api)
            return
        setCurrent(api.selectedScrollSnap() + 1);
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        });
    }, [api])

    return (
        <div className="w-full bg-[#F5F7FA] dark:bg-black pt-8">
            <Carousel setApi={setApi} className="w-full max-w-[85%] mx-auto">
                <CarouselContent>
                    {carousel_data.map((item, id) => (
                        <CarouselItem key={id}>
                            <Card>
                                <CardContent className="flex items-center justify-center p-6">
                                    <div className="w-full flex flex-col gap-8 lg:gap-0 md:flex-row justify-center items-center">
                                        <div className="md:w-[60%]">
                                            <div className="font-bold text-[1.8rem] md:text-[2rem]">
                                                <h1 className="text-[#4D4D4D] dark:text-white">{item.heading1}</h1>
                                                <h1 className="text-[#4CAF4F] ">{item.heading2}</h1>
                                                <p className="text-[0.6rem] opacity-60 mt-2">{item.subText}</p>
                                            </div>
                                            <button className="bg-[#4CAF4F] px-4 py-2 text-white rounded-sm duration-300 hover:duration-300 hover:bg-green-600 mt-5">{item.button}</button>
                                        </div>
                                        <div>
                                            <Image src={item.imgLink} width={250} height={250} alt={item.imgAlt} />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="hidden md:block dark:text-white"><CarouselPrevious /></div>
                <div className="hidden md:block dark:text-white"><CarouselNext /></div>
            </Carousel>
            <div className="py-2 text-center text-sm text-muted-foreground">
                {current} of {carousel_data.length}
            </div>
        </div>
    )
}

export default CarouselSection;