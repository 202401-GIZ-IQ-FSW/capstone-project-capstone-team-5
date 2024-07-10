import Image from "next/image";
import Nav from "@/components/Common/navbar";
import Footer from "@/components/Common/footer";
import CEOProfile from "@/components/company-profile/CEO";

export default function Meh() {
  return (
    <main className="bg-[#f5f3f3] h-screen">
      <Nav />
      <CEOProfile />
      <Footer />
    </main>
  );
}
