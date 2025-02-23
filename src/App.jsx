import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./components/hero";
import Nav from "./components/Nav";
import { FaMoon } from "react-icons/fa";
import ProjectSection from "./components/projectsSection";
import Exp from "./components/experience";
import portImage from "../src/port.png";
import bookImage from "../src/book.png";
import white from "../src/white.png";
import black from "../src/hero.jpg";

function App() {
  const [page, setPage] = useState(0);
  const [theme, setTheme] = useState({
    theme: "dark",
    image: black,
    primaryColor: "fff",
    secondaryColor: "dddbd9",
    thirdColor: "bcb9b9",
    shadow: "fff",
    bg: "black",
  });

  const handleTheme = function () {
    if (theme.theme === "dark") {
      setTheme({
        theme: "light",
        image: white,
        primaryColor: "000000",
        secondaryColor: "363946",
        thirdColor: "696773",
        shadow: "000000",
        bg: "white",
      });
    } else if (theme.theme === "light") {
      setTheme({
        theme: "dark",
        image: black,
        primaryColor: "fff",
        secondaryColor: "dddbd9",
        thirdColor: "bcb9b9",
        shadow: "fff",
        bg: "black",
      });
    }
  };

  const projects = [
    {
      image: portImage,
      name: "Portfolio",
      description: "A website to show off my skills, projects and experience.",
      id: "0",
      github: "https://github.com/Zubaidi-1/portfolio",
      live: "https://zubaidi.dev/",
    },
    {
      image: bookImage,
      name: "Books",
      description: "A website to sell and buy books .",
      id: "1",
      github: "https://github.com/Zubaidi-1/ecom",
      live: "https://zubaidi-1.github.io/ecom/#/login",
    },
  ];

  const scrollToSection = (id) => {
    if (id === "section-1") {
      const section = document.getElementById(id);

      if (section) {
        const offset = 900; // Adjust based on your navbar height
        const top =
          section.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
          top,
          behavior: "smooth",
        });
      }
    } else {
      const section = document.getElementById(id);

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    const section = document.getElementById(id);
  };

  const pagination = function (type, pageNo) {
    console.log(projects.length);

    if (type === "increment") {
      if (projects.length - 1 === pageNo) {
        setPage(0);
      } else {
        setPage(pageNo + 1);
      }
    } else if (type === "decrement") {
      if (pageNo === 0) {
        setPage(projects.length - 1);
      } else {
        setPage(pageNo - 1);
      }
    }
  };
  return (
    <>
      <div
        style={{ backgroundImage: `url(${theme.image})` }}
        className={`aspect-w-16 aspect-h-9 relative bg-[url('${theme.image}')]  min-w-screen min-h-screen bg-cover bg-center min-w-screen flex flex-col justify-center items-center `}
      >
        <div className="absolute top-10  right-1/2 translate-x-1/2">
          <button onClick={handleTheme}>
            <FaMoon color={`${theme.primaryColor}`} size={"2rem"} />
          </button>
        </div>

        <div className="justify-self-start mb-12 absolute top-24 md:fixed">
          <Nav shadow={theme.shadow} scrollToSection={scrollToSection} />
        </div>
        <Hero
          name={"Abdalla Zubaidi"}
          role={"Web Developer"}
          sentence={"I enjoy building websites from scratch"}
          primaryColor={theme.primaryColor}
          secondaryColor={theme.secondaryColor}
          thirdColor={theme.thirdColor}
          shadow={theme.shadow}
          scrollIntoSection={scrollToSection}
        />
      </div>
      <ProjectSection
        image={projects[page].image}
        name={projects[page].name}
        description={projects[page].description}
        pagination={pagination}
        pageNo={page}
        projectsNo={projects.length}
        primaryColor={theme.primaryColor}
        secondaryColor={theme.secondaryColor}
        thirdColor={theme.thirdColor}
        shadow={theme.shadow}
        bg={theme.bg}
        github={projects[page].github}
        live={projects[page].live}
      />
      <Exp bg={theme.bg} primary={theme.primaryColor} shadow={theme.shadow} />
    </>
  );
}

export default App;
