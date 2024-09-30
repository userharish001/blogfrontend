import React, { useEffect, useState } from "react";
import { Image, Spinner, Alert, Row, Col } from "react-bootstrap";
import Footer from "../components/Footer";
import axios from "axios";

const Home = ({ data, image }) => {
  const [cat, setCat] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  async function fetchCats() {
    setLoading(true); // Set loading to true before fetching
    setError(null); // Reset any previous errors
    try {
      const res = await axios.get(
        "https://api.thecatapi.com/v1/images/search?limit=10"
      );
      setCat(res.data); // Set the cat data
    } catch (error) {
      setError("Failed to load cat images. Please try again."); // Handle error
    } finally {
      setLoading(false); // Stop loading regardless of success or error
    }
  }

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <div>
      <p className="h1 text-center px-2 py-1 text-bg-dark">Blog app</p>
      <Image
        src={image}
        fluid
        style={{ objectFit: "cover", height: 18 + "rem", width: "100%" }}
      />
      {loading && <Spinner animation="border" />}{" "}
      {/* Show spinner while loading */}
      {error && <Alert variant="danger">{error}</Alert>}{" "}
      {/* Show error message if any */}
      {!loading && !error && Array.isArray(cat) && (
        <Row>
          {cat.map((item) => (
            <Col key={item.id} md={2} sm={6} xs={12} className="mb-4">
              <Image src={item.url} fluid style={{ height: "100%", width: "100%" }} />
            </Col>
          ))}
        </Row>
      )}
      {data.map((breed, index) => (
        <ul key={index}>
          <li>{breed.name}</li>
          <p className="p-2">{breed.description}</p>
        </ul>
      ))}
      <Footer />
    </div>
  );
};

export default Home;
