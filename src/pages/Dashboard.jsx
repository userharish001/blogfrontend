import React, { useEffect, useState } from "react";
import { Image,Row,Col } from "react-bootstrap";

const Dashboard = ({poke}) => {
  const [images,setImages] = useState([]);
  // console.log(poke);
  const image = poke.map((item)=>{
    return item.images;
  })
  // console.log(image)
  useEffect(()=>{
    setImages(image)

  },[])
  return (
    <div>
      <Row>
        {images.map((item, idx) => (
          <Col 
            key={idx} 
            xl={3} lg={4} md={6} sm={6} xs={12} 
            className="mb-4 d-flex justify-content-center"
          >
            <Image 
              style={{ width: "100%", maxWidth: "18rem" }} 
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
