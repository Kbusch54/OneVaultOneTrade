import Image from "next/image";

// import CryptoLogos from "web3ui";
import { CryptoLogos, Tab, TabList, Avatar } from "@web3uikit/core";
import {
  ChevronDoubleUpIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/solid";

import Hero from "../components/landingPage/Hero";
import { Home as HomeIcon, EthColored } from "@web3uikit/icons";

import React, { useEffect, useState, useRef } from "react";
import Docs from "../components/landingPage/Docs";
import Overview from "../components/landingPage/Overview";

type arg = {
  openValue: string;
  closeValue: string;
  highValue: string;
  lowValue: string;
};

export default function Home() {
  const [intiialRender, setIntiialRender] = useState(false);

  const handleOverview = () => {
    const section = document.getElementById("#overview");
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const handleHero = () => {
    const section = document.getElementById("#hero");
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleDocs = () => {
    const section = document.getElementById("#docs");
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    if (!intiialRender) {
      setIntiialRender((prev) => true);
    }
  }, [intiialRender]);
  if (!intiialRender) {
    return <></>;
  } else {
    return (
      <div className="snap-mandatory snap-y overflow-y-scroll  scrollbar scrollbar-track-green-400/20 scrollbar-thumb-[#F7AB0A]">
        <section id="#hero" className="snap-start">
          <Hero
            handleDocs={handleDocs}
            handleHero={handleHero}
            handleOverview={handleOverview}
          />
        </section>
        <section id="#docs" className="snap-start">
          <Docs />
        </section>
        <section id="#overview" className=" snap-start ">
          <Overview />
        </section>

        <div>
          <div onClick={handleHero} className="">
            <footer className="fixed bottom-5 w-full cursor-pointer ">
              <div className="flex flex-col items-center justify-center">
                {/* <ChevronDoubleUpIcon
                onClick={handleHero}
                color={"blue"}
                className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer text-purple-600"
              /> */}
                <HomeIcon fontSize={"25pxs"} color={"purple"} />

                <p className="text-xs text-purple-600">HOME</p>
              </div>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}
