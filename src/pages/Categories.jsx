import axios from "axios";
import React, { useEffect, useState } from "react";
import Home from "./Home";
import Cards from "../components/Cards";
import { Button } from "react-bootstrap";

const list1 = [
  {
    id: 1,
    title: "Animals",
    description:
      "In every corner of the earth, animals thrive, From the soaring eagle in the sky to the humble and beneath the ground.",
  },
  {
    id: 2,
    title: "Cartoon",
    description:
      "We provide information regarding cartoons that is most popular in previous or today time of the television.",
  },
  {
    id: 3,
    title: "News",
    description:
      "We provide news regarding worldwide. We can cover previous 24 hours news that show as early as possible",
  },
  {
    id: 4,
    title: "Dog breeds",
    description:
      "we provide data about dog breeds that can collected from worldwide dog rare species or someone is banned from country",
  },
];

const Categories = () => {
  const API_KEY = `0Kwma_qKugY-HdLbdpgv-tucd1TqHAK0LKwYP2aAeyc`
  const [image,setImage] = useState([]);
  const api =`https://api.unsplash.com/photos/?client_id=${API_KEY}`;
  async function fetchImage(){
    const res = await axios.get(api);
    // console.log(res.data);
    const data = res.data.map((item)=>{
      return item.urls;
    })
    setImage(data)
    // console.log(image);
  }
  useEffect(()=>{
    fetchImage();
  },[])
 
  return (
    <>{image.map((item,idx)=>{
      return <Cards key={idx} full={item.full}/>
    })}
    </>
  );
};

export default Categories;
