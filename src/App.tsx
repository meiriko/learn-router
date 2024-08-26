import {
  ChakraProvider,
  Box,
  HStack,
  Link as ChkraLinkBase,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import {
  // LinkProps as TanstackLinkProps,
  // ToSubOptions,
  Link as TanstackLink,
  LinkOptions as TanstackLinkOptions,
  Outlet,
  RegisteredRouter,
  RoutePaths,
  ParsePathParams,
} from "@tanstack/react-router";

// type RoutesTo = RoutePaths<RegisteredRouter["routeTree"]>;

// const navLinks = ["/", "/about", "/items"] as RoutesTo[];

function ChakraLink<TTo extends RoutePaths<RegisteredRouter["routeTree"]>>(
  props: Omit<TanstackLinkOptions, "params"> &
    Omit<ChakraLinkProps, "as"> & {
      // props: Omit<React.ComponentProps<typeof TanstackLink>, "params" | "as"> & {
      children: React.ReactNode;
      to: TTo;
    } & (ParsePathParams<TTo> extends never
      ? { params?: never }
      : { params: Record<ParsePathParams<TTo>, string> })
) {
  return (
    <ChkraLinkBase
      // onMouseEnter={() => console.log("hovering! ", props)}
      as={TanstackLink}
      color="var(--my-link-color)"
      {...props}
      paddingInlineEnd={2}
      borderInlineEnd="1px solid red"
      whiteSpace="nowrap"
      _activeLink={{ fontWeight: "bold", color: "yellow.300" }}
    />
  );
}

function App() {
  return (
    <ChakraProvider>
      <Box w="100vw" h="100vh" p={4}>
        <HStack w="full" overflow="hidden" flexWrap="wrap">
          {/* <TanstackLink
            to="/bongs/$bongId/tag/$tagId"
            params={{ bongId: "3", tagId: "4" }}
          >
            bong 3 tag4
          </TanstackLink> */}
          <ChakraLink to="/">HOME</ChakraLink>
          <ChakraLink
            to="/auth-item"
            activeOptions={{
              exact: true,
              includeSearch: true,
            }}
          >
            auth demo authrized
          </ChakraLink>
          <ChakraLink
            to="/auth-item"
            search={{ doLogin: true }}
            activeOptions={{
              exact: true,
              includeSearch: true,
            }}
          >
            auth demo un-authrized
          </ChakraLink>
          <ChakraLink
            // to="/auth-item"
            search={{ rootLogin: true }}
            activeOptions={{
              exact: true,
              includeSearch: true,
            }}
          >
            root login
          </ChakraLink>
          <ChakraLink
            to="/bongs/$bongId/tag/$tagId"
            params={{ bongId: "b", tagId: "t1" }}
          >
            BONG A TAG t1!
          </ChakraLink>
          <ChakraLink
            to="/bongs/$bongId/tag/$tagId"
            params={{ bongId: "b", tagId: "t2" }}
          >
            {({ isActive }) => {
              return `BONG A TAG t2! ${isActive ? "active" : "inactive"}`;
            }}
          </ChakraLink>
          <ChakraLink
            to="/bongs/$bongId/tag/$tagId"
            params={{ bongId: "3", tagId: "zz" }}
            inactiveProps={() => {
              return {
                color: "red",
                className: "xxxyyyzzz1",
                style: { "--my-link-color": "red" },
              };
            }}
          >
            lalazzz
          </ChakraLink>
          <TanstackLink
            to="/bongs/$bongId/tag/$tagId"
            params={{ bongId: "yy", tagId: "z" }}
          >
            lala
          </TanstackLink>{" "}
          {/* {navLinks.map((link) => (
            <ChakraLink to={link} textTransform="capitalize">
              {link === "/" ? "home" : link?.replace("/", "")}
            </ChakraLink>
          ))} */}
          <Box marginInlineStart={4} color="red.500">
            items:
          </Box>
          <ChakraLink to="/items" activeOptions={{ exact: true }}>
            Itemzzz
          </ChakraLink>
          <ChakraLink to="/items/$itemId" params={{ itemId: "1" }}>
            Item1
          </ChakraLink>
          <ChakraLink to="/items/$itemId/variant-a" params={{ itemId: "2" }}>
            Item 2 var a
          </ChakraLink>
          <ChakraLink to="/items/$itemId/variant-b" params={{ itemId: "2" }}>
            Item 2 var b
          </ChakraLink>
          <ChakraLink
            to="/items/$itemId/another-layout-c"
            params={{ itemId: "2" }}
          >
            Item 2 var C
          </ChakraLink>
          <ChakraLink
            to="/items/$itemId/another-layout-d"
            params={{ itemId: "2" }}
          >
            Item 2 var D
          </ChakraLink>
          <Box marginInlineStart={4} color="red.500">
            bongs:
          </Box>
          <ChakraLink to="/bongs">bongs</ChakraLink>
          {Array.from({ length: 2 }, () =>
            Math.random().toString(16).slice(2, 6)
          ).map((bongId) => (
            <ChakraLink key={bongId} to="/bongs/$bongId" params={{ bongId }}>
              Bong {bongId}
            </ChakraLink>
          ))}
          <ChakraLink
            to="/bongs/$bongId/version/$versionId"
            params={{ bongId: "3", versionId: "5" }}
            // params={{ bongId: "4" }}
          >
            bong 3 version 4
          </ChakraLink>
          <ChakraLink to="/bongs/$bongId/tag" params={{ bongId: "9" }}>
            bong 9 tag
          </ChakraLink>
          <ChakraLink
            to="/bongs/$bongId/tag/$tagId"
            params={{ bongId: "7", tagId: "7" }}
          >
            bong 7 tag 7
          </ChakraLink>
          <Box marginInlineStart={4} color="red.500">
            darns:
          </Box>
          <ChakraLink to="/darns">darns</ChakraLink>
          {Array.from({ length: 2 }, () =>
            Math.random().toString(16).slice(2, 6)
          ).map((darnId) => (
            <ChakraLink key={darnId} to="/darns/$darnId" params={{ darnId }}>
              Darn {darnId}
            </ChakraLink>
          ))}
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
