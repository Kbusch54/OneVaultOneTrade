import React, { useEffect, useState } from "react";
import CandleStickGraph from "../../components/graph/CandleStickGraph";
import { GraphData } from "../../types";
import { CryptoLogos, Tab, TabList, Avatar, CopyButton } from "@web3uikit/core";
import { PopoverDropdown, PopoverElement, Stepper } from "@web3uikit/core";
import {
  ChevronDoubleUpIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/solid";
import { EthColored, Link, Btc } from "@web3uikit/icons";
import { useMarketData } from "../../function/dydx";

type Props = {};

const VaultCard = (props: Props) => {
  //check stage
  //check if logged in
  //check ownership
  //check usdc bal

  const data: GraphData = [
    { x: new Date(2016, 6, 1), open: 5, close: 10, high: 15, low: 0 },
    { x: new Date(2016, 6, 2), open: 10, close: 15, high: 20, low: 5 },
    { x: new Date(2016, 6, 3), open: 15, close: 20, high: 22, low: 10 },
    { x: new Date(2016, 6, 4), open: 20, close: 10, high: 25, low: 7 },
    { x: new Date(2016, 6, 5), open: 10, close: 8, high: 15, low: 5 },
    { x: new Date(2016, 6, 6), open: 8, close: 20, high: 30, low: 8 },
    { x: new Date(2016, 6, 7), open: 20, close: 18, high: 23, low: 14 },
    { x: new Date(2016, 6, 8), open: 18, close: 12, high: 22, low: 5 },
    { x: new Date(2016, 6, 9), open: 12, close: 20, high: 30, low: 8 },
    { x: new Date(2016, 6, 10), open: 20, close: 18, high: 23, low: 14 },
    { x: new Date(2016, 6, 11), open: 18, close: 12, high: 22, low: 5 },
  ];
  const stage = 2;
  const { marketData, isPending } = useMarketData();

  return (
    <div>
      <Stepper
        stepperWidth={8}
        contentPadding="10px"
        headerWidth={10}
        isCompletedPageHidden
        hasNavButtons={false}
        orientation="vertical"
        step={stage}
        stepData={[
          {
            stepTitle: "Created",
            content: (
              <div className="grid md:grid-cols-4 mx-12 mt-4gap-x-44">
                <div className="col-span-3 mx-2">
                  {marketData && (
                    <div className="block md:p-6 md:border-2 md:border-purple-700">
                      <CandleStickGraph
                        data={marketData}
                        height={300}
                        width={1000}
                      />
                    </div>
                  )}
                  <div className="flex flex-row mt-4 text-slate-500 justify-between   ">
                    <div className="flex flex-row">
                      <div>
                        {" "}
                        <Avatar
                          image="https://academy.moralis.io/wp-content/uploads/2021/12/Illustration4_home.svg"
                          isRounded
                          theme="image"
                          // size={90}
                        />
                      </div>
                      <div className="space-x-2 flex flex-col mx-2">
                        <div className="flex flex-row space-x-2 text-lg">
                          <div className="text-white">Pump and dump boi</div>
                          <div>#734</div>
                        </div>
                        <div>Bob Trader</div>
                      </div>
                    </div>
                    <div className="">hello 2</div>
                  </div>
                  <div className="flex flex-row  text-slate-400 mb-6 justify-evenly text-center">
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
                </div>
                <div className="col-span-1 bg-white">hello </div>
              </div>
            ),
          },
          {
            content: (
              <div className="grid md:grid-cols-4 mx-12 mt-4gap-x-44">
                <div className="col-span-3 mx-2">
                  {marketData && (
                    <div className="block md:p-6 md:border-2 w-full md:border-purple-700">
                      <CandleStickGraph
                        data={marketData}
                        height={300}
                        width={1000}
                      />
                    </div>
                  )}
                  <div className="flex flex-row mt-4 text-slate-500 justify-between   ">
                    <div className="flex flex-row">
                      <div>
                        {" "}
                        <Avatar
                          image="https://academy.moralis.io/wp-content/uploads/2021/12/Illustration4_home.svg"
                          isRounded
                          theme="image"
                          // size={90}
                        />
                      </div>
                      <div className="space-x-2 flex flex-col mx-2">
                        <div className="flex flex-row space-x-2 text-lg">
                          <div className="text-white">Pump and dump boi</div>
                          <div>#734</div>
                        </div>
                        <div>Bob Trader</div>
                      </div>
                    </div>
                    <div className="">
                      Copy Link
                      <CopyButton text={`${window.location}`} revertIn={6500} />
                    </div>
                  </div>
                  <div className="flex flex-row  text-slate-400 mb-6 justify-evenly text-center">
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
                </div>
                <div className="col-span-1 bbackdrop-blur-md border-[.2px]  rounded-2xl bg-gradient-to-r from-purple-700 via-purple-500 to-sky-500 max-w-[450px] m-2 p-1 ">
                  <div className="flex flex-col bg-purple-800/70 border h-full  rounded-2xl p-1 text-slate-400 ">
                    <div className="m-2">
                      <div className="flex flex-row justify-between">
                        <div>Executed Entry: </div>
                        <div>$18,109.64</div>
                      </div>
                      <div className="flex flex-row justify-between">
                        <div>Executed Exit: </div>
                        <div>$17,419.22</div>
                      </div>
                      <hr />
                    </div>
                    <div className="mx-2">
                      <div className="flex flex-row justify-between">
                        <div>Position size: </div>
                        <div>$10,000</div>
                      </div>
                      <div className="flex flex-row justify-between">
                        <div>STV at Entry: </div>
                        <div>$1,000</div>
                      </div>
                      <div className="flex flex-row justify-between">
                        <div>STV at Entry: </div>
                        <div>$1,000</div>
                      </div>
                      <div className="flex flex-row justify-between">
                        <div>STV at Entry: </div>
                        <div>$1,000</div>
                      </div>
                      <div className="flex flex-row justify-between">
                        <div>Final Value: </div>
                        <div>$1,352.02</div>
                      </div>
                      <div className="flex flex-row justify-between">
                        <div>Final Pnl: </div>
                        <div>$352.02</div>
                      </div>
                      <div className="flex flex-row justify-between">
                        <div>STV Pnl: </div>
                        <div>$352.02</div>
                      </div>
                      <hr />
                    </div>
                    <div className="m-2">
                      <div className="flex flex-row justify-between">
                        <div>Executed Entry: </div>
                        <div>$18,109.64</div>
                      </div>
                      <div className="flex flex-row justify-between">
                        <div>Executed Exit: </div>
                        <div>$17,419.22</div>
                      </div>
                      <hr />
                    </div>
                    <div className="m-2">
                      <div className="flex flex-row justify-between">
                        <div>My Investment: </div>
                        <div>-</div>
                      </div>
                      <div className="flex flex-row justify-between">
                        <div>Current Investment Value: </div>
                        <div>-</div>
                      </div>
                      <div className="flex flex-row justify-between">
                        <div>Current Investment Pnl: </div>
                        <div>-</div>
                      </div>
                    </div>

                    <hr />
                  </div>
                </div>
              </div>
            ),
            stepTitle: "Pooling",
          },
          {
            content: (
              <div>
                <p>
                  If any button ID = prev
                  <br />
                </p>
                <button id="prev">prev</button>
                <p>
                  It can be used to navigate too
                  <br />
                </p>
              </div>
            ),
            stepTitle: "Waiting",
          },
          {
            content: (
              <p>
                Stepper is set to 100% height so you can use a parent div to
                control its height and it will fill the space dynamically. This
                parent div is set to 450px height. This means the buttons stay
                fixed to the bottom in the same place always
              </p>
            ),
            stepTitle: "Active",
          },
          {
            content: (
              <p>you can pass any content, we hope you like the stepper</p>
            ),
            stepTitle: "Closed",
          },
        ]}
      />
    </div>
  );
};

export default VaultCard;
