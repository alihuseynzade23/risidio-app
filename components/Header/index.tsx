'use client'
import Link from "next/link"
import { Img } from "../Img"
import { useState } from "react"
import Text from "../Text"
import { useSelector } from "react-redux"
import { RootState } from "@/store"

interface NFT {
  image: string;
}

const Header = () => {
  const [account, setAccount] = useState(false)
  const nftList = useSelector((state: RootState) => state.nft);


  return (
    <div className="flex justify-between items-center">
      <Link href='/'>
        <Img className="h-10 sm:w-[240px] max-w-sm: w-[175px]" alt='marketplace' src='/images/marketplace.png' />
      </Link>
        {/* <Link href='/connect-wallet'>
          <button className="border-gray-900 border font-semibold border-solid text-[#23252B] py-4 px-8 rounded-[87px]">Connect Wallet</button>
        </Link> */}
        
        {account ? 
        ( 
        <div className={`pt-[16px] pb-[100px] px-[24px] fixed right-0 z-50 top-[10px] bg-[#fff] sm:w-[400px] max-w-sm: w-[250px] popup rounded-[30px] border-2 border-[#02071D] popup ${account ? 'open': 'closed'}`}>
          <div className="cursor-pointer" onClick={() => setAccount(false)}>
            <Img src='/images/vector-to-right.svg' className="h-[12px] w-[12px] fixed top-[40px] max-w-sm: right-[250px] sm:right-[400px]" />
            <Img src='/images/vector-to-right.svg' className="h-[12px] w-[12px] fixed top-[40px] max-w-sm: right-[258px] sm:right-[408px]" />
          </div>

          <div className="flex flex-col w-full">
              <div className="flex sm:flex-row max-w-sm: flex-col items-center justify-between">
                <div className="flex items-center w-full gap-4">
                    <div className="bg-[#29627F] w-[50px] h-[50px] rounded-[50%]"></div>
                    <Text>STV6Q...4Z7WD</Text>
                    <Img src='/images/copy.svg' className="h-[20x] w-[20px] cursor-pointer" />
                </div>
                <div className="w-[20%]">
                <Img src='/images/sign-in.svg' className="w-[20x] h-[20px] cursor-pointer"/>
                </div>
              </div>
          </div>
          
          <Text className="mt-8 text-[#7B7B7B] text-[0.8rem]">In your wallet</Text>
          <Text className="text-[#02071D] font-semibold text-[2.1rem]">0.129 BTC</Text>

          <Text className="font-[800] mt-14 ml-6">Your NFTs</Text>

          { nftList.length !== 0 ? (
          <>
            <div className="overflow-y-auto h-[300px] mx-auto px-auto">

            {nftList && nftList.map((item, index) => (
                <Img src={item.image} alt={`NFT ${index}`} className="sm:ml-6 mt-8 rounded-[34px] sm:w-[300px] max-w-sm: w-[160px] mx-auto h-[200px]"/>
                ))}
            </div>
          </>
        ) : (
          <div className="flex flex-col">
          <Text className="text-center my-14 text-[#617587]">You don’t own any NFTs yet</Text>
          <Link className='w-full text-center' href='/connect-wallet'>
                    <button className="w-[80%] py-4 text-base font-semibold rounded-[33px] text-[#fff] bg-[#23252B] ]">
                        Start shopping
                    </button>
          </Link>
          </div>
        )}
        </div>
      )  :
      (
        <button onClick={() => setAccount(true)} className="border-gray-900 border font-semibold border-solid text-[#23252B] py-4 px-8 rounded-[87px]">Account</button>
      )
      }
       
    </div>
)
}

export default Header