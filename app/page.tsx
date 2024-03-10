import Text  from "@/components/Text";
import Footer from "@/components/Footer";
import { Img } from "@/components/Img";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Collections from "@/components/Collections";

export default function Home() {
  return (
    <>
        <Img src="/images/stripes.svg" alt="image" className="w-full mt-12" />
        <Main />
        <Collections />
    </>
    
  );
}
