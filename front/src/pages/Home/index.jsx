import React from "react";
import Awesome from "../../components/Awesome";
import SliderImage from "../../components/SliderImage";
import Best from "../../components/Best";
import Subscribe from "../../components/Subscribe";
import Premium from "../../components/Premium";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="home">
        <SliderImage />
        <Awesome />
        <Best />
        <Subscribe />
        <Premium />
      </div>
    </>
  );
}

export default Home;
