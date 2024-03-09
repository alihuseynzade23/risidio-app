import { Img } from "../Img"

const Header = () => {
  return (
    <div className="flex justify-between items-center">
        <Img width={240} className="h-10" alt='marketplace' src='/images/marketplace.png' />
        <button className="border-gray-900 border border-solid text-gray-900 p-4 rounded-[87px]">Connect Wallet</button>
    </div>
)
}

export default Header