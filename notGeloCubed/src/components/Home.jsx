import React from "react";
import Blog from "./Blog";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const Blog = () => {
    navigate("/blog");
    console.log("errrr");
  };

  return (
    <div>
      <p>Home!</p>
      <button onClick={Blog}>Blog</button>
    </div>
  );
}

export default Home;
