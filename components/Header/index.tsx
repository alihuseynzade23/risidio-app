import Link from "next/link"
import { Img } from "../Img"

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <Link href='/'>
        <Img className="h-10 sm:w-[240px] max-w-sm: w-[175px]" alt='marketplace' src='/images/marketplace.png' />
      </Link>
        <button className="border-gray-900 border font-semibold border-solid text-[#23252B] py-4 px-8 rounded-[87px]">Connect Wallet</button>
    </div>
)
}

export default Header