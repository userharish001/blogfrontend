import React, { useEffect, useState } from "react";
import news from "/news.jpg";

const Posts = () => {
  const [posts, setPosts] = useState({});
  const key = "ac89a24e48ec4414b4ecc07148217682";
  const url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${key}`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const post = await res.json();
        const allpost = post.articles;
        setPosts(allpost);
      } catch (error) {
        console.log(error);
      }
      // console.log(posts);
    };
    fetchData();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        alignContent: "center",
      }}
    >
      {posts.length > 0 ? (
        posts.map(
          (
            item,
            index // Use index as key
          ) => (
            <div>
              <h2>{item.index}</h2>
              <div className="card" style={{ width: 18 + "rem" }}>
                <img
                  style={{
                    objectFit: "cover",
                    height: 200 + "px",
                    weight: 100 + "px",
                  }}
                  src={item.urlToImage || news}
                  className="card-img-top img-fluid"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title.substring(0, 50)}</h5>
                  <p className="card-text">{item.content.substring(0, 200)}</p>
                  <a href={item.url} className="btn btn-primary">
                    Click to more...
                  </a>
                </div>
              </div>
            </div>
          )
        )
      ) : (
        <p>Loading posts...</p> // Loading state
      )}
    </div>
  );
};

export default Posts;
