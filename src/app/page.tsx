"use client";
import CarouselSection from "@/components/CarouselSection";
import FirstContainer from "@/components/FirstContainer";
import Header from "@/components/Header";
import SecondContainer from "@/components/SecondContainer";
import useStore from "@/store/store";

export default function Home() {
  const { isDark } = useStore();
  return (
    <div className={isDark ? "dark" : "light"}>
      <div className="bg-[#F5F7FA] dark:bg-black h-screen ">
        <Header />
        <CarouselSection />
        <FirstContainer />
        <SecondContainer />
      </div>
    </div>
  );
}