import React from "react";
import { Img } from "../Img";


export default function Footer() {
  return (
    <footer className="flex justify-center items-center w-full p-[35px] sm:p-5 bg-indigo-50_01">
          <div className="flex flex-row sm:flex-col justify-between items-center w-full mx-auto md:px-5 sm:gap-10 max-w-[1413px]">
            <Img
              // src="/images/img_image_9.png"
              alt="imagenine_one"
              width={30}
              className=""
            />
            <div className="flex flex-row justify-center w-[15%] sm:w-full">
              <div className="flex flex-row justify-between items-center w-full">
                <div className="flex flex-col items-center justify-start">
                  <Img src="/images/img_facebook.svg" alt="facebook_one" className="h-[26px]" />
                </div>
                <div className="flex flex-row justify-center">
                  <Img src="/images/img_twitter.svg" alt="twitter_one" className="h-[23px]" />
                </div>
                <div className="flex flex-col items-center justify-start">
                  <Img src="/images/img_discord.svg" alt="discord_one" className="h-[24px]" />
                </div>
                <Img src="/images/img_instagram.svg" alt="instagram_one" className="h-[22px] w-[22px]" />
              </div>
            </div>
          </div>
        </footer>
  );
}
