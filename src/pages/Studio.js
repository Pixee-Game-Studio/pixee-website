import { useEffect } from 'react';
import GithubImg from '../assets/Images/github.png';
import SteamImg from '../assets/Images/steam.png';
import InstagramImg from '../assets/Images/instagram.png';
import DiscordImg from '../assets/Images/discord.png';
import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

export default function Studio() {
  const part1 = "We are a small but passionate team of game developers brought together by a deep love for ";
  const part2 = "Our goal is not just to make games but to craft experiences that redefine the horror genre. ";
  const part3 = "creativity, and surprise. We aim to go beyond clichés, the boundaries of fear, ";
  const part4 = "creating unique, breathtaking, and unforgettable works that immerse players in a ";
  const part5 = "horror games unlike anything they've experienced before. whole new style of";
  const part6 = "RELEASE DATE";
  const part7 = "Survival-Horror";

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "none" }
    });

  const cursorTl = gsap.timeline({ repeat: -1 });

  tl.to("#scramble-text-1", {
    scrambleText: {
      text: part1,
      chars: "upperAndLowerCase",
      speed: 0.4
    },
    duration: 3
  })
    .to("#scramble-text-2", {
      scrambleText: {
        text: part2,
        chars: "lowerCase",
        speed: 0.4
      },
      duration: 4
    })
    .to("#scramble-text-3", {
      scrambleText: {
        text: "¡YOU ARE NOT ALONE IN THIS FACILITY!",
        chars: "¡YOU ARE NOT ALONE IN THIS FACILITY¡",
        speed: 0.3
      },
      duration: 2
    })
    .to("#scramble-text-3", {
      scrambleText: {
        text: part3,
        speed: 0.4
      },
      duration: 4
    })
    .to("#scramble-text-4", {
      scrambleText: {
        text: part4,
        chars: "upperAndLowerCase",
        speed: 0.4
      },
      duration: 4
    })
    .to("#scramble-text-5", {
      scrambleText: {
        text: part5,
        chars: "upperAndLowerCase",
        speed: 0.4
      },
      duration: 4
    })
    .to("#scramble-text-6", {
      scrambleText: {
        text: part6,
        chars: "upperAndLowerCase",
        speed: 0.3
      },
      duration: 2
    })
    .to("#scramble-text-7", {
      scrambleText: {
        text: part7,
        chars: "!SOS!",
        speed: 0.4
      },
      duration: 4
    })
    .add(cursorTl);
  }, [])

  return (
    <div id='studio' className="container mx-auto flex w-full flex-col justify-center gap-10 xl:px-[50px]">
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
          <div id="scramble-wrapper" className="mt-2 sm:max-w-[1300px] font-TestSohneMono text-xs leading-relaxed text-white sm:text-lg lg:text-xl">
            <p id="scramble-text-1"></p>
            <p id="scramble-text-2"></p>
            <p id="scramble-text-3"></p>
            <p id="scramble-text-4"></p>
            <p id="scramble-text-5"></p>
          </div>
        </div>
      </div>
      <hr className="w-full border-[#717171]" />
      <div className="sm:px[30px] mx-auto flex w-full flex-wrap justify-between gap-10 px-0 lg:px-[80px]">
        <h1 className="font-BebasNeueRegular text-2xl text-secondery-color lg:text-3xl">INFO</h1>
        <div>
          <p id='scramble-text-6' className="font-IMBPlex text-sm text-text-color lg:text-xl">RELEASE DATE</p>
          <h1 className="font-IMBPlex text-sm text-white lg:text-xl">September,4th2013</h1>
        </div>
        <div>
          <p className="font-IMBPlex text-sm text-text-color lg:text-xl">GENRE</p>
          <h1 id='scramble-text-7' className="font-IMBPlex text-sm text-white lg:text-xl">Survival-Horror</h1>
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
              className="z w-5 cursor-pointer transition-colors hover:text-secondery-color lg:w-7"
              alt="Pixee Studio Instagram profile"
              loading="lazy"
            />
            <img
              src={DiscordImg}
              className="w-6 cursor-pointer transition-colors hover:text-secondery-color lg:w-7"
              alt="Pixee Studio Discord server"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
