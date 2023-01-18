import React from "react";
import { Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";

function Card(props) {
  return (
    <div
      className="rounded-lg overflow-hidden shadow-lg bg-grayBlack inline-block cursor-pointer hover:scale-105 ease-in-out duration-300 h-128 w-104 max-sm:w-full max-sm:h-96, text-white"
      id="FirstDiv"
    >
      <div className="w-full h-1/2 m max-md:w-full">
        <img
          src={props.imgSrc}
          alt="Project Image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="px-6 py-4 h-44 text-white">
        <div className="font-medium text-lg mb-2 text-white">{props.title}</div>
        <p className="text-white text-base">{props.subtitle}</p>
      </div>
      <div className="pt-max"></div>
      <div className="flex justify-center gap-3 mb-5 sm:py-8 max-sm:mt-10">
        <Button
          variant="contained"
          className=" bg-blueE hover:text-grayBlack rounded-md"
          endIcon={<LanguageIcon />}
          href={props.website}
        >
          Demo
        </Button>
        <Button
          variant="contained"
          endIcon={<GitHubIcon />}
          href={props.github}
          className=" text-white hover:bg-first hover:text-blue-500 rounded-md"
          style={{ backgroundColor: "#3D4048" }}
        >
          GitHub
        </Button>
      </div>
    </div>
  );
}

export default Card;
