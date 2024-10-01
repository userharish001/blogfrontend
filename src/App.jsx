import React, { createContext, useEffect, useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Categories from "./pages/Categories";
import Posts from "./pages/Posts";
import Contactus from "./pages/Contactus";
import Navbars from "./components/Navbars";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NotFound from "./components/NotFound";
import axios from "axios";
import Cards from "./components/Cards";
import LogOut from "./components/LogOut";

const App = () => {
  const [data, setData] = useState([]);
  const [image, setImage] = useState([]);
  const [pokemon, setPokemon] = useState([]);
  const [poke, setPoke] = useState([]);
  const url = "https://dogapi.dog/api/v2/breeds";
  const url2 = "https://dog.ceo/api/breeds/image/random";
  const url3 = "https://pokeapi.co/api/v2/pokemon?limit=100000";
  const url4 = "https://api.pokemontcg.io/v2/cards";
  useEffect(() => {
    async function fetchData() {
      const api = await axios.get(url);
      const apiData = api.data.data;
      const urlData = apiData.map((item) => {
        return item.attributes;
      });

      // console.log(urlData)
      setData(urlData);
    }
    async function fetchDog() {
      const api = await axios.get(url2);
      // console.log(api.data.message);
      const data = api.data.message;
      setImage(data);
      // console.log(image);
    }
    async function fetchPoke() {
      const api = await axios.get(url4);
      // console.log(api.data.data)
      setPoke(api.data.data);
    }
    fetchData();
    fetchDog();
    fetchPoke();
  }, []);
  // console.log(data);
  // async function fetchPokemon() {
  //   try {
  //     const res = await axios.get(url3);
  //     const data = res.data.results;
  //     // console.log(data);
  //     const detailedresults = data.map((item) => {
  //       return item.url;
  //     });
  //     // console.log(detailedresults);
  //     setPokemon(detailedresults);
  //     // const fetchAllUrls = async (urls) => {
  //     //   try {
  //     //     const responses = await Promise.all(pokemon);
  //     //   } catch (error) {
  //     //     console.error("Error fetching data: ", error);
  //     //   }
  //     // };
  //     // fetchAllUrls()
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // useEffect(() => {
  //   fetchPokemon();
  // }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbars />}>
          <Route path="/" element={<Home data={data} image={image} />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/dashboard" element={<Dashboard poke={poke} />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
