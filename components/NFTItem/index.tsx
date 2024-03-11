'use client'
import { Img } from "../Img"
import Heading from "../Heading"
import { MouseEventHandler, useState } from "react"
import Link from "next/link"
import Text from "../Text"
import { useAppDispatch } from "@/store"
import { RootState } from "@/store"
import { useSelector } from "react-redux"
import { setNFT } from "@/features/nfts-slice"

interface NFTItemProps {
    title: string,
    image: string,
    price: number
}

const NFTItem = ({title, image, price}: NFTItemProps) => {

    const [isHovered, setIsHovered] = useState(false);
    const dispatch = useAppDispatch()

    const handleButtonClick: MouseEventHandler<HTMLButtonElement> = (event) => {
      dispatch(setNFT(image));
  };


  return (
    <div className="flex flex-col w-[85%] p-4 shadow-md rounded-[47px] mx-auto">
        <div className="flex flex-col items-center justify-start w-full mb-[42px] gap-[43px]">
        <div className="flex flex-row justify-center w-full">
        <div className="w-full relative">
                <Img
                    src={image}
                    alt="night_sky_three"
                    className="justify-center h-[227px] w-full sm:w-full  rounded-[34px]  transition-opacity duration-300 hover:opacity-100"
                />
                   <div
                  className="w-full left-0 bottom-0 right-0 top-0 absolute transition-opacity duration-300 hover:bg-slate-800 hover:bg-opacity-50 rounded-[34px]"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {/* <Link href="/"> */}
                    <button
                      onClick={handleButtonClick}
                      className={`bg-[#FAFAFA] w-max h-[60px] px-12 left-0 bottom-0 right-0 top-0 m-auto font-semibold absolute rounded-[33px] transition-opacity duration-300 ${
                        isHovered ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      Buy --&gt;
                    </button>
                  {/* </Link> */}
                </div>
            </div>
        </div>
        <div className="flex flex-row justify-between items-center w-[98%] md:w-full">
            <Text className="font-semibold md:text-[1.20rem] max-w-md: text-[1.6rem]">{title}</Text>
            <button className="px-7 font-medium bg-[#D4D3EB] rounded-[49px] py-3">
            {price} BTC
            </button>
        </div>
        </div>
  </div>
  ) 
}

export default NFTItem