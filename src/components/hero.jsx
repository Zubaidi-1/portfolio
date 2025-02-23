import { motion } from "motion/react";
import Button from "./Button";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import cv from "../cv.pdf";
export default function Hero({
  name,
  role,
  sentence,
  primaryColor,
  secondaryColor,
  thirdColor,
  shadow,
  scrollIntoSection,
}) {
  return (
    <div
      className="relative flex flex-col justify-center items-center "
      id="section-1"
    >
      {console.log(`#${thirdColor}`)}{" "}
      <h1
        style={{ color: `#${primaryColor}` }}
        className={` text-2xl md:text-4xl`}
      >
        {name}
      </h1>
      <h2
        style={{ color: `#${secondaryColor}` }}
        className="text-[#dddbd9] text-1xl mt-2  md:text-2xl"
      >
        {role}
      </h2>
      <h3
        style={{ color: `#${thirdColor}` }}
        className=" text-sm mt-4  md:text-lg"
      >
        {sentence}
      </h3>
      <div className="flex gap-4 mt-4">
        <a
          href="https://www.linkedin.com/in/abdalla-zubaidi-8960b023a/"
          target="_blank"
        >
          <FaLinkedin fill="#ffc300" size={"1.5rem"} className="md:size-9" />
        </a>
        <a href="https://github.com/Zubaidi-1" target="_blank">
          <FaGithub fill="#ffc300" size={"1.5rem"} className="md:size-9" />
        </a>
      </div>
      <div className="flex gap-4 mt-28">
        <a href={cv} download={"CV.pdf"}>
          <Button shadow={shadow} color={"fff"} text={"Download CV"} />
        </a>
        <Button
          shadow={shadow}
          color={"ffc300"}
          text={"Learn more"}
          scrollIntoSection={scrollIntoSection}
        />
      </div>
    </div>
  );
}
