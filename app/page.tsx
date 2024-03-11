import { Img } from "@/components/Img";
import HeaderMain from '@/components/HomeMain'
import Collections from "@/components/Collections";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="w-[90%] mx-auto my-6 font-inter">
        <Header />
          <Img src="/images/stripes.svg" alt="image" className="w-full mt-12" />
          <HeaderMain />
          <Collections />
      </div>
        <Footer />
      </>
    
  );
}
