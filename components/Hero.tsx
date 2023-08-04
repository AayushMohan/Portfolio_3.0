"use client";
import Image from "next/image";
import BackgroundCircles from "./BackgroundCircles";
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hey, The Name's Aayush Mohan",
      "Guy-who-loves-coffee.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 200,
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
      />
    </div>
  );
};

export default Hero;
