import "./services.css";
import Nav from "../component/Navbar/navbar";
import Footer from "../component/Footer/footer";
import { Grid, GridItem } from '@chakra-ui/react'

export default function page() {
  return (
    <div className="mainContainer">
      <Nav></Nav>

      <Grid
  h='200px'
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(5, 1fr)'
  gap={4}
>
  {/* <GridItem rowSpan={2} colSpan={1} bg='tomato' 
    
  /> */}
  <GridItem colSpan={2}> <h1 className="h1">This is one side</h1> </GridItem>
  <GridItem colSpan={2}> </GridItem>
  <GridItem colSpan={4}> </GridItem>
</Grid>

      {/* <div className="banner">
        
      </div>
      <section className="mainSection">
        <div className="subheading">
          <h1 className="heading">
            PROVIDING EXCELLENT IT SERVICES FOR YOUR ORGANIZATION CompuTriage
            provides a variety of services and solutions to help you use
            information technology to meet your business goals.
          </h1>
        </div> */}

        {/* <div className="info-column">
          <ul className="serviceList">
            <h3>SYSTEMS INFRASTRUCTURE DESIGN</h3>
            <h3>NETWORK INFRASTRUCTURE DESIGN</h3>
            <h3>INFRASTRUCTURE CAPACITY PLANNING</h3>
            <h3>CLOUD INFRASTRUCTURE DESIGN</h3>
            <h3>IT CONSULTING TECHNOLOGY SERVICES</h3>
            <h3>BUSINESS CONTINUITY</h3>
            <h3>TECHNOLOGY SUPPORT SERVICES</h3>
            <h3>FEDERAL AND STATE GOVERNMENT IT CONSULTING</h3>
          </ul>
        </div> */}
      {/* </section> */}
      {/* 
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
      </div> */}
      {/* <Footer></Footer> */}
    </div>
  );
}
