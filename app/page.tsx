"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Circle from './component/Circle/circle'
import stock from "../public/cloud.jpeg";
import team from "../public/team.svg";
import "./page.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Footer from "./component/Footer/footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot) => {
      const element = dot as HTMLElement; 
      const speed = element.dataset.speed;
      gsap.to(dot, {
        color: '#86bbd8',
        scale: 1.5,
        ease: 'none',
        scrollTrigger: {
          trigger: dot,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      });
    });
  }, []);

  useEffect(() => {
    gsap.to(".scrolling-text", {
      y: -window.innerHeight,
      scrollTrigger: {
        trigger: ".secondContentContainer",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".contentTextContainer",
          scrub: 0.7,
          start: "top center",
          end: "bottom center",
          markers: false,
        },
      })
      .from(".spanText", {
        color: "#a1a1a1",
      })
      .to(".spanText", {
        color: "black",
        fontWeight: "500",
        width: "100%",
        stagger: 1.55,
      });
  }, []);

  const handleArrowClick = () => {
    const contentContainer = document.getElementById("contentTextContainer");
    contentContainer?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="animationContainer" id="animationContainer">
        <div className="imageContainer animated">
        <div className='container'>
      {[...Array(40)].map((_, i) => (
        <div
          key={i}
          className="dot"
          data-speed={Math.random() * 2}
          style={{
            position: 'absolute',
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
          }}
        >
          <Circle 
            size={Math.random() * 25 + 10} 
            position={{
              width: '100%',
              height: '100%',
            }}
          />
        </div>
      ))}
    </div>
      
          <div className="titleContainerText">
            <h2 className="title animatedText">COMPUTRIAGE</h2>
            <h3 className="subTitle">Where your data is secured</h3>
          </div>
          <div className="arrowContainer" onClick={handleArrowClick}>
            <svg className="arrows">
              <path className="a1" d="M0 0 L30 32 L60 0"></path>
              <path className="a2" d="M0 20 L30 52 L60 20"></path>
              <path className="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="contentContainer" id="contentContainer">
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
        <div className="contentTextContainer" id="contentTextContainer">
          <div className="contentText">
            <span className="spanText">C</span>
            <span className="spanText">o</span>
            <span className="spanText">m</span>
            <span className="spanText">p</span>
            <span className="spanText">u</span>
            <span className="spanText">T</span>
            <span className="spanText">r</span>
            <span className="spanText">i</span>
            <span className="spanText">a</span>
            <span className="spanText">g</span>
            <span className="spanText">e</span>
            <span className="spanText"> </span>
            <span className="spanText">i</span>
            <span className="spanText">s</span>
            <span className="spanText"> </span>
            <span className="spanText">a</span>
            <span className="spanText">n</span>
            <span className="spanText"> </span>
            <span className="spanText">E</span>
            <span className="spanText">n</span>
            <span className="spanText">t</span>
            <span className="spanText">e</span>
            <span className="spanText">r</span>
            <span className="spanText">p</span>
            <span className="spanText">r</span>
            <span className="spanText">i</span>
            <span className="spanText">s</span>
            <span className="spanText">e</span>
            <span className="spanText"> </span>
            <span className="spanText">a</span>
            <span className="spanText">n</span>
            <span className="spanText">d</span>
            <span className="spanText"> </span>
            <span className="spanText">S</span>
            <span className="spanText">o</span>
            <span className="spanText">l</span>
            <span className="spanText">u</span>
            <span className="spanText">t</span>
            <span className="spanText">i</span>
            <span className="spanText">o</span>
            <span className="spanText">n</span>
            <span className="spanText">s</span>
            <span className="spanText"> </span>
            <span className="spanText">A</span>
            <span className="spanText">r</span>
            <span className="spanText">c</span>
            <span className="spanText">h</span>
            <span className="spanText">i</span>
            <span className="spanText">t</span>
            <span className="spanText">e</span>
            <span className="spanText">c</span>
            <span className="spanText">t</span>
            <span className="spanText"> </span>
            <span className="spanText">P</span>
            <span className="spanText">r</span>
            <span className="spanText">o</span>
            <span className="spanText">v</span>
            <span className="spanText">i</span>
            <span className="spanText">d</span>
            <span className="spanText">e</span>
            <span className="spanText">r</span>
            <span className="spanText">,</span>
            <span className="spanText"> </span>
            <span className="spanText">C</span>
            <span className="spanText">o</span>
            <span className="spanText">m</span>
            <span className="spanText">p</span>
            <span className="spanText">u</span>
            <span className="spanText">T</span>
            <span className="spanText">r</span>
            <span className="spanText">i</span>
            <span className="spanText">a</span>
            <span className="spanText">g</span>
            <span className="spanText">e</span>
            <span className="spanText"> </span>
            <span className="spanText">i</span>
            <span className="spanText">s</span>
            <span className="spanText"> </span>
            <span className="spanText">a</span>
            <span className="spanText"> </span>
            <span className="spanText">m</span>
            <span className="spanText">i</span>
            <span className="spanText">n</span>
            <span className="spanText">o</span>
            <span className="spanText">r</span>
            <span className="spanText">i</span>
            <span className="spanText">t</span>
            <span className="spanText">y</span>
            <span className="spanText"> </span>
            <span className="spanText">o</span>
            <span className="spanText">w</span>
            <span className="spanText">n</span>
            <span className="spanText">e</span>
            <span className="spanText">d</span>
            <span className="spanText"> </span>
            <span className="spanText">b</span>
            <span className="spanText">u</span>
            <span className="spanText">s</span>
            <span className="spanText">i</span>
            <span className="spanText">n</span>
            <span className="spanText">e</span>
            <span className="spanText">s</span>
            <span className="spanText">s</span>
            <span className="spanText"> </span>
            <span className="spanText">t</span>
            <span className="spanText">h</span>
            <span className="spanText">a</span>
            <span className="spanText">t</span>
            <span className="spanText"> </span>
            <span className="spanText">c</span>
            <span className="spanText">r</span>
            <span className="spanText">e</span>
            <span className="spanText">a</span>
            <span className="spanText">t</span>
            <span className="spanText">e</span>
            <span className="spanText">s</span>
            <span className="spanText"> </span>
            <span className="spanText">t</span>
            <span className="spanText">e</span>
            <span className="spanText">c</span>
            <span className="spanText">h</span>
            <span className="spanText">n</span>
            <span className="spanText">o</span>
            <span className="spanText">l</span>
            <span className="spanText">o</span>
            <span className="spanText">g</span>
            <span className="spanText">i</span>
            <span className="spanText">c</span>
            <span className="spanText">a</span>
            <span className="spanText">l</span>
            <span className="spanText"> </span>
            <span className="spanText">v</span>
            <span className="spanText">i</span>
            <span className="spanText">s</span>
            <span className="spanText">i</span>
            <span className="spanText">o</span>
            <span className="spanText">n</span>
            <span className="spanText">s</span>
            <span className="spanText"> </span>
            <span className="spanText">a</span>
            <span className="spanText">n</span>
            <span className="spanText">d</span>
            <span className="spanText"> </span>
            <span className="spanText">i</span>
            <span className="spanText">t</span>
            <span className="spanText">s</span>
            <span className="spanText"> </span>
            <span className="spanText">e</span>
            <span className="spanText">f</span>
            <span className="spanText">f</span>
            <span className="spanText">e</span>
            <span className="spanText">c</span>
            <span className="spanText">t</span>
            <span className="spanText">i</span>
            <span className="spanText">v</span>
            <span className="spanText">e</span>
            <span className="spanText"> </span>
            <span className="spanText">i</span>
            <span className="spanText">m</span>
            <span className="spanText">p</span>
            <span className="spanText">l</span>
            <span className="spanText">e</span>
            <span className="spanText">m</span>
            <span className="spanText">e</span>
            <span className="spanText">n</span>
            <span className="spanText">t</span>
            <span className="spanText">a</span>
            <span className="spanText">t</span>
            <span className="spanText">i</span>
            <span className="spanText">o</span>
            <span className="spanText">n</span>
            <span className="spanText"> </span>
            <span className="spanText">t</span>
            <span className="spanText">h</span>
            <span className="spanText">r</span>
            <span className="spanText">o</span>
            <span className="spanText">u</span>
            <span className="spanText">g</span>
            <span className="spanText">h</span>
            <span className="spanText"> </span>
            <span className="spanText">I</span>
            <span className="spanText">T</span>
            <span className="spanText"> </span>
            <span className="spanText">s</span>
            <span className="spanText">t</span>
            <span className="spanText">r</span>
            <span className="spanText">a</span>
            <span className="spanText">t</span>
            <span className="spanText">e</span>
            <span className="spanText">g</span>
            <span className="spanText">y</span>
            <span className="spanText"> </span>
            <span className="spanText">a</span>
            <span className="spanText">n</span>
            <span className="spanText">d</span>
            <span className="spanText"> </span>
            <span className="spanText">t</span>
            <span className="spanText">a</span>
            <span className="spanText">k</span>
            <span className="spanText">e</span>
            <span className="spanText"> </span>
            <span className="spanText">s</span>
            <span className="spanText">p</span>
            <span className="spanText">e</span>
            <span className="spanText">c</span>
            <span className="spanText">i</span>
            <span className="spanText">f</span>
            <span className="spanText">i</span>
            <span className="spanText">c</span>
            <span className="spanText"> </span>
            <span className="spanText">p</span>
            <span className="spanText">r</span>
            <span className="spanText">o</span>
            <span className="spanText">b</span>
            <span className="spanText">l</span>
            <span className="spanText">e</span>
            <span className="spanText">m</span>
            <span className="spanText">s</span>
            <span className="spanText"> </span>
            <span className="spanText">a</span>
            <span className="spanText">n</span>
            <span className="spanText">d</span>
            <span className="spanText"> </span>
            <span className="spanText">p</span>
            <span className="spanText">r</span>
            <span className="spanText">o</span>
            <span className="spanText">p</span>
            <span className="spanText">o</span>
            <span className="spanText">s</span>
            <span className="spanText">e</span>
            <span className="spanText"> </span>
            <span className="spanText">a</span>
            <span className="spanText"> </span>
            <span className="spanText">s</span>
            <span className="spanText">o</span>
            <span className="spanText">l</span>
            <span className="spanText">u</span>
            <span className="spanText">t</span>
            <span className="spanText">i</span>
            <span className="spanText">o</span>
            <span className="spanText">n</span>
            <span className="spanText"> </span>
            <span className="spanText">t</span>
            <span className="spanText">o</span>
            <span className="spanText"> </span>
            <span className="spanText">s</span>
            <span className="spanText">u</span>
            <span className="spanText">p</span>
            <span className="spanText">p</span>
            <span className="spanText">o</span>
            <span className="spanText">r</span>
            <span className="spanText">t</span>
            <span className="spanText"> </span>
            <span className="spanText">t</span>
            <span className="spanText">h</span>
            <span className="spanText">e</span>
            <span className="spanText"> </span>
            <span className="spanText">e</span>
            <span className="spanText">n</span>
            <span className="spanText">t</span>
            <span className="spanText">e</span>
            <span className="spanText">r</span>
            <span className="spanText">p</span>
            <span className="spanText">r</span>
            <span className="spanText">i</span>
            <span className="spanText">s</span>
            <span className="spanText">e</span>
            <span className="spanText"> </span>
            <span className="spanText">v</span>
            <span className="spanText">i</span>
            <span className="spanText">s</span>
            <span className="spanText">i</span>
            <span className="spanText">o</span>
            <span className="spanText">n</span>
            <span className="spanText">.</span>
            <span className="spanText"> </span>
            <span className="spanText">C</span>
            <span className="spanText">o</span>
            <span className="spanText">m</span>
            <span className="spanText">p</span>
            <span className="spanText">u</span>
            <span className="spanText">T</span>
            <span className="spanText">r</span>
            <span className="spanText">i</span>
            <span className="spanText">a</span>
            <span className="spanText">g</span>
            <span className="spanText">e</span>
            <span className="spanText"> </span>
            <span className="spanText">i</span>
            <span className="spanText">s</span>
            <span className="spanText"> </span>
            <span className="spanText">a</span>
            <span className="spanText"> </span>
            <span className="spanText">m</span>
            <span className="spanText">i</span>
            <span className="spanText">n</span>
            <span className="spanText">o</span>
            <span className="spanText">r</span>
            <span className="spanText">i</span>
            <span className="spanText">t</span>
            <span className="spanText">y</span>
            <span className="spanText"> </span>
            <span className="spanText">o</span>
            <span className="spanText">w</span>
            <span className="spanText">n</span>
            <span className="spanText">e</span>
            <span className="spanText">d</span>
            <span className="spanText"> </span>
            <span className="spanText">b</span>
            <span className="spanText">u</span>
            <span className="spanText">s</span>
            <span className="spanText">i</span>
            <span className="spanText">n</span>
            <span className="spanText">e</span>
            <span className="spanText">s</span>
            <span className="spanText">s</span>
            <span className="spanText"> </span>
            <span className="spanText">t</span>
            <span className="spanText">h</span>
            <span className="spanText">a</span>
            <span className="spanText">t</span>
            <span className="spanText"> </span>
            <span className="spanText">i</span>
            <span className="spanText">s</span>
            <span className="spanText"> </span>
            <span className="spanText">N</span>
            <span className="spanText">M</span>
            <span className="spanText">S</span>
            <span className="spanText">D</span>
            <span className="spanText">C</span>
            <span className="spanText"> </span>
            <span className="spanText">M</span>
            <span className="spanText">B</span>
            <span className="spanText">E</span>
            <span className="spanText"> </span>
            <span className="spanText">C</span>
            <span className="spanText">e</span>
            <span className="spanText">r</span>
            <span className="spanText">t</span>
            <span className="spanText">i</span>
            <span className="spanText">f</span>
            <span className="spanText">i</span>
            <span className="spanText">e</span>
            <span className="spanText">d</span>
            <span className="spanText">.</span>
            <span className="spanText"> </span>
            <span className="spanText">N</span>
            <span className="spanText">o</span>
            <span className="spanText">w</span>
            <span className="spanText"> </span>
            <span className="spanText">a</span>
            <span className="spanText"> </span>
            <span className="spanText">m</span>
            <span className="spanText">e</span>
            <span className="spanText">m</span>
            <span className="spanText">b</span>
            <span className="spanText">e</span>
            <span className="spanText">r</span>
            <span className="spanText"> </span>
            <span className="spanText">o</span>
            <span className="spanText">f</span>
            <span className="spanText"> </span>
            <span className="spanText">t</span>
            <span className="spanText">h</span>
            <span className="spanText">e</span>
            <span className="spanText"> </span>
            <span className="spanText">H</span>
            <span className="spanText">i</span>
            <span className="spanText">g</span>
            <span className="spanText">h</span>
            <span className="spanText"> </span>
            <span className="spanText">T</span>
            <span className="spanText">e</span>
            <span className="spanText">c</span>
            <span className="spanText">h</span>
            <span className="spanText">n</span>
            <span className="spanText">o</span>
            <span className="spanText">l</span>
            <span className="spanText">o</span>
            <span className="spanText">g</span>
            <span className="spanText">y</span>
            <span className="spanText"> </span>
            <span className="spanText">C</span>
            <span className="spanText">r</span>
            <span className="spanText">i</span>
            <span className="spanText">m</span>
            <span className="spanText">e</span>
            <span className="spanText"> </span>
            <span className="spanText">I</span>
            <span className="spanText">n</span>
            <span className="spanText">v</span>
            <span className="spanText">e</span>
            <span className="spanText">s</span>
            <span className="spanText">t</span>
            <span className="spanText">i</span>
            <span className="spanText">g</span>
            <span className="spanText">a</span>
            <span className="spanText">t</span>
            <span className="spanText">i</span>
            <span className="spanText">o</span>
            <span className="spanText">n</span>
            <span className="spanText"> </span>
            <span className="spanText">A</span>
            <span className="spanText">s</span>
            <span className="spanText">s</span>
            <span className="spanText">o</span>
            <span className="spanText">c</span>
            <span className="spanText">i</span>
            <span className="spanText">a</span>
            <span className="spanText">t</span>
            <span className="spanText">i</span>
            <span className="spanText">o</span>
            <span className="spanText">n</span>
            <span className="spanText"> </span>
            <span className="spanText"></span>
            <span className="spanText">H</span>
            <span className="spanText">T</span>
            <span className="spanText">C</span>
            <span className="spanText">I</span>
            <span className="spanText">A</span>
            <span className="spanText">.</span>{" "}
          </div>
        </div>

        {/* {Array.from("Computriage and Solutions.").map((char, index) => (
              <span className="spanText" key={index} ref={(el) => (spanRefs.current[index] = el)}>
                {char}
              </span>
            ))} */}
      </div>

      <div className="secondContentContainer">
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
          <ul className="listContainerText">
            <li className="listItem">
              <h2 className="listTitle">Protection</h2>
              <p className="listp">
                With our expansive global coverage, we rapidly locate your
                vulnerabilities, wherever they're located, ensuring prompt and
                direct resolution. No intermediaries, no delays—just results.
              </p>
            </li>
            <li className="listItem">
              <h2 className="listTitle">Benefits</h2>
              <p className="listp">
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
        <div className="footer">
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}
