import React, { useState } from "react";
import DarkHeader from "../../components/darkHeader";
import Footer from "../../components/footer";
import Header from "../../components/header";
import RoyaltyFreeMusicContentArea from "../../components/royaltyFreeMusicContentArea";
import "./royaltyFreeMusic.css";

const RoyaltyFreeMusic = () => {
  const [openSideBar, setOpenSideBar] = useState(true);
  const toggleSideBar = () => {
    setOpenSideBar((prev) => !prev);
  };
  return (
    <div>
      <Header />
      <DarkHeader toggleSideBar={toggleSideBar} sidebar={true} />
      <RoyaltyFreeMusicContentArea
        openSideBar={openSideBar}
        toggleSideBar={toggleSideBar}
      />
      <Footer />
    </div>
  );
};

export default RoyaltyFreeMusic;
