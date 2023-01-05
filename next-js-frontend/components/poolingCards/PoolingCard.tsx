import React from "react";
import { Home as HomeIcon, EthColored } from "@web3uikit/icons";
// import getStats from "../../function/dydx";
import {
  ChevronDoubleUpIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/solid";
import { CryptoLogos, Tab, TabList, Avatar } from "@web3uikit/core";
import CandleStickGraph from "../graph/CandleStickGraph";
import { GraphData, CandleData } from "../../types";
import Link from "next/link";
// import {
//   Market,
//   MarketStatisticDay,
//   DydxClient,
// } from "@dydxprotocol/v3-client";
import { useMarketData } from "../../function/dydx";

type Props = {};

const PoolingCard = (props: Props) => {
  const marketDataHook = useMarketData();
  console.log(marketDataHook);

  const progressPercentage = 12;

  return (
    <div className="flex flex-col justify-center text-center backdrop-blur-md border-[.2px]  rounded-2xl bg-gradient-to-r from-purple-700 via-purple-500 to-sky-500 max-w-[450px] min-w-[450px] p-1 ">
      <div className="bg-slate-800  border relative  rounded-2xl p-1 text-slate-400 ">
        <Link
          key={1}
          href={{
            pathname: `/card/${1}`,
          }}
        >
          <div>
            <div className=" mb-8 flex justify-center  ">
              {!marketDataHook.isPending &&
                !marketDataHook.error &&
                marketDataHook.marketData && (
                  <CandleStickGraph
                    data={marketDataHook.marketData}
                    height={200}
                    width={550}
                  />
                )}
            </div>
            <div className="grid grid-cols-3 mx-2 mb-4 place-items-center">
              <div className="justify-self-start">chain</div>
              <div className="flex flex-col justify-self-center  ">
                <div className="absolute top-[16%] right-[40%] ">
                  <Avatar
                    image="https://academy.moralis.io/wp-content/uploads/2021/12/Illustration4_home.svg"
                    isRounded
                    theme="image"
                    size={90}
                  />
                </div>
                <div className="text-white font-bold">marketDataHookTrader</div>
                <div>Social media</div>
                <div className=" ">9 Trades</div>
              </div>

              <div className="justify-self-end ">
                Lev:
                <span className="text-white">9.0x</span>
              </div>
            </div>

            <div className="font-bold text-white">Long On Eth</div>
            <div>#932</div>
            <div className="mt-4 mb-6">
              Description Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Autem, numquam rerum. Magnam obcaecati illo tempora sit qui
              iusto.
            </div>
            <div className="flex flex-row text-sm text-slate-400 mb-6 justify-evenly text-center">
              <div className="flex flex-col gap-y-2 ">
                <div>Asset</div>
                <div className="ml-1">
                  <EthColored fontSize="30px" />
                </div>
              </div>
              <div className="flex flex-col gap-y-1 ">
                <div>Direction</div>
                <div className="ml-2">
                  <ArrowTrendingUpIcon
                    // fontSize={"20px"}
                    height={"40px"}
                    color={"green"}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-y-4">
                <div>Planned Entry</div>
                <div className="text-white">$1,383</div>
              </div>
              <div className="flex flex-col gap-y-4">
                <div>Planned Target</div>
                <div className="text-green-500">$1,475</div>
              </div>
              <div className="flex flex-col gap-y-4">
                <div>Liquidation</div>
                <div className="text-red-500">$1,332</div>
              </div>
            </div>
            <div className="flex flex-col mx-4">
              <div className="flex flex-row justify-between text-white mb-2">
                <div>$12,000</div>
                <div>$100,000</div>
              </div>
              <div className="text-center h-6 border rounded-2xl bg-gray-300">
                <div
                  style={{ width: `${progressPercentage}%` }}
                  className={
                    "h-full border rounded-2xl bg-gradient-to-r from-purple-700 via-purple-500 to-sky-500"
                  }
                ></div>
              </div>
              <div className="flex flex-row justify-between">
                <div>Depsosited</div>
                <div>Max</div>
              </div>
            </div>
          </div>
        </Link>
        <div className="flex flex-row justify-center text-center m-2 gap-x-4  text-slate-400 ">
          <div className="px-4 py-2 bg-sky-600 border rounded-3xl">
            time left
          </div>
          <div className="px-4 py-2 bg-purple-600 border rounded-3xl">Join</div>
        </div>
      </div>
    </div>
  );
};

export default PoolingCard;
