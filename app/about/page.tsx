"use client";
import React from "react";
import "./about.css";
import Nav from "../component/Navbar/navbar";
import Footer from "../component/Footer/footer";

export default function Page() {
  return (
    <div>
      <Nav></Nav>
      <h1>This Is The About Page!</h1>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}
