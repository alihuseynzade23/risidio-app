'use client'
import Link from "next/link";
import Heading from "../Heading"
import { Img } from "../Img"
import Text from "../Text"
import { useState } from "react";


interface CollectionItemProps {
    collectionImage: string;
    header: string;
    artistName: string;
    artistIcon: string; 
    key: number;
  }

const CollectionItem = ({collectionImage, header, artistName, artistIcon}: CollectionItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
          <div className="flex flex-col items-center justify-center py-4 px-6 bg-[#fff] shadow-xs rounded-[47px] w-full shadow-md">
            <div className="h-[227px] w-full relative">
            <div className="w-full relative">
                <Img
                    src={collectionImage}
                    alt="night_sky_three"
                    className="justify-center h-[227px] w-full sm:w-full  rounded-[34px]  transition-opacity duration-300 hover:opacity-100"
                />
                   <div
                  className="w-full left-0 bottom-0 right-0 top-0 absolute transition-opacity duration-300 hover:bg-slate-800 hover:bg-opacity-50 rounded-[34px]"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <Link href="/collection">
                    <button
                      className={`bg-[#FAFAFA] w-max h-[60px] px-12 left-0 bottom-0 right-0 top-0 m-auto font-semibold absolute rounded-[33px] transition-opacity duration-300 ${
                        isHovered ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      Go to collection --&gt;
                    </button>
                  </Link>
                </div>
            </div>
            </div>
            <div className="flex flex-row justify-center w-[95%] md:w-full mb-[15px]">
              <div className="w-full">
                <div className="flex flex-row justify-between gap-2 items-center mt-8 w-full">
                  <p className="mt-[5px] font-bold text-xl">
                    {header}
                  </p>
                  <button 
                  className="px-8 py-2 font-medium bg-[#E1EDD9] rounded-[49px]">
                    120 NTF
                  </button>
                </div>
                <Text size="s" as="p" className="mt-7 text-[#617587]">
                  Price Range : 0.12BTC - 0.18BTC
                </Text>
                <Text as="p" className="!text-gray-900 !leading-[150%]">
                  Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor...
                </Text>
                <div className="flex flex-row justify-start items-center w-[41%] md:w-full mt-[33px] gap-[17px]">
                  <Img
                    src={artistIcon}
                    alt="circleimage"
                    className="h-[40px] w-[40px] md:h-auto rounded-[50%]"
                  />
                  <div className="flex flex-col items-start justify-start w-[62%]">
                    <Text size="xs" as="p" className="text-[#617587]">
                      Artist
                    </Text>
                    <Text as="p" className="!text-gray-900">
                      {artistName}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
        {/* <div className="flex flex-col items-center justify-start w-[32%] md:w-full">
          <div className="flex flex-col items-center justify-start w-full gap-[39px] p-4 bg-gray-50 shadow-sm rounded-[47px]">
            <Img
              src="/images/img_image_8_227x391.png"
              alt="imageeight_one"
              className="w-full md:h-auto sm:w-full object-cover rounded-[34px]"
            />
            <div className="flex flex-row justify-center w-[95%] md:w-full mb-[15px]">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-row justify-between items-center w-full">
                  <Heading as="h5">Future</Heading>
                  <button color="gray_300" 
                  // shape="round" 
                  className="sm:px-5 font-medium min-w-[118px]">
                    120 NTF
                  </button>
                </div>
                <Text size="s" as="p" className="mt-[30px]">
                  Price Range : 0.12BTC - 0.18BTC
                </Text>
                <Text as="p" className="!text-gray-900 !leading-[150%]">
                  Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor...
                </Text>
                <div className="flex flex-row justify-start items-center w-[28%] md:w-full mt-[33px] gap-[17px]">
                  <Img
                    src="/images/img_rectangle_12_40x40.png"
                    alt="circleimage"
                    className="h-[40px] w-[40px] md:h-auto rounded-[50%]"
                  />
                  <div className="flex flex-col items-start justify-start w-[45%]">
                    <Text size="xs" as="p">
                      Artist
                    </Text>
                    <Text as="p" className="!text-gray-900">
                      Julien
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-[32%] md:w-full">
          <div className="flex flex-col items-center justify-start w-full gap-[39px] p-4 bg-gray-50 shadow-sm rounded-[47px]">
            <div className="flex flex-row justify-center w-full">
              <Img
                src="/images/img_image_8_1.png"
                alt="imageeight_one"
                className="w-full md:h-auto sm:w-full object-cover rounded-[34px]"
              />
            </div>
            <div className="flex flex-row justify-center w-[95%] md:w-full mb-[15px]">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-row justify-between items-center w-full">
                  <Heading as="h6">Mother nature</Heading>
                  <button color="gray_300" 
                  // shape="round" 
                  className="sm:px-5 font-medium min-w-[118px]">
                    120 NTF
                  </button>
                </div>
                <Text size="s" as="p" className="mt-[30px]">
                  Price Range : 0.12BTC - 0.18BTC
                </Text>
                <Text as="p" className="!text-gray-900 !leading-[150%]">
                  Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor...
                </Text>
                <div className="flex flex-row justify-start items-center w-[27%] md:w-full mt-[33px] gap-[17px]">
                  <Img
                    src="/images/img_rectangle_12_1.png"
                    alt="circleimage"
                    className="h-[40px] w-[40px] md:h-auto rounded-[50%]"
                  />
                  <div className="flex flex-col items-start justify-start w-[42%]">
                    <Text size="xs" as="p" className="z-[1]">
                      Artist
                    </Text>
                    <Text as="p" className="!text-gray-900">
                      Maria{" "}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
    //   </div>
//   )
}

export default CollectionItem