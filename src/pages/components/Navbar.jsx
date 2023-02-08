import React from "react";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="p-10 md:flex md:items-center md:justify-between max-w-[2500px]">
      <div>
        <h1 className="ml-6 text-2xl cursor-pointer text-second font-pacifico">
          jeefx
        </h1>
      </div>

      <ul className="sm:flex flex-wrap font-poppins pl-auto">
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
          <a
            href="https://docs.google.com/document/d/1w6Zo4kwiiIuzf4Ir69DIOwZK9TEm94ib/edit?usp=share_link&ouid=100175291523341793773&rtpof=true&sd=true"
            className="text-sm hover:text-zimaBlue duration-500"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
