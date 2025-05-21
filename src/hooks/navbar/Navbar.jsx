import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import brandlogo from "/assets/img/brandlogo.webp";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="logo-container">
          <div className="logo">
            <img src={brandlogo} alt="BlockChat Logo" className="logos" />
          </div>
        </div>

        <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/About"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>
          <NavLink
            to="/Team"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Team
          </NavLink>
          <NavLink
            to="/Gallery"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Gallery
          </NavLink>
          <NavLink
            to="/Store"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Nature Store
          </NavLink>
          <NavLink
            to="/Involve"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Get Involve
          </NavLink>
          <NavLink
            to="/Contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact Us
          </NavLink>
        </div>

        <div className="navbar-actions">
          <Link to="/donate">
            <button className="btn-download">Donate</button>
          </Link>
        </div>

        <div className="menu-icon" onClick={toggleSidebar}>
          {sidebarOpen ? <FiX /> : <FiMenu />}
        </div>
      </nav>

      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <img src={brandlogo} alt="Logo" className="sidebar-logo" />
          <button
            className="sidebar-close"
            onClick={toggleSidebar}
            aria-label="Close sidebar"
          >
            <FiX />
          </button>
        </div>

        <div className="sidebar-links">
          <NavLink to="/" onClick={toggleSidebar}>
            Home
          </NavLink>
          <NavLink to="/Courses" onClick={toggleSidebar}>
            Courses
          </NavLink>
          <NavLink to="/About" onClick={toggleSidebar}>
            About
          </NavLink>
          <NavLink to="/Contact" onClick={toggleSidebar}>
            Contact Us
          </NavLink>
        </div>

        <div className="sidebar-footer">
          <Link to="/donate">
            <button className="btn-enroll">Donate</button>
          </Link>
        </div>
      </div>

      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={toggleSidebar}></div>
      )}
    </>
  );
};

export default Navbar;
