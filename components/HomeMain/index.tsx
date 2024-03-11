import React from 'react'
import Heading from '../Heading'
import Text from '../Text'
import { Img } from '../Img'
import Link from 'next/link'

const Main = () => {
  return (
    <div className="flex gap-12 md:flex-row max-w-md: flex-col items-center justify-between w-full bg-[rgb(230,233,242)] rounded-[30px] my-12 py-10 px-14">
        <div className='md:w-[50%] max-w-md: w-full flex flex-col'>
            <button className='bg-pink-50 text-gray-900 rounded-[49px] font-medium w-[150px] py-4'>Trending now</button>

            <Text className="mt-[38px] text-[1.5rem] text-[#617587] font-inter">
                       Night sky collection
            </Text>

            <Heading size="lg" as="h2">
                           With the stars
            </Heading>

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

            <div className='md:w-[75%] max-w-md: w-full item-center flex justify-between my-12 gap-8'>
            <div className='w-[220px]'>
                <Link className='w-full' href='/connect-wallet'>
                    <button className="w-full py-4 text-base font-semibold rounded-[33px] text-[#fff] bg-[#23252B] ]">
                        Buy
                    </button>
                </Link>
            </div>
                <div className='w-[220px]'>
                    <Link className='w-full' href='/collection'>
                        <button className="w-full  py-4 text-base font-semibold rounded-[33px] text-[#000] bg-[#E6E9F2] border-2 border-[#000]">
                            See collection
                        </button>
                    </Link>
                </div>
            </div>

        </div>

        <Img src="/images/stars-nft.png"
             alt="image_one"
             className=" rounded-[52px] object-cover md:w-[40%] max-w-md: w-full  md:h-[40%] max-w-md: " />
    </div>
  )
}

export default Main