import React from "react";
import { Link } from "react-scroll";

function LandingPage() {
  return (
    <div className=" bg-first text-white font-poppins">
      <nav className="p-10 md:flex md:items-center md:justify-between">
        <div>
          <span className="ml-6 text-2xl cursor-pointer text-second font-pacifico">
            David
          </span>
        </div>

        <ul className="sm:flex items-center flex-wrap font-poppins">
          <li className="mx-8 my-6 md:my-0 ">
            <Link
              to="About"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="text-sm hover:text-zimaBlue duration-500"
            >
              About
            </Link>
          </li>

          <li className="mx-8 my-6 md:my-0 ">
            <Link
              to="Projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="text-sm hover:text-zimaBlue duration-500"
            >
              Projects
            </Link>
          </li>

          <li className="mx-8 my-6 md:my-0">
            <Link
              to="Contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="text-sm hover:text-zimaBlue duration-500"
            >
              Contact
            </Link>
          </li>

          <li className="mx-8 my-6 md:my-0">
            <a href="#" className="text-sm hover:text-zimaBlue duration-500">
              Resume
            </a>
          </li>
        </ul>
      </nav>

      <div className="px-28 max-md-px-8 max-md:px-16 md:flex flex-column justify-between flex-wrap ">
        <meta
          name="description"
          content="David is a blockchain developer proficient in React and Solidity. Check out his portfolio and contact him for any blockchain development needs."
        ></meta>
        <div>
          <p className="font-pacifico text-4xl pt-28 flex-wrap md:text-6xl md:pt-40 ">
            <span className="">Hi,</span> <br></br>
            <span className="">I am </span>
            <span className=" text-second">D</span>
            <span className="">avid,</span>
            <br></br>
            <title>David - Blockchain Developer</title>
            <br></br>
          </p>

          <title className="md:te md:text-xl text-xs mt-16">
            Blockchain Developer, Profficient in React & Solidity
          </title>

          <Link
            to="Projects"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <button className="bg-second w-40 h-14 b rounded mt-8 mb-28 hover:bg-byzantium">
              See Projects
            </button>
          </Link>
        </div>
        <div className="py-32 ">
          <img
            src="hero-img.png"
            className="o object-cover md:h-96 mr-16 "
            alt="David sitting in front of multiple computer screens, working on blockchain development projects"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
