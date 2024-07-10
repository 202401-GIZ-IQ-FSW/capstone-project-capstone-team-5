import Image from "next/image";
import Nav from "@/components/Common/navbar";
import Team from "@/components/AboutUs/team";
import Footer from "@/components/Common/footer";

export default function AboutUs() {
  return (
    <main className="bg-[#f5f3f3] h-screen">
      <Nav />
      <Team />
      <Footer />
    </main>
  );
}
