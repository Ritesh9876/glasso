import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  DrawerCloseButton,
  Button,
  Box,
  useDisclosure,
  HStack,
  Image,
  Input,
  Drawer,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerFooter,
  DrawerBody,
  Heading,
  Avatar,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();
  const navigate = useNavigate();

  return (
    <Box
      display={{ lg: "inherit", xl: "none" }}
      cursor="pointer"
      bg="#fbf9f7"
      p={2.5}
    >
      <HStack m="auto" justifyContent="space-between">
        <Box w={{ lg: "20%", md: "20%", sm: "22%", base: "30%" }}>
          <Link to="/">
            <Image
              src="https://i.imgur.com/OHxtfjd.png"
              alt="logo"
              w={{ lg: "75%", md: "100%", sm: "100%", base: "100%" }}
            />
          </Link>
        </Box>
        <Box w="70%" display={{ sm: "inherit", base: "none" }}>
          <Input
            placeholder="What are you looking for"
            border="1px solid black"
            w="90%"
            fontSize="16px"
            h="35px"
          />
        </Box>

        <Box>
          <Button colorScheme="blue" p="0" onClick={onOpen}>
            <HamburgerIcon fontSize="20px" />
          </Button>
          <Drawer
            size="xs"
            isOpen={isOpen}
            placement="right"
            initialFocusRef={firstField}
            onClose={onClose}
          >
            <DrawerOverlay />
            <DrawerContent color="blackAlpha.900">
              <DrawerCloseButton />
              <DrawerHeader bg="whiteAlpha.900">
              </DrawerHeader>
              <DrawerBody borderBottomWidth="1px" bg="whiteAlpha.900">
                <Box display="flex" flexDirection="column" fontSize="16px">
                  <Link to="/orderhistory">
                    <Box
                      borderBottom="0.1px solid gray"
                      fontSize="15px"
                      p="4% 0%"
                      color="black"
                      _hover={{ fontWeight: "bold" }}
                      onClick={() => navigate("/orderhistory")}
                    >
                      My Orders
                    </Box>
                  </Link>
                  <Link to="/cart">
                    <Box
                      borderBottom="0.1px solid gray"
                      fontSize="15px"
                      p="4% 0%"
                      color="black"
                      _hover={{ fontWeight: "bold" }}
                    >
                      Cart
                    </Box>
                  </Link>
                  <Link to="/wishlist">
                    <Box
                      borderBottom="0.1px solid gray"
                      fontSize="15px"
                      p="4% 0%"
                      color="black"
                      _hover={{ fontWeight: "bold" }}
                    >
                      Wishlist
                    </Box>
                  </Link>
                  <Link>
                    <Box
                      borderBottom="0.1px solid gray"
                      fontSize="15px"
                      p="4% 0%"
                      color="black"
                      _hover={{ fontWeight: "bold" }}
                    >
                      Manage Notification
                    </Box>
                  </Link>
                  <Link>
                    <Box
                      borderBottom="1px solid white"
                      fontSize="15px"
                      p="4% 0%"
                      color="black"
                      _hover={{ fontWeight: "bold" }}
                    >
                      Contact Us
                    </Box>
                  </Link>
                </Box>

                <Heading mt="15%" color="black" fontSize="15px" mb="5%">
                  SHOP NOW
                </Heading>
                <Box display="flex" flexDirection="column" fontSize="16px">
                  <Accordion defaultIndex={[0]} allowMultiple w="100%" m="auto">
                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box
                            as="span"
                            flex="1"
                            textAlign="left"
                            fontWeight="500"
                          >
                            Men
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <Link to="/products">
                          <Box>
                            <Text pb="2">EYEGLASSES</Text>
                            <Text pb="2">COMPUTER GLASSES</Text>
                            <Text pb="2">CONTACT LENSES</Text>
                            <Text pb="2">SUN GLASSES</Text>
                          </Box>
                        </Link>
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box
                            as="span"
                            flex="1"
                            textAlign="left"
                            fontWeight="500"
                          >
                            Women
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={5}>
                        <Link to="/products">
                          <Box>
                            <Text pb="2">EYEGLASSES</Text>
                            <Text pb="2">COMPUTER GLASSES</Text>
                            <Text pb="2">CONTACT LENSES</Text>
                            <Text pb="2">SUN GLASSES</Text>
                          </Box>
                        </Link>
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box
                            as="span"
                            flex="1"
                            textAlign="left"
                            fontWeight="500"
                          >
                            Kids
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <Link to="/products">
                          <Box>
                            <Text pb="2">EYEGLASSES</Text>
                            <Text pb="2">COMPUTER GLASSES</Text>
                            <Text pb="2">CONTACT LENSES</Text>
                            <Text pb="2">SUN GLASSES</Text>
                          </Box>
                        </Link>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </Box>
                <Heading mt="15%" color="black" fontSize="15px" mb="5%">
                  Our Services
                </Heading>
                <Box display="flex" flexDirection="column" fontSize="16px">
                  <Link>
                    <Box
                      borderBottom="0.1px solid gray"
                      p="5% 0%"
                      fontSize="15px"
                      color="black"
                      _hover={{ fontWeight: "bold" }}
                    >
                      Free Home Trail
                    </Box>
                  </Link>
                  <Link>
                    <Box
                      borderBottom="0.1px solid gray"
                      p="5% 0%"
                      color="black"
                      _hover={{ fontWeight: "bold" }}
                      fontSize="15px"
                    >
                      Home Eye check-up
                    </Box>
                  </Link>
                  <Link>
                    <Box
                      borderBottom="0.1px solid gray"
                      p="5% 0%"
                      color="black"
                      _hover={{ fontWeight: "bold" }}
                      fontSize="15px"
                    >
                      Store Locator
                    </Box>
                  </Link>
                </Box>
                <Heading mt="15%" color="black" mb="5%" fontSize="15px">
                  HIGHLIGHTS
                </Heading>
                <Box display="flex" flexDirection="column" fontSize="16px">
                  <Link>
                    <Box
                      borderBottom="0.1px solid gray"
                      p="5% 0%"
                      color="black"
                      _hover={{ fontWeight: "bold" }}
                      fontSize="15px"
                    >
                      Check Frame Size
                    </Box>
                  </Link>
                  <Link>
                    <Box
                      borderBottom="0.1px solid gray"
                      p="5% 0%"
                      color="black"
                      _hover={{ fontWeight: "bold" }}
                      fontSize="15px"
                    >
                      Gold Membership
                    </Box>
                  </Link>
                  <Link>
                    <Box
                      borderBottom="0.1px solid gray"
                      p="5% 0%"
                      color="black"
                      _hover={{ fontWeight: "bold" }}
                      fontSize="15px"
                    >
                      Try Frames in 3D
                    </Box>
                  </Link>
                  <Link>
                    <Box
                      borderBottom="1px solid white"
                      p="5% 0%"
                      color="black"
                      _hover={{ fontWeight: "bold" }}
                      fontSize="15px"
                    >
                      Dowloads Apps
                    </Box>
                  </Link>
                </Box>
                <Heading mt="15%" color="black" fontSize="15px" mb="5%">
                  FAQ's & POLICIES
                </Heading>
                <Box display="flex" flexDirection="column" fontSize="16px">
                  <Link>
                    <Box
                      borderBottom="0.1px solid gray"
                      p="5% 0%"
                      color="black"
                      _hover={{ fontWeight: "bold" }}
                      fontSize="15px"
                    >
                      Frequently Asked Questions
                    </Box>
                  </Link>
                  <Link>
                    <Box
                      borderBottom="0.1px solid gray"
                      p="5% 0%"
                      color="black"
                      _hover={{ fontWeight: "bold" }}
                      fontSize="15px"
                    >
                      Cancellation & Return Policy
                    </Box>
                  </Link>
                  <Link>
                    <Box
                      p="5% 0%"
                      color="black"
                      _hover={{ fontWeight: "bold" }}
                      fontSize="15px"
                    >
                      Cobrowsing
                    </Box>
                  </Link>
                </Box>

                <Accordion allowMultiple></Accordion>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      </HStack>
    </Box>
  );
}

export default Nav;
