import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import data from '../../src/assets/data.js'
import { Link } from "react-router-dom";

const CardsItem = () => {
  return <div className="card" style={{
    display:"flex",
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"space-around",
    alignItems:"center",
    cursor:"pointer",
    padding:"5px",
    marginBottom:"15px"
  }}>
   {data.map((item)=>{
    return <div key={item.id}>
       <Card style={{ width: '18rem' }} className="cards">
      <Card.Img variant="top" className="img" style={{height:"200px"}} src={item.image} />
      <Card.Body>
        <Card.Title className="text-center p-1 text-bg-danger rounded-3">{(item.title)}</Card.Title>
        <Card.Text>
          {item.desc}
        </Card.Text>
        <center><Link className="text-decoration-none button" to={item.source}>Click here..</Link></center>
      </Card.Body>
    </Card>
      </div>
   })}
  </div>;
};

export default CardsItem;
