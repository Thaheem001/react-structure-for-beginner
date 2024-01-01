import React from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-red-300">
      <Header />
      <main className="flex-1 p-2 ">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
