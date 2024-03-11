import Heading from "../Heading"
import { Img } from "../Img"
import NFTItem from "../NFTItem"


const nfts = [
  {
    title: 'Night is coming',
    image: '/images/sky-nft.png',
    price: 0.12

  },
  {
    title: 'With the stars',
    image: '/images/stars-nft.png',
    price: 0.12
  },
  {
    title: 'Summer',
    image: '/images/palms-nft.png',
    price: 0.12
  },
  {
    title: 'Quiet',
    image: '/images/blue-sky-nft.png',
    price: 0.14
  },
  {
    title: 'Travel',
    image: '/images/travel-nft.png',
    price: 0.12
  },
  {
    title: 'The rain',
    image: '/images/rain-nft.png',
    price: 0.18
  },

]

const NFTs = () => {
  return (
    <div className="mb-32">
        <Heading as="h3" className="mt-[133px] !font-extrabold">
              NFTs
            </Heading>
            <div className="justify-between w-full mt-[53px] gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

            {nfts.map((item, index) => (
              <NFTItem {...item} key={index} />
            ))}
            </div>
    </div>
  )
}

export default NFTs