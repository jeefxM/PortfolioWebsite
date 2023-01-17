import React from "react";
import Icons from "./Icons";

function About() {
  return (
    <div
      id="About"
      className="flex flex-column justify-between bg-third px-28 py-24 flex-wrap"
    >
      <div className="sm:w-5/12 w-96 items-center ">
        <p className=" text-white text-4xl font-poppins">About Me</p>
        <p className="bg bg-second w-40 h-2 mt-2"></p>
        <div className="mt-14 text-white text-base">
          <article className="leading-relaxed">
            Hello, my name is David and I am a passionate WEB3 and blockchain
            enthusiast. I have a strong interest in this cutting-edge technology
            and enjoy building WEB3 projects in my spare time. Recently, I
            completed my university studies and am now seeking a full-time job
            as a blockchain developer. I have gained valuable experience and
            skills through an internship at OSFD, where I worked on a variety of
            projects and learned from experienced professionals in the field. In
            addition to my professional experience, I have also developed
            several decentralized applications (Dapps) on my own, showcasing my
            skills and knowledge in this exciting area. I am excited to continue
            building and learning in the WEB3 and blockchain space, and am eager
            to apply my skills and enthusiasm to a full-time role.
          </article>
          <div className="mt-16 text-lg fo font-poppins">
            <p className="mb-5 text-second">Technologies I have Worked With:</p>
            <section className="lg:flex lg:flex-row gap-10">
              <div>
                <p>Html</p>
                <p>CSS</p>
                <p>JavaScript</p>
              </div>
              <div>
                <p>React</p>
                <p>React.js</p>
                <p>Next.js</p>
              </div>
              <div>
                <p>MUI design</p>
                <p>TailWind</p>
              </div>
              <div>
                <p>Solidity</p>
                <p>Remix</p>
                <p>Hardhat</p>
              </div>
              <div>
                <p>Ethers.js</p>
                <p>Web3.js</p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className=" ">
        <img
          src="about-img.png"
          className="my-16 mr-20"
          alt="David sitting in front of multiple computer screens, working on blockchain development projects"
        ></img>
      </div>
    </div>
  );
}

export default About;
