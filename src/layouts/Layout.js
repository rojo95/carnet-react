import React from "react";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Navbar />
        {/* <ToolBar/> */}
        {/* <Sides/> */}
        {/* <Backdrop/> */}
      </div>
      <main>{children}</main>
      <div>
        <h1>Pie de pagina</h1>
      </div>
    </>
  );
};

export default Layout;
