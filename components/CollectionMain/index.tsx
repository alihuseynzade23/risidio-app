import Text from "../Text"
import { Img } from "../Img"
import Heading from "../Heading"
import Link from "next/link"

const CollectionMain = () => {
  return (
    <div className="flex gap-12 md:flex-row max-w-md: flex-col items-center justify-between w-full rounded-[30px] my-12 py-10 px-14">
    <div className='md:w-[50%] max-w-md: w-full flex flex-col'>
        <button className='bg-pink-50 text-gray-900 rounded-[49px] font-medium w-[150px] py-4'>Trending now</button>

        <Text className="mt-[38px] text-[1.5rem] text-[#617587] font-inter">
                Collection
        </Text>

        <Heading size="lg" as="h2">
                Night Sky
        </Heading>

        <Text className="leading-8 mt-4">
        Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo
        </Text>

        <div className='flex items-center gap-4 my-4'>
        <Img
            src="/images/user-icon.png"
            alt="circleimage"
            className="h-[68px] w-[68px]"
            />

            <div>
            <Text size="xs" as="p" className="text-[#617587]">
                    Artist
            </Text>
                <Text size="xl" as="p" className="!text-gray-900">
                    Léa Jacquot
                </Text>
            </div>
        </div>



    </div>

    <Img src="/images/img_rectangle_3.png"
         alt="image_one"
         className=" rounded-[52px] object-cover md:w-[40%] max-w-md: w-full  md:h-[40%] max-w-md: " />
</div>
  )
}

export default CollectionMain