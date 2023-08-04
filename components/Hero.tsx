"use client";
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
    <div>
      <BackgroundCircles />
    </div>
  );
};

export default Hero;
