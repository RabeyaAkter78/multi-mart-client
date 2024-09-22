"use client";
import Hero from "@/Components/(WithNavFooter)/Home/Hero/Hero";
import LimitedtimeProducts from "@/Components/(WithNavFooter)/Home/LimitedTimeProducts/LimitedtimeProducts";
import Testimonials from "@/Components/(WithNavFooter)/Home/Testimonials/Testimonials";
import TrendingProducts from "@/Components/(WithNavFooter)/Home/TrendingProducts/TrendingProducts";

export default function Home() {
  return (
    <main className="bg-background-color text-white ">
      <div className="px-2 container mx-auto py-10">
        <Hero />
        <LimitedtimeProducts />
        <TrendingProducts />
        <Testimonials />
      </div>
    </main>
  );
}
