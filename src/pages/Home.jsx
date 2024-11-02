import React from "react";
import Footer from "../components/Footer";
import blogbanner from "../../src/assets/blogbanner.jpg";
import CardsItem from "../components/CardsItem";

const Home = () => {

  return (
    <div>
      <p className="h1 text-center px-2 py-1">Blog App</p>
      <img
        src={blogbanner}
        style={{ objectFit: "cover", width: "100%" }}
        alt="Blog Banner"
      />
      <p className="p-4 m-1 text-center">
        Discover a world of insights, stories, and inspiration. Our blog offers
        a diverse range of topics, from travel and food to technology and
        wellness. Join us on this journey as we explore the latest trends, share
        personal experiences, and provide tips to enrich your daily life.
      </p>
      <CardsItem />
      <Footer />
    </div>
  );
};

export default Home;
