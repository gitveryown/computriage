"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.svg";
import "./page.css";
import Backdrop from "@mui/material/Backdrop";
import { makeStyles } from "@mui/material";

// const [atHome, setAtHome] = useState('')

export default function Home() {
  const refresh = () => {
    if (window.history.state !== null && window.scrollY === 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    refresh();
  }, []);

  return (
    <>
      <div className="animationContainer" id="animationContainer">
        <div className="videoContainer animated">
          <video className="bgVideo" autoPlay muted loop>
            <source src="/computriagestock_animation.mp4" type="video/mp4" />
            Your browser does not support this video tag
          </video>

          <div className="text">
            <h2 className="title animatedText">Computriage</h2>
            <h3>Where your data is secured</h3>
          </div>
          <svg className="arrows">
            <Link href="#contentContainer">
              <path className="a1" d="M0 0 L30 32 L60 0"></path>
              <path className="a2" d="M0 20 L30 52 L60 20"></path>
              <path className="a3" d="M0 40 L30 72 L60 40"></path>
            </Link>
          </svg>
        </div>
      </div>

      <div
        className="contentContainer"
        id="contentContainer"
        style={{ height: "2000px" }}
      >
        <hr className="lineBreak" />
        <header className="header">
          <nav className="nav">
            <div className="logo"></div>
            <div className="nav-links">
              <button className="notSelected">
                <Link href="/services">Services</Link>
              </button>
              <button className="notSelected">
                <Link href="/about">About Us</Link>
              </button>
              <button className="notSelected">
                <Link href="/contact">Contact Us</Link>
              </button>
            </div>
          </nav>
        </header>
        <h1>This is where new content will be </h1>
      </div>
    </>
  );
}
