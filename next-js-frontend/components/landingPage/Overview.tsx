import React from "react";
import { User } from "@web3uikit/icons";
import gear from "../../public/assets/gear.png";
import { ScaleIcon } from "@heroicons/react/20/solid";
import { Usdc } from "@web3uikit/icons";
import { CryptoLogos, Illustration, Tab, TabList } from "@web3uikit/core";
import Image from "next/image";

type Props = {};

const Overview = (props: Props) => {
  return (
    <div className="h-screen relative mx-8 md:mx-24 ">
      <div className="">
        <TabList defaultActiveKey={1} isVertical={true} tabStyle="bar">
          <Tab
            tabKey={1}
            tabName={
              <div className="mt-24 md:mt-[13rem]">
                <div>Manager</div>
              </div>
            }
          >
            <div className=" mt-24 md:mt-32  max-h-[500px] overflow-y-scroll backdrop-blur-md bg-white/20 border-2 border-slate-700  text-center">
              <div className="text-2xl">Manager</div>
              <User
                className="absolute h-40 w-40 md:left-auto -z-10 opacity-80"
                fontSize="50px"
              />
              <p className=" m-2 md:m-4 text-white">
                Anyone can become a manager, just click the create tradeVault
                tab at the top. As a manager your job is to pick the asset and
                price, you also must set a goal for amount you wish to raise
                from investors. There is no worry for other managers to steal
                your opportunity of the trade, the components can be kept secret
                on your discretion via our backend servers, howver once set
                these values cannot be changed. Once trade is active the asset
                and direction will be public. After the vault is created you
                will have 12 hours (testnet 5 min) maximum to either reach your
                goal or to go on to the next stage with what money you have
                raised. From here you may chose to return funds to investors or
                begin to trade. You will have 4 hours (testnet 20 min) once the
                pooling period has ended. You must trade the entire value of
                your vault contract while active. Here you are granted 72 hours
                (testnet 2 hours) to close your trade and return money to
                investors I.E One Vault One Trade. If the trade is profitable
                the manager will recieve his predetermined cut of the former,
                and the the remaining will be split to the investors according
                to their stake. If a loss no cut will be given however any
                remaining capital will be destributed as previously described.
                The managers account page will be updated accordingly, to
                reflect not only this trade but all previous.
              </p>
            </div>
          </Tab>
          <Tab
            tabKey={2}
            tabName={<div style={{ display: "flex" }}>Trader</div>}
          >
            <div className="mt-24 md:mt-32  max-h-[500px] overflow-y-scroll backdrop-blur-md bg-white/10 border-2 border-slate-700  text-center">
              <div className="text-2xl">Trader </div>
              <ScaleIcon
                color="white"
                className="absolute h-40 w-40 left-auto -z-10 opacity-10 "
                fontSize={"20px"}
              />
              <p className="m-4 text-white">
                Look for open vaults activley looking for investment I.E vaults
                that are pooling. The asset, direction and other information may
                be hidden while contract is pooling up to the managers
                discretion. There is no minimum investment, so feel free to
                spread the USDC to multiple managers. Depending on the Managers
                level their cut of the profits may differ, which can be observed
                on the pooling card. As a trader although you are not incharge
                of the investment, you can track how the managers positon is
                currently doing while the vault is active. And as an investor
                you are not required to hold onto your stake while the trade is
                active. You may sell off your stake via the erc20 token you are
                given upon investment. Not sure who to invest with just take a
                look at the managers account page and check out their track
                record.
              </p>
            </div>
          </Tab>
        </TabList>
      </div>
      <div className="hidden lg:block overflow-hidden  absolute top-24 -z-10 opacity-60 right-10  ">
        <Illustration height={800} logo="looking" />
      </div>

      <div className=" hidden z-20 hover:animate-bounce animate-none  lg:block overflow-hidden ">
        <Usdc className="" fontSize="200px" />
      </div>
    </div>
  );
};

export default Overview;
