import CategoryFilter from "@/components/SearchResults/category-filter";
import Image from "next/image";
import Footer from "@/components/Common/footer";
import Nav from "@/components/Common/navbar";
import Search from "@/components/SearchResults/search";
import DiscoverJobsSection from "@/components/SearchResults/discover-jobs-section";

export default function Browse() {
  return (
    <main className="bg-[#f5f3f3]">
      <Nav />
      <Search />

      <CategoryFilter />
      {/* <div className=" border-black border-[1px]"></div> */}
      <DiscoverJobsSection />
      <Footer />
    </main>
  );
}
