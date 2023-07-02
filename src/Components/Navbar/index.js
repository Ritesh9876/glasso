import React from 'react'
import { Link, Navigate, useNavigate } from "react-router-dom";
import {
    Box,
    Text,
    Flex,
    Image,
    Input,
    Button,
    HStack,
    Center,
  } from "@chakra-ui/react";
function Navbar() {
    const navigate = useNavigate();
  return (
    <Box  cursor="pointer">
      <HStack m="auto">
        <Box w="20%" className="ml-20">
          <Link to="/">
            <Image src="https://i.imgur.com/OHxtfjd.png" alt="logo" w="75%" />
          </Link>
        </Box>
        <HStack w="85%" m="auto">
          <Box w="15%">
            <HStack fontSize="18px" fontWeight="bold">
                <Flex>
              <Center><i className="bi bi-telephone-outbound"></i></Center>
              <Center className="ml-6">9999999</Center>
              </Flex>
            </HStack>
          </Box>
          <Box w="55%">
            <Input
              placeholder="What are you looking for"
              border="1px solid black"
              w="95%"
              fontSize="17px"
              h="45px"
            />
          </Box>
          <HStack w="35%">
            <Button
              size="lg"
              bg="whiteAlpha.900"
              fontSize="14px"
              fontWeight="400"
            //  onClick={() => navigate("/")}
            >
              Track Order
            </Button>
            <Button
              leftIcon={<i className="bi bi-heart"></i>}
              size="lg"
              bg="whiteAlpha.900"
              fontSize="14px"
              fontWeight="400"
             // onClick={() => navigate("/wishlist")}
            >
              Wishlist
            </Button>
            <Link to="/cart">
              <Button

                leftIcon={<i className="bi bi-cart"></i>}
                size="lg"
                bg="whiteAlpha.900"
                fontSize="14px"
                fontWeight="400"
              >
                Cart
              </Button>
            </Link>
          </HStack>
        </HStack>
      </HStack>
    </Box>
  );
}

export default Navbar