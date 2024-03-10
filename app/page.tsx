import { Img } from "@/components/Img";
import HeaderMain from '@/components/HeaderMain'
import Collections from "@/components/Collections";

export default function Home() {
  return (
    <>
        <Img src="/images/stripes.svg" alt="image" className="w-full mt-12" />
        <HeaderMain />
        <Collections />
    </>
    
  );
}
