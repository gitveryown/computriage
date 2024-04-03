import "./services.css";
import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";

const Page: React.FC = () => {
  return ( 
    <div>
      This is Services
      <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={1} bg="white" />
        <GridItem colSpan={2} bg="grey" />
        <GridItem colSpan={2} bg="grey" />
        <GridItem colSpan={4} bg="white" />
      </Grid>
    </div>
  );
};

export default Page;
