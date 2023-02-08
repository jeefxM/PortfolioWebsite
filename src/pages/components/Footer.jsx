import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";

function Footer() {
  return (
    <div className=" bg-first">
      <div className="flex justify-center py-8  gap-3 text-white text-base max-w-[2600px]">
        <CopyrightIcon />
        <p> 2023 jeefx all right reserved</p>
      </div>
    </div>
  );
}

export default Footer;
