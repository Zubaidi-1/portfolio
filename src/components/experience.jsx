import { FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";

export default function Exp({ shadow, primary, bg }) {
  return (
    <div
      className="flex flex-col min-h-screen items-center justify-center bg-black 
    z-1"
      id="section-3"
      style={{ backgroundColor: `${bg}`, color: `#${primary}` }}
    >
      <h1 className="text-center text-2xl md:text-4xl">
        Want to send a message? You can find me at:
      </h1>
      <div
        className="bg-black text-white text-xl pt-8 pb-8 pr-8 pl-8 mt-8 flex flex-col gap-4 shadow-lg "
        style={{
          boxShadow: `${shadow}`,
          backgroundColor: `${bg}`,
          color: `#${primary}`,
        }}
      >
        <a href="mailto:abdallahzubaidi7@gmail.com" target="_blank">
          <MdEmail className="inline  mr-2 mb-1" size={"2rem"} /> Email me
        </a>
        <a href="https://www.instagram.com/azubaidi1/#" target="_blank">
          <FaInstagram className="inline mb-1  mr-2" size={"2rem"} /> Instagram
        </a>
        <a
          href="https://www.linkedin.com/in/abdalla-zubaidi-8960b023a/"
          target="_blank"
        >
          <FaLinkedin className="inline mb-1  mr-2" size={"2rem"} /> LinkedIn
        </a>
        <a href="tel:00962777790496">
          <FaPhoneAlt className="inline mb-1 mr-2" size={"2rem"} />{" "}
          +962777790496
        </a>
      </div>
    </div>
  );
}
