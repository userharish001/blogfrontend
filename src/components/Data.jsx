import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Dashboard from "../pages/Dashboard";

const Data = () => {
  const [count, setCount] = useState(1);
  const [data, setData] = useState([]);
  const [pokemondata, setPokemondata] = useState();
  const [name, setName] = useState("");
  const [image, setImage] = useState();
  const url = `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`;
  const url2 = `https://pokeapi.co/api/v2/pokemon/${count}`;
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const pokemon = await res.json();
      const pokemonData = pokemon.results;
      const pokemonUrl = pokemonData.map((item) => {
        return item.url;
      });
      const urlData = await fetch(url2);
      const allData = await urlData.json();
      const pokemonImage = allData.sprites.other.dream_world.front_default;
      // console.log(pokemonData);
      // console.log(pokemonUrl);
      // console.log(allData);
      // console.log(pokemonImage);
      setData(pokemonData);
      setPokemondata(allData);
      setImage(pokemonImage);
      // console.log(pokemondata);
    }
    fetchData();
  }, []);
  return <div>
  </div>;
};

export default Data;
