import React, { ReactNode } from "react";
import NavBar from "./NavBar";

type Props = {
  children: ReactNode;
};

const Layout = (props: Props) => {
  return (
    <>
      <NavBar />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
