import React from "react";
import { Button } from "@mui/material";
import Card from "./Card";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function Projects() {
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slideLeft + 700;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft += 700;
  };
  return (
    <div className="bg-first" id="Projects">
      <div className=" px-28 pt-24 flex flex-wrap">
        <div className="sm:w-1/3 w-96 items-center ">
          <h1 className="text-white text-4xl font-poppins">Projects</h1>
          <p className="bg bg-second w-36 h-2 mt-2"></p>
          <p className="mt-14 text-white text-base leading-relaxed font-inter">
            In the projects section of my portfolio, I am proud to showcase a
            variety of decentralized applications (Dapps) that I have built and
            contributed to. Each of these projects has provided me with valuable
            experience and skills in the WEB3 and blockchain space.<br></br> The
            first project, Message Portal, is a simple yet powerful messaging
            platform built on the Ethereum blockchain. Users can send and
            receive messages in a secure and decentralized environment, and the
            platform also features end-to-end encryption for added security.
            <br></br> My second project, Favorite Number, is a fun and
            interactive Dapp that allows users to submit their favorite number
            and see it displayed on the blockchain. This project served as an
            introduction to smart contract development and helped me gain a
            deeper understanding of the Ethereum blockchain.<br></br> One Piece
            DAO is a decentralized autonomous organization (DAO) built on the
            Ethereum blockchain, that allows the community to vote on and fund
            various proposals related to the One Piece franchise. This project
            was my first experience working on a DAO and helped me understand
            the governance aspect of the blockchain.<br></br> Lastly,
            SignTypedDataV4 is a Dapp that allows users to sign typed data on
            the Ethereum blockchain, using the v4 spec. This project helped me
            to learn more about the ethereum ecrecover, and solidity sign typed
            data feature. <br></br> Overall, these projects have provided me
            with a strong foundation in WEB3 and blockchain development and I am
            excited to continue building and contributing to new and innovative
            projects in the future.
          </p>
        </div>
        <div className="flex items-center pt-10 gap-10 flex-wrap">
          <Card
            imgSrc={"Card4.jpg"}
            title={"signTypedDataV4"}
            subtitle={
              "A Dapp which uses signtypedDataV4 from metamask to sign off chain messages while still verifying the has with public key"
            }
            website={"https://networkone.vercel.app/"}
            className="max-sm:h-28"
          />

          <Card
            imgSrc={"Card1.jpg"}
            title={"Favorite Number Dapp"}
            subtitle={
              "A Dapp to store a favorite number on the blockchain and retrieve it with a mapping. Currently hosted on polygon mainnet "
            }
          />

          <Card
            imgSrc={"Card2.jpg"}
            title={"Message portal Dapp"}
            subtitle={
              "A Dapp to send me a message via blockchain and display them on the UI. I have also included a prize if you get the lucky number 💸 "
            }
          />

          <Card
            imgSrc={"Card3.jpg"}
            title={"One Piece DAO"}
            subtitle={
              "A DAO for One Piece Fans built with thirdweb Library. Deployed ERC20, ERC-1155 and voting contracts via Javascript. "
            }
          />

          {/* </div> */}
          {/* <MdChevronRight size={40} onClick={slideRight} /> */}
        </div>{" "}
        <span className="font-pacifico text-4xl ml-28 mt-40 m max-sm:ml-0 text-second">
          More to come...
        </span>
      </div>
      <a href="https://github.com/jeefxM">
        <button className="bg-second w-36 h-10 text-white rounded mb-28 mx-28 mt-10">
          More Projects
        </button>
      </a>
    </div>
  );
}

export default Projects;
