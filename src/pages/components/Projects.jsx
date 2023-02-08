import React from "react";

import Card from "./Card";

function Projects() {
  return (
    <div className="bg-first" id="Projects">
      <div className=" pl-28 max-md:px-8 max-md:justify-center pt-24 flex flex-wrap max-w-[2700px]">
        <div className=" w-5/12 max-sm:w-auto items-center ">
          <h1 className="text-white text-4xl font-poppins">Projects</h1>
          <p className=" bg-second w-36 h-2 mt-2"></p>
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
        <div className="flex items-center pt-10 gap-10 flex-wrap max-w-[2200px]">
          <Card
            imgSrc={"card1.jpg"}
            title={"signTypedDataV4"}
            subtitle={
              "A Dapp which uses signtypedDataV4 from metamask to sign off chain messages while still verifying the has with public key"
            }
            website={"https://networkone.vercel.app/"}
            github={"https://github.com/jeefxM/Network1Copy"}
            className="max-sm:w-28"
          />

          <Card
            imgSrc={"card2.jpg"}
            title={"Favorite Number Dapp"}
            subtitle={
              "A Dapp to store a favorite number on the blockchain and retrieve it with a mapping. Currently hosted on polygon mainnet "
            }
            website={"https://favoritenumber.vercel.app/"}
            github={"https://github.com/jeefxM/favoriteNumberNextJs"}
          />

          <Card
            imgSrc={"card3.jpg"}
            title={"Message portal Dapp"}
            subtitle={
              "A Dapp to send me a message via blockchain and display them on the UI. I have also included a prize if you get the lucky number 💸 "
            }
            website={"https://messageportal.vercel.app/"}
            github={"https://github.com/jeefxM/MessagePortalNextJs"}
          />

          <Card
            imgSrc={"card4.jpg"}
            title={"One Piece DAO"}
            subtitle={
              "A DAO for One Piece Fans built with thirdweb Library. Deployed ERC20, ERC-1155 and voting contracts via Javascript. "
            }
            website={"https://one-piece-dao.vercel.app/"}
            github={"https://github.com/jeefxM/OnePieceDAO"}
          />

          <Card
            imgSrc={"card5.png"}
            title={"ERC20 Generator"}
            subtitle={
              "ERC20 Token Generator Dapp. Customize and Deploy your own tokens on the blockchain."
            }
            website={"https://erc20-generator-jeefx.vercel.app/"}
            github={"https://github.com/jeefxM/ERC20GeneratorFrontend-Tailwind"}
          />

          <Card
            imgSrc={"card6.jpg"}
            title={"DALL-E clone"}
            subtitle={"Clone for OpenAi's DALL-E MERN stack web app"}
            website={"https://dalle-erc721.vercel.app/"}
            github={"https://github.com/jeefxM/DALL-E_Clone_ERC721"}
          />
        </div>{" "}
      </div>
      <a href="https://github.com/jeefxM">
        <button className="bg-second w-36 h-10 text-white rounded mb-28 ml-28 mt-10 max-md:ml-9">
          More Projects
        </button>
      </a>
    </div>
  );
}

export default Projects;
