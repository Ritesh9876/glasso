import React from "react";
import Navbar from "../Navbar";
import Nav from "../Navbar/Components/Nav";
import { Box,Text,Image,Grid } from "@chakra-ui/react";
import Sliders from "./Compenents/Sliders";

function Homepage() {
  return (
    <div>
      <Box overflow="hidden" bg="white">
        <Box display={{ base: "none", xl: "inherit" }} color="blackAlpha.800">
          <Navbar />
        </Box>
        <Nav />
      </Box>
      
      <Box>
      <Text fontSize="30px" pb="7" fontWeight="500" textAlign="center">
        As seen on kiara
      </Text>
      <Image src="https://static1.lenskart.com/media/desktop/img/Nov22/23-Nov/Hompage-banner4.jpg" alt="img" />
    </Box>

    <Box w="85%" m="auto" mt={20}>
      <Text fontSize="30px" pb="7" fontWeight="500" textAlign="center">
        FIND THE PERFECT FIT
      </Text>
      <Grid
        templateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(2,1fr)",
          xl: "repeat(2,1fr)",
          "2xl": "repeat(2,1fr)"
        }}
      >
        <Box>
          <Image
            src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/eye-square10.jpg"
            alt="img"
            p="2"
          />
          <Image
            src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/power-sun-square.jpg"
            alt="img"
            p="2"
          />
        </Box>
        <Box>
          <Image
            src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/ce-square.jpg"
            alt="img"
            p="2"
          />
          <Image
            src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/sun-square.jpg"
            alt="img"
            p="2"
          />
          <Image
            src="https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/Banner03_TileDesktop.jpg"
            alt="img"
            p="2"
          />
        </Box>
      </Grid>
    </Box>
    <div className="w-100 mt-20 d-flex align-items-center justify-content-center">
    <Sliders/>
    </div>
    </div>
  );
}

export default Homepage;
