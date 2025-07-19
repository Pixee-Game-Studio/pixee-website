import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="mt-8 w-full bg-black sm:mt-16 lg:mt-40">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between gap-5 py-6 sm:gap-10 sm:pb-16 sm:pt-16 lg:px-14 lg:pt-24">
          <div>
            <h1 className="font-BebasNeueRegular text-xl text-white sm:text-2xl lg:text-4xl">
              PIXEE
            </h1>
            <p className="font-TestSohneMono text-xs leading-relaxed text-primary-color sm:text-sm lg:max-w-[400px] lg:text-base xl:max-w-[500px]">
              pixee Game is an independent game studio driven by creativity and passion, crafting
              unique and engaging experiences for players around the world.
            </p>
            <Link to="#" className="mt-2 font-TestSohneMono text-secondery-color">
              get it on system
            </Link>
          </div>
          <div>
            <p className="font-BebasNeueRegular text-sm text-secondery-color sm:text-base lg:text-lg">
              CONTACT US
            </p>
            <h1 className="font-BebasNeueRegular text-xl text-white sm:text-2xl">
              Here, every email could be the beginning of <br /> something unforeseen.
            </h1>
            <div className="mt-5 font-TestSohneMono text-xs text-white sm:text-sm lg:text-base">
              <h1>Email Studio : pixeestudio@gmail.com</h1>
              <h1>Location : Iran,Tehran</h1>
            </div>
          </div>
        </div>
        <hr className="w-full border-[#717171]" />
        <div className="flex flex-wrap items-center justify-between gap-3 py-5 lg:px-14">
          <p className="font-IMBPlex text-xs text-white sm:text-sm lg:text-base">
            ©2024 Pixee Game
          </p>
          <div className="flex items-center justify-center gap-5 sm:gap-10">
            <Link
              to="#"
              className="font-IMBPlex text-xs text-primary-color sm:text-sm lg:text-base"
            >
              Terms of Service
            </Link>
            <Link
              to="#"
              className="font-IMBPlex text-xs text-primary-color sm:text-sm lg:text-base"
            >
              Privacy
            </Link>
            <Link
              to="#"
              className="font-IMBPlex text-xs text-primary-color sm:text-sm lg:text-base"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
