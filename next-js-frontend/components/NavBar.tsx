import React from "react";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <div className="">
      <div className="flex flex-row justify-between mt-6  text-white text-lg  px-8 py-2 ">
        <div className="bg-teal-500 px-12 py-4 mx-2 rounded-br-full  text-xl">
          One Vault One Trade
        </div>
        <div>Create Vault</div>
        <div>TradeVaults</div>
        <div>Actives Trades</div>
        <div className="">Faucet</div>
      </div>
    </div>
  );
};

export default NavBar;
