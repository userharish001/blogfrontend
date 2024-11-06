import React, { createContext, useEffect, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromChildren,
  Outlet,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Contactus from "./pages/Contactus";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NotFound from "./components/NotFound";
import axios from "axios";
import LogOut from "./components/LogOut";
import RootLayout from "./layouts/RootLayout";
import { useTheme } from "./components/ThemeContext";

const App = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [poke, setPoke] = useState([]);
  const url4 = "https://api.pokemontcg.io/v2/cards";
  useEffect(() => {
    async function fetchPoke() {
      const api = await axios.get(url4);
      // console.log(api.data.data)
      setPoke(api.data.data);
    }
    fetch("");
    fetchPoke();
  }, []);
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="posts" element={<Posts />} />
        <Route path="contact" element={<Contactus />} />
        <Route path="dashboard" element={<Dashboard poke={poke} />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="logout" element={<LogOut />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return (
    <div className={darkMode ? "bg-dark text-light" : "bg-light text-dark"}>
      <RouterProvider router={router} />
      <label class="switch">
        <input type="checkbox" onClick={toggleTheme} />
        <span class="slider"></span>
      </label>
    </div>
  );
};

export default App;
