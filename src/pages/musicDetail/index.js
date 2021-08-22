/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import DarkHeader from "../../components/darkHeader";
import Footer from "../../components/footer";
import Header from "../../components/header";
import DetailArea from "./components/detailArea";
import MoreDetail from "./components/detailArea/moreDetail";


import "./musicDetail.css";

const MusicDetail = () => {  
  return (
    <div>
      <Header />
      <DarkHeader sidebar={false} />
      <DetailArea />
      <MoreDetail />
      <iframe id="sc-widget" src="https://w.soundcloud.com/player/?url=https://api.soundcloud.com/users/1539950/favorites" width="100%" height={465} scrolling="no" frameBorder="no" />            
      <Footer />
    </div>
  );
};

export default MusicDetail;
