"use client";
import React from "react";
import "./about.css";
import Footer from "../component/Footer/footer";
import Link from "next/link";
import Image from "next/image";
import Banner from "../../public/about-for-comp.png";

export default function Page() {
  return (
    <div className="page-container">
      <header className="header">
    <nav className="nav">
            <div className="logo"></div>
            <div className="nav-links">
              <button className="notSelected">
                <Link href="/"> Home </Link>
              </button>
              <button className="notSelected">
                <Link href="/service"> Services </Link>
              </button>
              <button className="notSelected">
                <Link href="/contact">Contact Us</Link>
              </button>
            </div>
          </nav>
          </header>
          <div className="main-section">
            <div className="photo-grid">
              <div className="banner">
              <Image
              alt="about-banner"
              src={Banner}
              height={500}
              width={800}/>
              </div>
            </div>
            <div className="text-container">

              <div className="our-history">
                <div className="oh-heading">
                    Our History
                </div>
                <div className="para-history">
                <p>
                Our company was founded in February 2005 as a computer repair service provider 
                for family and friends of the owner in Indianapolis, IN. 
                As our client base grew, we extended our services to residential clients.
                </p>
                <p>
                Our founder expanded and gained new skills, then left the computer repair business. 
                He provided IT services and solutions to small businesses and large enterprises and 
                became a subcontractor for IT prime contractors.
                </p>
                <p>
                In 2017, we changed our company name from Computer Triage to Computer Triage IT Solutions, LLC. 
                Our trade name is CompuTriage.
                </p>
                </div>
            
              </div>
              <div className="about-the-owner">
              <div className="ato-heading">
                  About The Owner
              </div>
              <div className="para-owner">
              <p>
              Keith Tunstall serves as the CEO and Sr IT Solutions Architect. 
              Keith has always had an interest in computers and technology. 
              When he was 4 years old, he wrote his first computer program on a Tandy 2000 computer in 1985. 
              </p>
              <p>
              
              Attended Westwood College in Atlanta, GA to pursue a BS in Computer Science and focused on Computer Forensics. 
              As an IT professional, he has MCSE, A+, and Network+ certifications. 
              </p>

              </div>
              </div>
      
            </div>
          </div>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}
