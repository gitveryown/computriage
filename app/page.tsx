"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import stock from "../public/bg-img4.png";
import team from "../public/team.svg";
import logo from "../public/logo.svg";
import "./page.css";
import Backdrop from "@mui/material/Backdrop";
import { makeStyles } from "@mui/material";

// const [atHome, setAtHome] = useState('')

export default function Home() {

  return (
    <>
      <div className="animationContainer" id="animationContainer">
        <div className="imageContainer animated">
          <Image
            className="imageBg"
            src={stock}
            alt="stock"
            width={0}
            height={0}
          ></Image>

          <div className="text">
            <h2 className="title animatedText">COMPUTRIAGE</h2>
            <h3 className="subTitle">Where your data is secured</h3>
          </div>
          <div className="arrowContainer">
            <svg className="arrows">
              <Link href="#contentContainer">
                <path className="a1" d="M0 0 L30 32 L60 0"></path>
                <path className="a2" d="M0 20 L30 52 L60 20"></path>
                <path className="a3" d="M0 40 L30 72 L60 40"></path>
              </Link>
            </svg>
          </div>
        </div>
      </div>

      <div
        className="contentContainer"
        id="contentContainer"
        style={{ height: "100vh", scrollBehavior: "smooth" }}
      >
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
        <div className="contentTitleContainer">
          <h1 className="contentTitle">
            CompuTriage is an Enterprise and Solutions Architect Provider,
            Computer Forensics Crimes, Cyber Security, and IT Consulting company
            that creates technological visions and its effective implementation
            through IT strategy and take specific problems and propose a
            solution to support the enterprise vision. CompuTriage is a minority
            owned business that is NMSDC MBE Certified. Now a member of the High
            Technology Crime Investigation Association (HTCIA){" "}
          </h1>
        </div>
      </div>

      <div className="secondContentContainer" >
        <div className="secondContent">
          <div className="secondImgContainer">
            <Image
              className="teamImg"
              src={team}
              alt="team image"
              width={0}
              height={0}
            ></Image>
          </div>
          <ul className="listContainerText" >
            <li className="listItem">
              <h2 className="listTitle">Protection</h2>
              <p className="listp">
                With our expansive global coverage, we rapidly locate your
                vulnerabilies, wherever they've located, ensuring prompt and
                direct resolution. No intermediaries, no delays—just results.
              </p>
            </li>
            <li className="listItem">
              <h2 className="listTitle">Direct</h2>
              <p className="listp">
                {" "}
                Our no-middleman approach means no leakage maximizing your
                income through our complete global licensing and administration
                platform.
              </p>
            </li>
            <li className="listItem">
              <h2 className="listTitle">Transparent</h2>
              <p className="listp">
                We stand alone in offering 100% audit rights to all clients,
                reinforcing our commitment to transparency and trust in every
                transaction.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
