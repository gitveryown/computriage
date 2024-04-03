import React from "react";
import "./service.css";
import Image from "next/image";
import Banner from "../comp3.png";

export const page = () => {
  return (
    <div>
      <div className="header">
        <nav>
          <h1> Home </h1>
          <h1> Services </h1>
          <h1> Contact</h1>
          <h1> About Us</h1>
        </nav>
      </div>

      <div className="banner">
        <Image
          alt="bannerimage"
          src={Banner}
          style={{
            maxWidth: "50%",
            height: "50%",
          }}
        />
      </div>

      <div className="subheading">
        <h1> Services </h1>
      </div>

      <div className="info-column">
        <ul>
          <h3>SYSTEMS INFRASTRUCTURE DESIGN</h3>
          <h3>NETWORK INFRASTRUCTURE DESIGN</h3>
          <h3>INFRASTRUCTURE CAPACITY PLANNING</h3>
          <h3>CLOUD INFRASTRUCTURE DESIGN</h3>
          <h3>IT CONSULTING TECHNOLOGY SERVICES</h3>
          <h3>BUSINESS CONTINUITY</h3>
          <h3>TECHNOLOGY SUPPORT SERVICES</h3>
          <h3>FEDERAL AND STATE GOVERNMENT IT CONSULTING</h3>
        </ul>
      </div>

      <div className="subheading2">
        <h1>Specialties</h1>
      </div>

      <div className="info-column2">
        <ul>
        <h3>Microsoft</h3>
        <h3>RED HAT ENTERPRISE LINUX</h3>
        <h3>LINUX</h3>
        <h3>IBM AIX</h3>
        <h3>AZURE</h3>
        <h3>MAC OS X</h3>
        <h3>HP-UX</h3>
        <h3>AWS</h3>
        <h3>SECURITY</h3>
        </ul>
      </div>
      <div className="subheading3">
        <h1>Our capabilities</h1>
      </div>

      <div className="paragragh3">
        <p>
          Our IT infrastructure services involve mainframes, servers, end-user
          computing, disaster recovery, and security. We also offer managed
          network services that include the state’s wide and local area
          networks, voice, cable and wiring, and conferencing services.
        </p>
        <p>
          With our technology support services, we can help maintain and improve
          the availability of your IT infrastructure. Our team can evaluate
          situations, assess impacts, determine appropriate actions, and help
          find solutions. Using a triage approach, we manage our work by
          prioritizing cases that need the most attention.
        </p>
      </div>
    </div>
  );
};

export default page;
