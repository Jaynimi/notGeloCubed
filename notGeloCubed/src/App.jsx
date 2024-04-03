import { useState } from "react";
import "./App.css";
import Blog from "./components/Blog";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      {/* <SignIn />
      <SignUp />
      <AuthDetails /> */}
    </>
  );
}

export default App;
