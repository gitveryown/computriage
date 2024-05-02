'use client'
import "./services.css";
import Nav from "../component/Navbar/navbar";
import Footer from "../component/Footer/footer";
import Image from "next/image";
import cyber from "../stockphoto1.png";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import code from "../../public/stockbg.png"



export default function page() {
  return (
    <div className="main-container">
      <div className="main-section">
      <Nav/>
      <div className="main-grid">
        <div className="photo-grid">
            <Image
              alt="stockphoto"
                src={cyber}
                className="service-photo"
                />
        </div>
        <div className="blurb-n-button">
          <div className="blurb1">
            <p className=" para1">
            Our IT infrastructure services involve mainframes, servers, end-user computing, disaster recovery, and security. We also offer managed network services that include the state’s wide and local area networks, voice, cable and wiring, and conferencing services.
            </p>
            <hr/>
            <p className="para2">
            With our technology support services, we can help maintain and improve the availability of your IT infrastructures. Our team can evaluate situations, assess impacts, determine appropriate actions, and help find solutions. Using a triage approach, we manage our work by prioritizing cases that need the most attention.
            </p>
          </div>
          <div className="button-container">
          <div className="button">
            <button onClick={() => {}}>See More</button>
          </div>
          </div>
        </div>

      </div>
      </div>
      <hr/>
      <div className="service-container">
      <div className="vertical-line"></div>
        <div className="left-info">
          <div className="header-pg2"> Our Services</div>
          <ul>
            <li>System Infastructure Design</li>
            <li>Network Infastructure Design</li>
            <li>Infastructure Capacity Planning</li>
            <li> Cloud Infastructure Design</li>
            <li>It Consulting Technology Service</li>
            <li>Business Continuity</li>
            <li> Technology Support Services</li>
            <li>Federal and State Goverment IT Consulting</li>
          </ul>
        </div>
            <Image
            alt=" placeholder"
            src={code}
            className="service-photo"
            />
          
        </div>
    </div>
  );
};
