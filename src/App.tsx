import {
  ChakraProvider,
  Box,
  HStack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link, Outlet } from "@tanstack/react-router";

const navLinks = ["/", "/about", "/items"];

function App() {
  return (
    <ChakraProvider>
      <Box w="100vw" h="100vh" p={4}>
        <HStack>
          {navLinks.map((link) => (
            <ChakraLink
              as={Link}
              to={link}
              _activeLink={{ fontWeight: "bold", color: "yellow.300" }}
              textTransform="capitalize"
            >
              {link === "/" ? "home" : link.replace("/", "")}
            </ChakraLink>
          ))}

          <ChakraLink
            as={Link}
            to="/items/$itemId"
            params={{ itemId: "1" }}
            _activeLink={{ fontWeight: "bold", color: "yellow.300" }}
          >
            Item1
          </ChakraLink>
          <ChakraLink
            as={Link}
            to="/bongs"
            _activeLink={{ fontWeight: "bold", color: "yellow.300" }}
          >
            bongs
          </ChakraLink>
          {Array.from({ length: 1 }, () =>
            Math.random().toString(16).slice(2, 6)
          ).map((bongId) => (
            <ChakraLink
              key={bongId}
              as={Link}
              to="/bongs/$bongId"
              params={{ bongId }}
              _activeLink={{ fontWeight: "bold", color: "yellow.300" }}
            >
              Bong {bongId}
            </ChakraLink>
          ))}
          <ChakraLink
            as={Link}
            to="/bongs/2"
            _activeLink={{ fontWeight: "bold", color: "yellow.300" }}
          >
            Bong 2 static
          </ChakraLink>
          <Box>darns:</Box>
          <ChakraLink
            as={Link}
            to="/darns"
            _activeLink={{ fontWeight: "bold", color: "yellow.300" }}
          >
            darns
          </ChakraLink>
          {Array.from({ length: 5 }, () =>
            Math.random().toString(16).slice(2, 6)
          ).map((darnId) => (
            <ChakraLink
              key={darnId}
              as={Link}
              to="/darns/$darnId"
              params={{ darnId }}
              _activeLink={{ fontWeight: "bold", color: "yellow.300" }}
            >
              Darn {darnId}
            </ChakraLink>
          ))}
          {/* <ChakraLink
            as={Link}
            to="/"
            _activeLink={{ fontWeight: "bold", color: "yellow.300" }}
          >
            Home
          </ChakraLink>
          <ChakraLink
            as={Link}
            to="/about"
            _activeLink={{ fontWeight: "bold", color: "yellow.300" }}
          >
            About
          </ChakraLink> */}
        </HStack>
        <Box as="hr" my={2} />
        <Box>
          <Box>here we go in chakra</Box>
        </Box>
        <Outlet />
      </Box>
    </ChakraProvider>
  );
}

export default App;
