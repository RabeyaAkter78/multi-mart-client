import Footer from "@/Components/Shared/Footer/Footer";
import NavBar from "@/Components/Shared/NavBar/NavBar";
import { Button } from "antd";
export default function Home() {
  return (
    <main className="bg-background-color text-white ">
      <div className="container mx-auto py-10">
        <NavBar />
        <Footer />
      </div>
    </main>
  );
}
