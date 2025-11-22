import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.jpg"; // Correct path

export default function Navbar() {
  return (
    <header className="nav-bar">
      <div className="logo">
        <img src={logo} alt="Jyothi logo" />
        <h1>JYOTHI</h1>
      </div>
      <nav className="nav-op">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">Our Story</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/reservation" className="reservation-btn">Reservation</NavLink>
      </nav>
    </header>
  );
}
