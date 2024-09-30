import React, { useEffect, useState } from "react";
import { Image,Row,Col } from "react-bootstrap";

const Dashboard = ({poke}) => {
  const [images,setImages] = useState([]);
  console.log(poke);
  const image = poke.map((item)=>{
    return item.images;
  })
  console.log(image)
  useEffect(()=>{
    setImages(image)

  },[])
  return (
    <div>
    <Row>
      {images.map((item, idx) => (
        <Col key={idx} md={3} sm={6} xs={12} className="mb-4">
          <Image 
            style={{ width: "18rem" }} 
            src={item.large} 
            fluid 
          />
        </Col>
      ))}
    </Row>
  </div>
  );
};

export default Dashboard;
