import React, { useState, useEffect } from "react";
import Blog from "./Blog";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import { useNavigate, NavLink, useLocation } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
    console.log("Navigating to", path);
    // Close the menu after navigating
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      // Close the menu if the window width is greater than or equal to 768px
      if (window.innerWidth >= 768) {
        setIsDropdownOpen(false);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Run only once on component mount

  return (
    <div className="NavContainer">
      <div>
        <p className="logoStyle">funLogo</p>
      </div>
      <div>
        {/* Menu button for smaller screens */}
        <button className="menu-button" onClick={toggleDropdown}>
          {isDropdownOpen ? (
            <MdClose className="close-icon icon" />
          ) : (
            <MdMenu className="menu-icon icon" />
          )}
        </button>

        {/* Dropdown menu */}
        <div className={`dropdown ${isDropdownOpen ? "open" : ""}`}>
          {/* <button onClick={() => handleNavigation("/")}>Home</button>
          <button onClick={() => handleNavigation("/blog")}>Blog</button>
          <button onClick={() => handleNavigation("/about")}>About</button>
          <button onClick={() => handleNavigation("/services")}>
            Services
          </button>
          <button onClick={() => handleNavigation("/contact")}>Contact</button> */}

          <NavLink to="/" activeClassName="active" ClassName="inactive">
            Home
          </NavLink>
          <NavLink to="/blog" activeClassName="active">
            Blog
          </NavLink>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
          <NavLink to="/services" activeClassName="active">
            Services
          </NavLink>
          <NavLink to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </div>
      </div>

      <div>
        {/* Page buttons for larger screens */}
        <div className="page-buttons">
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/blog" activeClassName="active">
            Blog
          </NavLink>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
          <NavLink to="/services" activeClassName="active">
            Services
          </NavLink>
          <NavLink to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
