import { FaReact, FaGithub, FaCircle } from "react-icons/fa";
import { IoOpen } from "react-icons/io5";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { motion } from "motion/react";
import { FaCss3, FaHtml5, FaNode, FaBriefcase } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
import { RiTailwindCssFill } from "react-icons/ri";

export default function ProjectSection({
  image,
  name,
  description,
  pagination,
  pageNo,
  projectsNo,
  primaryColor,
  secondaryColor,
  thirdColor,
  shadow,
  bg,
  github,
  live,
}) {
  return (
    <motion.div
      id="section-2"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
        ease: "easeInOut",
        delay: 0.5,
      }}
      className={`flex flex-col justify-center items-center min-h-screen max-w-screen`}
      style={{ backgroundColor: `${bg}` }}
    >
      <div
        className="relative flex flex-col gap-10 justify-self-center self-center justify-center items-center ml-4 mr-4 border-2 shadow-[0_0_4px_4px_white] md:flex-row"
        style={{ boxShadow: `0 0 10px 5px #${shadow}` }}
      >
        {/* Image with fixed dimensions */}
        <div className="w-64 h-64 lg:w-96 lg:h-96 overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>

        <div className="justify-center flex flex-col items-center md:justify-start md:items-start">
          <h1 className="text-2xl" style={{ color: `#${primaryColor}` }}>
            {name}
          </h1>
          <h3
            className="text-center p-2 md:text-left md:p-0"
            style={{ color: `#${secondaryColor}` }}
          >
            {description}
          </h3>
          <p className="mt-4" style={{ color: `#${thirdColor}` }}>
            Built with
            <FaReact size={"1.5rem"} color="#ffc300" className="inline ml-2" />
          </p>
          <div className="flex gap-4 mt-14">
            <a href={`${live}`} target="_blank" rel="noopener noreferrer">
              <IoOpen size={"1.5rem"} color="#ffc300" />
            </a>
            <a href={`${github}`} target="_blank" rel="noopener noreferrer">
              <FaGithub size={"1.5rem"} color="#ffc300" />
            </a>
          </div>
        </div>

        <div style={{ b: `${primaryColor}` }}>
          <button onClick={() => pagination("increment", pageNo)}>
            <FaArrowRight
              color={`${bg}`}
              size={"1.5rem"}
              className="absolute right-1/3 top-full -translate-y-9 translate-x-1/2 bg-black rounded-full md:translate-y-3 p-1 mt-2"
              style={{ backgroundColor: `${primaryColor}` }}
            />
          </button>
        </div>
        <div>
          <button onClick={() => pagination("decrement", pageNo)}>
            <FaArrowLeft
              className="absolute left-1/3 top-full -translate-x-1/2 -translate-y-9 bg-black rounded-full md:translate-y-3 p-1 mt-2"
              size={"1.5rem"}
              color={`${bg}`}
              style={{ backgroundColor: `${primaryColor}` }}
            />
          </button>
        </div>
        <div className="absolute top-full right-1/2 translate-x-1/2 translate-y-3 flex gap-2">
          {Array.from({ length: projectsNo }).map((_, i) => (
            <FaCircle
              key={i}
              color={i === pageNo ? "#ffc300" : `#${primaryColor}`}
              size={"0.5rem"}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center self-center gap-8 text-[#ffc300] p-8 mt-16 md:p-12 gap-12">
        <p className="text-xl md:text-2xl">
          <FaCss3 className="inline mb-1" size={"2rem"} />
        </p>
        <p className="text-xl md:text-2xl">
          <FaHtml5 className="inline mb-1" size={"2rem"} />
        </p>
        <p className="text-xl md:text-2xl">
          <IoLogoJavascript className="inline mb-1" size={"2rem"} />
        </p>
        <p className="text-xl md:text-2xl">
          <FaReact className="inline mb-1" size={"2rem"} />
        </p>
        <p className="text-xl md:text-2xl">
          <FaNode className="inline mb-1" size={"2.5rem"} />
        </p>
        <p className="text-xl md:text-2xl">
          <GrMysql className="inline mb-1" size={"2rem"} />
        </p>
      </div>
    </motion.div>
  );
}
