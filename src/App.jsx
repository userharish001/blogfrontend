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
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [image,setImage] = useState([]);
  const url = "https://dogapi.dog/api/v2/breeds";
  const url2 = "https://dog.ceo/api/breeds/image/random"
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
    async function fetchDog(){
      const api = await axios.get(url2);
      // console.log(api.data.message);
      const data = api.data.message;
      setImage(data);
      console.log(image);

    }
    fetchData();
    fetchDog();
  }, []);
  // console.log(data);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbars />}>
          <Route path="/home" element={<Home data = {data} image={image}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
