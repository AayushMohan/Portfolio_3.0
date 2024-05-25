"use client";
import Image from "next/image";
import BackgroundCircles from "./BackgroundCircles";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hey, The Name's Aayush Mohan",
      "Guy-who-loves-coffee.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 500,
    typeSpeed: 70,
    deleteSpeed: 50,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        src="https://avatars.githubusercontent.com/u/66319691?v=4"
        alt="Aayush Mohan Profile Picture"
        height={128}
        width={128}
        className="relative rounded-full mx-auto object-cover"
        priority
      />

      <div className="z-20">
        <h2 className="text-xs md:text-sm uppercase text-gray-500 pb-2 tracking-[3px] md:tracking-[10px]">
          Web Developer <span className="text-[#F7AB0A] font-black">|</span> ML
          Enthusiast
        </h2>

        <h1 className="text-[18px] lg:text-4xl text-gray-100 font-bold px-4">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>

          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>

          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
          <Link href="#blogs">
            <button className="heroButton">Blogs</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
