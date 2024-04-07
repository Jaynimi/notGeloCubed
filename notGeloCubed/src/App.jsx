import { useState } from "react";
import "./App.css";
import Blog from "./components/Blog";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      {/* <SignIn />
      <SignUp />
      <AuthDetails /> */}
    </>
  );
}

export default App;
