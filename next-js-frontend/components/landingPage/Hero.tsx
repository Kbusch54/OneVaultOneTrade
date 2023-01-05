import Image from "next/image";
import backgroundImg from "../../public/assets/background.png";

import laptop from "../../public/assets/justLaptop.png";
// import CryptoLogos from "web3ui";

import React, { useEffect, useState, useRef } from "react";

type Props = {
  handleDocs: () => void;
  handleHero: () => void;
  handleOverview: () => void;
};

const Hero = (props: Props) => {
  return (
    <div className="h-screen relative">
      <div className="">
        <div className="flex justify-between p-12">
          <div className="flex flex-col ml-8 text-blue-400  ">
            <h1 className="text-white text-3xl font-black ">
              One Vault One Trade
            </h1>
            <div className="backdrop-blur-md bg-white/10 border-2 border-slate-700 lg:w-[40%] flex flex-col justify-center text-center ">
              <h3 className="mt-8 text-xl">A decentralized trading platform</h3>
              <p className="text-white m-4  ">
                OVOT allows users to either be an investor or a trader. Traders
                or vault managers will take possesion of a vault contract,
                allowing them to raise funds in order to be invested in
                utilizing our connected protocols.
              </p>
            </div>
            <div className="flex flex-row text-white">
              <div className="bg-purple-500 px-12 py-2 m-4 rounded-2xl">
                <button onClick={props.handleDocs}>Read Docs</button>
              </div>

              <div className="bg-sky-300 px-8 py-2 m-4 rounded-2xl">
                Connect Wallet
              </div>
            </div>
            <div className="flex flex-row space-x-4 text-white">
              <div className="bg-yellow-500 px-8 py-2 m-4 rounded-3xl">
                <button className="" onClick={props.handleOverview}>
                  Overview
                </button>
              </div>
            </div>
          </div>
          <div className="hidden lg:absolute -top-24  -right-64 lg:flex flex-col">
            <Image alt="laptop" src={laptop} height={1200} width={1200} />
          </div>
        </div>
        <div className="absolute top-0 -z-10">
          <Image
            src={backgroundImg}
            alt={"background"}
            // height={}
            className={"object-cover h-screen"}
            style={{ objectFit: "fill" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
