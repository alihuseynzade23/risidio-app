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
    image: '/images/img_rectangle_3.png',
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


              {/* <div className="flex flex-col items-center justify-start w-full p-4 bg-gray-50 shadow-sm rounded-[47px]">
                <div className="flex flex-col items-center justify-start w-full mb-[42px] gap-[45px]">
                  <div className="flex flex-row justify-center w-full">
                    <Img
                      src="/images/sky-nft.png"
                      alt="night_is_coming"
                      className="w-full md:h-auto sm:w-full object-cover rounded-[34px]"
                    />
                  </div>
                  <div className="flex flex-row justify-between items-center w-[98%] md:w-full">
                    <Heading as="h4">Night is coming</Heading>
                    <button className="sm:px-5 font-medium min-w-[121px]">
                      0.12 BTC
                    </button>
                  </div>
                </div>
              </div> */}
              {/* <div className="flex flex-col items-center justify-start w-full p-4 bg-gray-50 shadow-sm rounded-[47px]">
                <div className="flex flex-col items-center justify-start w-full mb-[42px] gap-[43px]">
                  <div className="flex flex-row justify-center w-full">
                    <div className="h-[345px] w-full sm:w-full relative">
                      <Img
                        src="/images/stars-nft.png"
                        alt="imageeight_one"
                        className="justify-center h-[345px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[34px]"
                      />
                      <div className="justify-center h-[345px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                        <Img
                          src="/images/palms-nft.png"
                          alt="image"
                          className="justify-center h-[345px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[34px]"
                        />
                        <button
                          className="w-max left-0 bottom-0 right-0 top-0 m-auto sm:px-5 font-semibold min-w-[248px] absolute rounded-[33px]"
                        >
                          Buy --&gt;
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between items-center w-[98%] md:w-full">
                    <Heading as="h5">With the stars</Heading>
                    <button className="sm:px-5 font-medium min-w-[121px]">
                      0.12 BTC
                    </button>
                  </div>
                </div>
              </div> */}
              {/* <div className="flex flex-col items-center justify-start w-full p-4 bg-gray-50 shadow-sm rounded-[47px]">
                <div className="flex flex-col items-center justify-start w-full mb-[42px] gap-11">
                  <div className="flex flex-row justify-center w-full">
                    <div className="h-[345px] w-full sm:w-full relative">
                      <Img
                        src="/images/img_image_8_345x391.png"
                        alt="imageeight_one"
                        className="justify-center h-[345px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[34px]"
                      />
                      <Img
                        src="/images/img_image_10.png"
                        alt="imageten_one"
                        className="justify-center h-[345px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[34px]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-between items-center w-[98%] md:w-full">
                    <Heading as="h6">Summer</Heading>
                    <button className="sm:px-5 font-medium min-w-[121px]">
                      0.12 BTC
                    </button>
                  </div>
                </div>
              </div> */}
              {/* <div className="flex flex-col items-center justify-start w-full p-4 bg-gray-50 shadow-sm rounded-[47px]">
                <div className="flex flex-col items-center justify-start w-full mb-[42px] gap-11">
                  <div className="h-[345px] w-full relative">
                    <Img
                      src="/images/img_image_8_345x391.png"
                      alt="imageeight_one"
                      className="justify-center h-[345px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[34px]"
                    />
                    <Img
                      src="/images/img_image_11.png"
                      alt="imageeleven_one"
                      className="justify-center h-[345px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[34px]"
                    />
                  </div>
                  <div className="flex flex-row justify-between items-center w-[98%] md:w-full">
                    <Heading as="h4">Quiet</Heading>
                    <button className="sm:px-5 font-medium min-w-[121px]">
                      0.14 BTC
                    </button>
                  </div>
                </div>
              </div> */}
              {/* <div className="flex flex-col items-center justify-start w-full p-4 bg-gray-50 shadow-sm rounded-[47px]">
                <div className="flex flex-col items-center justify-start w-full mb-[42px] gap-11">
                  <div className="h-[345px] w-full relative">
                    <Img
                      src="/images/img_image_8_345x391.png"
                      alt="imageeight_one"
                      className="justify-center h-[345px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[34px]"
                    />
                    <Img
                      src="/images/img_image_12.png"
                      alt="imagetwelve_one"
                      className="justify-center h-[345px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[34px]"
                    />
                  </div>
                  <div className="flex flex-row justify-between items-center w-[98%] md:w-full">
                    <Heading as="h4">Travel</Heading>
                    <button className="sm:px-5 font-medium min-w-[121px]">
                      0.12 BTC
                    </button>
                  </div>
                </div>
              </div> */}
              {/* <div className="flex flex-col items-center justify-start w-full p-4 bg-gray-50 shadow-sm rounded-[47px]">
                <div className="flex flex-col items-center justify-start w-full mb-[42px] gap-[43px]">
                  <div className="flex flex-row justify-center w-full">
                    <div className="h-[345px] w-full sm:w-full relative">
                      <Img
                        src="/images/img_image_8_345x391.png"
                        alt="imageeight_one"
                        className="justify-center h-[345px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[34px]"
                      />
                      <Img
                        src="/images/img_image_13.png"
                        alt="imagethirteen"
                        className="justify-center h-[345px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[34px]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-between items-center w-[98%] md:w-full">
                    <Heading as="h4">The rain</Heading>
                    <button className="sm:px-5 font-medium min-w-[121px]">
                      0.18 BTC
                    </button>
                  </div>
                </div>
              </div> */}
            </div>
    </div>
  )
}

export default NFTs