import Image from "next/image";
import Nav from "@/components/Common/navbar";
import Team from "@/components/about-jobconnect/team";
import Footer from "@/components/Common/footer";


export default function AboutJobConnect() {
  return (
    <main className="bg-[#f5f3f3] h-screen">
      <Nav />
      <Team />
      
      <Footer />
    </main>
  );
}
