"use client";
import Hero from "@/Components/(WithNavFooter)/Home/Hero/Hero";
import LimitedtimeProducts from "@/Components/(WithNavFooter)/Home/LimitedTimeProducts/LimitedtimeProducts";
import ProductAdds from "@/Components/(WithNavFooter)/Home/ProductAdds/ProductAdds";
import Testimonials from "@/Components/(WithNavFooter)/Home/Testimonials/Testimonials";
import TrendingProducts from "@/Components/(WithNavFooter)/Home/TrendingProducts/TrendingProducts";
import WhyChoseUs from "@/Components/(WithNavFooter)/Home/WhyChoseUs/WhyChoseUs";

export default function Home() {
  return (
    <main className="bg-background-color text-white ">
      <div className=" container mx-auto ">
        <Hero />
        <LimitedtimeProducts />
        <TrendingProducts />
        <WhyChoseUs />
        {/* <ProductAdds /> */}
        <Testimonials />
      </div>
    </main>
  );
}
