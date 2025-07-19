import React from 'react';
import GithubImg from '../assets/Images/github.png';
import SteamImg from '../assets/Images/steam.png';
import InstagramImg from '../assets/Images/instagram.png';
import DiscordImg from '../assets/Images/discord.png';

export default function Studio() {
  return (
    <div className="container mx-auto flex w-full flex-col justify-center gap-10 xl:px-[50px]">
      <div className="flex items-center justify-center gap-8 md:text-center">
        <div>
          <div>
            <p className="font-BebasNeueRegular text-sm text-secondery-color sm:text-xl">
              THE STUDIO
            </p>
            <h2 className="font-BebasNeueRegular text-xl text-white sm:text-4xl">
              ABOUT PIXEE STUDIO
            </h2>
          </div>
          <p className="mt-2 max-w-[1300px] font-TestSohneMono text-xs leading-relaxed text-white sm:text-lg lg:text-xl">
            We are a small but passionate team of game developers brought together by a deep love
            for the horror genre. Our goal is not just to make games but to craft experiences that
            redefine the boundaries of fear, creativity, and surprise. We aim to go beyond clichés,
            creating unique, breathtaking, and unforgettable works that immerse players in a whole
            new style of horror games unlike anything they've experienced before.
          </p>
        </div>
      </div>
      <hr className="w-full border-[#717171]" />
      <div className="sm:px[30px] mx-auto flex w-full flex-wrap justify-between gap-10 px-0 lg:px-[80px]">
        <h1 className="font-BebasNeueRegular text-2xl text-secondery-color lg:text-3xl">INFO</h1>
        <div>
          <p className="font-IMBPlex text-sm text-text-color lg:text-xl">RELEASE DATE</p>
          <h1 className="font-IMBPlex text-sm text-white lg:text-xl">September,4th2013</h1>
        </div>
        <div>
          <p className="font-IMBPlex text-sm text-text-color lg:text-xl">GENRE</p>
          <h1 className="font-IMBPlex text-sm text-white lg:text-xl">Survival-Horror</h1>
        </div>
        <div className="hidden flex-col gap-1.5 sm:flex">
          <h1 className="font-IMBPlex text-sm text-text-color lg:text-xl">SOCIAL MEDIA</h1>
          <div className="flex items-center justify-center gap-3">
            <img
              src={GithubImg}
              className="w-6 cursor-pointer transition-colors hover:text-secondery-color lg:w-8"
              alt="Pixee Studio GitHub profile"
              loading="lazy"
            />
            <img
              src={SteamImg}
              className="w-5 cursor-pointer transition-colors hover:text-secondery-color lg:w-7"
              alt="Pixee Studio Steam page"
              loading="lazy"
            />
            <img
              src={InstagramImg}
              className="z w-6 cursor-pointer transition-colors hover:text-secondery-color lg:w-7"
              alt="Pixee Studio Instagram profile"
              loading="lazy"
            />
            <img
              src={DiscordImg}
              className="w-5 cursor-pointer transition-colors hover:text-secondery-color lg:w-7"
              alt="Pixee Studio Discord server"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
