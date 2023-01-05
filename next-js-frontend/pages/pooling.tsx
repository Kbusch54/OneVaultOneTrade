import React from "react";
import PoolingCard from "../components/poolingCards/PoolingCard";
import { PopoverDropdown, PopoverElement } from "@web3uikit/core";
import {
  ChevronDoubleUpIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/solid";
// import { getMarketData } from "../function/dydx";
import { EthColored, Link, Btc } from "@web3uikit/icons";
type Props = {};

const pooling = (props: Props) => {
  const length = [0, 1, 2, 3, 4, 5];
  return (
    <div className="">
      <div className="flex flex-row justify-between mx-8 h-10 mb-6 mt-4 text-white   ">
        <div className="flex flex-row justify-items-stretch align-middle">
          <div className="px-8 py-2 bg-yellow-300 border rounded-2xl text-black">
            <div className="flex flex-row  justify-center space-x-2 font-semibold   ">
              <p>Refresh</p>
              <div className=" mt-[.2rem]">
                <ArrowPathIcon height={20} />
              </div>
            </div>
          </div>
          <div className="px-8 py-2 bg-purple-700/60 border rounded-xl mx-4">
            <PopoverDropdown
              //   onClick={function noRefCheck() {}}
              parent={<div>Asset</div>}
              position="bottom"
            >
              <PopoverElement
                backgroundColor="transparent"
                height={50}
                iconSize={30}
                icon={<Btc />}
                onClick={function noRefCheck() {}}
                text="BTC"
                textColor="#FFFFFF"
                textSize={20}
                width={260}
              />
              <PopoverElement
                backgroundColor="transparent"
                height={50}
                iconSize={30}
                icon={<EthColored />}
                onClick={function noRefCheck() {}}
                text="Eth"
                textColor="#FFFFFF"
                textSize={20}
                width={260}
              />
              <PopoverElement
                backgroundColor="transparent"
                height={50}
                iconSize={30}
                icon={<Link color="red" />}
                onClick={function noRefCheck() {}}
                text="Link"
                textColor="#FFFFFF"
                textSize={20}
                width={260}
              />{" "}
            </PopoverDropdown>
          </div>
          <div className="px-8 py-2 bg-purple-700/60 border rounded-xl mx-4">
            <PopoverDropdown
              //   onClick={function noRefCheck() {}}
              parent={<div>Direction</div>}
              position="bottom"
            >
              <PopoverElement
                backgroundColor="transparent"
                height={50}
                iconSize={30}
                icon={<ArrowTrendingUpIcon color="green" />}
                onClick={function noRefCheck() {}}
                text="Long"
                textColor="#FFFFFF"
                textSize={20}
                width={260}
              />
              <PopoverElement
                backgroundColor="transparent"
                height={50}
                iconSize={30}
                icon={<ArrowTrendingDownIcon color="red" />}
                onClick={function noRefCheck() {}}
                text="Short"
                textColor="#FFFFFF"
                textSize={20}
                width={260}
              />{" "}
            </PopoverDropdown>
          </div>
        </div>
        <div className="px-8 py-2 bg-purple-700/60 border rounded-xl mx-4">
          <PopoverDropdown
            //   onClick={function noRefCheck() {}}
            parent={<div>Newest</div>}
            position="bottom"
          >
            <PopoverElement
              backgroundColor="transparent"
              height={50}
              iconSize={30}
              //   icon={<div>oldest</div>}
              onClick={function noRefCheck() {}}
              text="Oldest"
              textColor="#FFFFFF"
              textSize={20}
              width={260}
            />
            <PopoverElement
              backgroundColor="transparent"
              height={50}
              iconSize={30}
              //   icon={<div>Highest Investor Level</div>}
              onClick={function noRefCheck() {}}
              text="Highest Investor Level"
              textColor="#FFFFFF"
              textSize={20}
              width={260}
            />{" "}
            <PopoverElement
              backgroundColor="transparent"
              height={50}
              iconSize={30}
              //   icon={<div>Lowest Investor Level</div>}
              onClick={function noRefCheck() {}}
              text="Lowest Investor Level"
              textColor="#FFFFFF"
              textSize={20}
              width={260}
            />{" "}
          </PopoverDropdown>
        </div>
      </div>
      <div className="flex flex-row flex-wrap gap-y-4 gap-x-4  justify-center text-center">
        {length.map((len) => (
          <PoolingCard key={len} />
        ))}
      </div>
    </div>
  );
};

export default pooling;
