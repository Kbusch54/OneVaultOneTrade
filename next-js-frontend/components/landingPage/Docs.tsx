import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import blockImage from "../../public/assets/blockLogoTransaparent.png";
import { CryptoLogos, Tab, TabList } from "@web3uikit/core";

type Props = {};

const Docs = (props: Props) => {
  return (
    <div className="h-screen m-0 mx-4 md:mx-24  relative  justify-center">
      <motion.div
        className=" hidden md:block absolute top-20 right-40 translate-x-24  "
        initial={{
          y: -300,
          opacity: 0,
          z: 10,
        }}
        transition={{ duration: 2 }}
        whileInView={{ opacity: 1, x: 0, y: 0, z: -10 }}
      >
        <Image
          alt={"blob"}
          src={
            "https://moralis.io/wp-content/uploads/2021/06/blue-blob-background-2.svg"
          }
          className="rotate-[209deg] mr-32"
          height={800}
          width={800}
        />
        <Image
          alt={"blob"}
          src={
            "https://moralis.io/wp-content/uploads/2021/06/blue-blob-background-2.svg"
          }
          className="translate-x-48 -translate-y-44 mb-32"
          height={800}
          width={800}
        />
      </motion.div>
      <h1 className="text-3xl text-center text-white">Description</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 m-0 ml-12 md:mr-8  md:m-8   ">
        <div className="lg:span-cols-1 border-none bg-purple-500/30 rounded-2xl  drop-shadow-2xl  shadow-yellow-900 mt-6  md:border-2  md:border-l-[20px] md:border-b-[16px] md:border-purple-900/40  max-h-[90vh] max-w-[80vw]  overflow-y-scroll ">
          <h2 className="text-xl ml-2 my-4 text-white">White Paper</h2>

          <div className="sm:ml-2 md:m-4 ">
            <TabList
              isWidthAuto
              //   onChange={function noRefCheck() {}}
              tabStyle={"bulbSeperate"}
              isVertical={false}
              defaultActiveKey={1}
            >
              <Tab lineHeight={10} tabKey={1} tabName="Introduction">
                <div className="m-6 md:m-4 lg-m-2 text-md text-white">
                  <p>
                    Our trading platform is a decentralized platform that allows
                    users to invest in vault contracts controlled by managers.
                    These managers are responsible for interacting with the
                    perpetual protocol to generate profits for investors. The
                    platform is designed to provide a secure and transparent
                    environment for investors to engage in cryptocurrency
                    trading.
                  </p>
                </div>
              </Tab>
              <Tab lineHeight={10} tabKey={2} tabName="How it works">
                <div className="m-6 md:m-4 lg-m-2 text-md text-white">
                  <p>
                    {" "}
                    Users can deposit their Ethereum funds into a vault
                    contract, which is then controlled by a manager. The manager
                    has the ability to interact with the perpetual protocol to
                    execute trades on behalf of the investors. The profits
                    generated from these trades are split between the manager
                    and the investors, with the manager receiving a percentage
                    based on their rate of return and the number of trades they
                    execute.
                  </p>
                  <p>
                    {" "}
                    Managers can control a vault for one trade at a time, with a
                    minimum percentage of deposit required to participate. This
                    ensures that the platform maintains a high level of
                    liquidity and allows for a diverse range of investment
                    opportunities.
                  </p>
                </div>
              </Tab>
              <Tab
                lineHeight={10}
                tabKey={3}
                tabName="Security and transparency"
              >
                <div className="m-6 md:m-4 lg-m-2 text-md text-white">
                  <p>
                    Our trading platform is built on the Ethereum blockchain,
                    which provides a secure and transparent environment for
                    investment. All transactions are recorded on the blockchain
                    and are visible to all users, ensuring that the platform is
                    transparent and accountable.
                  </p>
                  <p>
                    {""}
                    In addition, the platform uses smart contracts to automate
                    the process of trade execution and profit distribution,
                    eliminating the need for manual intervention and minimizing
                    the risk of errors or fraud.
                  </p>
                </div>
              </Tab>
              <Tab lineHeight={10} tabKey={4} tabName="Conclusion">
                <div className="mx-4 my-2 text-md text-white">
                  <p>
                    {" "}
                    One Vault One Trade offers a unique investment opportunity
                    for users looking to participate in the cryptocurrency
                    market. With its decentralized structure and transparent
                    operations, the platform provides a secure and transparent
                    environment for investors to engage in cryptocurrency
                    trading. By entrusting their funds to experienced managers,
                    investors can take advantage of the potential profits
                    available through the perpetual protocol while minimizing
                    their own risk.
                  </p>
                </div>
              </Tab>
            </TabList>
          </div>
        </div>
        <div className="hidden lg:block md:span-cols-1 mt-10 z-10 ml-44 ">
          {/* <CryptoLogos chain="optimism" size="200px" /> */}
          <Image alt={"block"} src={blockImage} height={400} width={400} />
        </div>
      </div>
    </div>
  );
};

export default Docs;
