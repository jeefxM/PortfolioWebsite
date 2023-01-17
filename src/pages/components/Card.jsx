import React from "react";
import { Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";

function Card(props) {
  return (
    <div
      // style={{ height: "567px", width: "373px" }}
      className="rounded-lg overflow-hidden shadow-lg bg-grayBlack inline-block cursor-pointer hover:scale-105 ease-in-out duration-300 h-128 w-104 max-sm:w-60 max-sm:h-96, text-white"
      id="FirstDiv"
    >
      <div className="w-full h-1/2">
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
      <div className="pt-max px-max"></div>
      <div className="flex justify-center gap-3 mb-5 sm:py-8 max-sm:mt-10">
        <Button
          variant="contained"
          className=" bg-blueE hover:bg-first hover:text-blue-500 r rounded-md"
          endIcon={<LanguageIcon />}
          href={props.website}
        >
          Demo
        </Button>
        <Button
          variant="contained"
          color="primary"
          endIcon={<GitHubIcon />}
          href={props.github}
          className=" text-white bg-gray-700 hover:bg-first hover:text-blue-500 rounded-md"
        >
          GitHub
        </Button>
      </div>
    </div>
  );
}

export default Card;
