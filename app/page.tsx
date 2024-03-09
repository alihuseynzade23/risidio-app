import Text  from "@/components/Text";
import Footer from "@/components/Footer";
import { Img } from "@/components/Img";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="w-[90%] mx-auto my-6">
      <Header />
      <Img src="images/img_frame_3.svg" alt="image" className="w-full mt-12" />
      <div className="flex flex-row md:flex-col justify-between items-start w-full mt-3.5 p-[47px] md:gap-10 md:p-5 bg-indigo-50_01 rounded-[30px]">
              <div className="flex flex-row justify-center w-[41%] md:w-full mt-6 ml-[27px] md:ml-0 md:mt-0 sm:ml-5">
                <div className="flex flex-col items-start justify-start w-full gap-11">
                  <div className="flex flex-row justify-start w-[88%] md:w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Button
                          color="pink_50"
                          shape="round"
                          className="sm:px-5 font-medium min-w-[150px] sm:min-w-full"
                        >
                          Trending Now
                        </Button>
                        <Text size="xl" as="p" className="mt-[38px]">
                          Night sky collection
                        </Text>
                        <Heading size="lg" as="h2">
                          With the stars{" "}
                        </Heading>
                        <div className="flex flex-col items-start justify-start mt-[27px] ml-[84px] md:ml-5">
                          <Text size="xs" as="p" className="z-[1]">
                            Artist
                          </Text>
                          <Text size="xl" as="p" className="!text-gray-900">
                            Léa Jacquot
                          </Text>
                        </div>
                      </div>
                      <Img
                        src="images/img_rectangle_10.png"
                        alt="circleimage"
                        className="h-[68px] w-[68px] md:h-auto mt-[-56px] rounded-[50%]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row sm:flex-col justify-start gap-[18px] sm:gap-5">
                    <Button size="md" className="sm:px-5 font-semibold min-w-[248px] rounded-[33px]">
                      Buy
                    </Button>
                    <Button size="md" variant="outline" className="sm:px-5 font-semibold min-w-[248px] rounded-[33px]">
                      See collection
                    </Button>
                  </div>
                </div>
              </div>
              <Img
                src="images/img_rectangle_3.png"
                alt="image_one"
                className="w-[35%] md:w-full md:h-[411px] mb-[13px] mr-10 sm:mr-5 object-cover rounded-[52px]"
              />
            </div>
    {/* <Footer /> */}
    </div>
  );
}
