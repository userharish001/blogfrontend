import React, { useContext, useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import Navbars from "../components/Navbars";
import Footer from "../components/Footer";
import Posts from "./Posts";

const Home = ({ data, image }) => {
  // console.log(data);
  return (
    <div>
      <p className="h1 text-center px-2 py-1 text-bg-dark">Blog app</p>
      <Image src={image} fluid />
      {data && data.length > 0 ? (
        <ul>
          {data.map((breed, index) => (
            <>
              <li key={index}>{breed.name}</li>
              <p>{breed.description}</p>
            </>
          ))}
        </ul>
      ) : (
        <p>No data available</p>
      )}
      <Footer />
    </div>
  );
};

export default Home;
