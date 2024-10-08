import { ChakraProvider, Box, HStack } from "@chakra-ui/react";
import { Link as TanstackLink, Outlet } from "@tanstack/react-router";
import { CustomLink } from "./coponents/CustomLink";

function App() {
  const showTabs = true;
  return (
    <ChakraProvider>
      <Box w="100vw" h="100vh" p={4}>
        {showTabs ? (
          <HStack w="full" overflow="hidden" flexWrap="wrap">
            <CustomLink to="/">HOME</CustomLink>
            <CustomLink to="/tibo">Tibo</CustomLink>
            <CustomLink to="/tibo/$tabId" params={{ tabId: "overview" }}>
              Tibo/overview
            </CustomLink>
            <CustomLink to="/tibo/st">Tibo/st</CustomLink>
            <CustomLink to="/tibo/$tabId" params={{ tabId: "full-details" }}>
              Tibo/full
            </CustomLink>
            <CustomLink to="/tibo/$tabId" params={{ tabId: "settings" }}>
              Tibo/settings
            </CustomLink>
            <CustomLink
              to="/bongs/$bongId/tag/$tagId"
              params={{ bongId: "bo", tagId: "to" }}
              search={{ tagOpts: "maybe" }}
            >
              see bong/tag fix me
            </CustomLink>
            <CustomLink
              to="/bongs/$bongId/tag/$tagId"
              params={{ bongId: "bo", tagId: "to" }}
            >
              see bong/tag
            </CustomLink>
            <CustomLink
              to="/bongs/$bongId/tag/$tagId/$tabId"
              params={{ bongId: "bo", tagId: "to", tabId: "mid" }}
              search={{ tagOpts: "maybe" }}
            >
              see bong/tag/overview
            </CustomLink>

            {/* <CustomLink to="/tibo/overview">Tibo overview</CustomLink> */}
            {/* <CustomLink to="/tibo/st">Tibo st</CustomLink> */}
            {/* <CustomLink to="/tibo/$tabId" params={{ tabId: "1" }}>
              Tibo tab1
            </CustomLink> */}
            <CustomLink to="/tibo/$tabId" params={{ tabId: "overview" }}>
              Tibo tab overview
            </CustomLink>
            <CustomLink to="/tibo/$tabId" params={{ tabId: "full-details" }}>
              Tibo tab full details
            </CustomLink>
            <CustomLink to="/tibo/$tabId" params={{ tabId: "settings" }}>
              Tibo tab settings
            </CustomLink>
            {/* <CustomLink to="/tibo/st/sub" mask={{ to: "/tibo" }}>
              Tibo st/sub (masked)
            </CustomLink> */}
            {/* <CustomLink to="/tibo/$tabId" params={{ tabId: "1" }}>
              Tibo tab1
            </CustomLink>
            <CustomLink to="/tibo/$tabId" params={{ tabId: "3" }}>
              Tibo tab3
            </CustomLink> */}
            {/* <CustomLink to="/content">content</CustomLink>
            <CustomLink
              to="/bongs/$bongId/tag/$tagId"
              params={{ bongId: "b", tagId: "t" }}
              search={{ itemsXxx: true, tagOpts: "maybe" }}
            >
              see bong/tag
            </CustomLink>
            <CustomLink
              to="/bongs/$bongId/tag/$tagId"
              params={{ bongId: "bo", tagId: "to" }}
              search={{ itemsXxx: true, tagOpts: "yes" }}
            >
              see another bong/tag
            </CustomLink>
            <CustomLink
              to="/bongs/$bongId/tag/$tagId"
              params={{ bongId: "bno", tagId: "tno" }}
              search={{ itemsXxx: true, tagOpts: "no" }}
            >
              see a failing bong/tag
            </CustomLink> */}
          </HStack>
        ) : (
          <HStack w="full" overflow="hidden" flexWrap="wrap">
            <CustomLink to="/items" search={{ itemsXxx: true }}>
              items
            </CustomLink>
            <CustomLink
              to="/bongs/$bongId/tag/$tagId"
              params={{ bongId: "b", tagId: "t2" }}
            >
              go there
            </CustomLink>
            <CustomLink to="/">HOME</CustomLink>
            <CustomLink
              to="/bongs/$bongId/tag/$tagId"
              params={{ bongId: "b", tagId: "t2" }}
            >
              {({ isActive }) => {
                return `BONG A TAG t2! ${isActive ? "active" : "inactive"}`;
              }}
            </CustomLink>
            <CustomLink
              search={{ rootLogin: true }}
              activeOptions={{
                exact: true,
                includeSearch: true,
              }}
            >
              root login
            </CustomLink>
            {/* <TanstackLink
            to="/bongs/$bongId/tag/$tagId"
            params={{ bongId: "3", tagId: "4" }}
          >
            bong 3 tag4
          </TanstackLink> */}
            <CustomLink
              to="/auth-item"
              activeOptions={{
                exact: true,
                includeSearch: true,
              }}
            >
              auth demo authrized
            </CustomLink>
            <CustomLink
              to="/auth-item"
              search={{ doLogin: true }}
              activeOptions={{
                exact: true,
                includeSearch: true,
              }}
            >
              auth demo un-authrized
            </CustomLink>
            <CustomLink
              to="/bongs/$bongId/tag/$tagId"
              params={{ bongId: "b", tagId: "t1" }}
            >
              BONG A TAG t1!
            </CustomLink>
            <CustomLink
              to="/bongs/$bongId/tag/$tagId"
              params={{ bongId: "b", tagId: "t2" }}
            >
              {({ isActive }) => {
                return `BONG A TAG t2! ${isActive ? "active" : "inactive"}`;
              }}
            </CustomLink>
            <CustomLink
              to="/bongs/$bongId/tag/$tagId"
              params={{ bongId: "3", tagId: "zz" }}
              inactiveProps={() => {
                return {
                  className: "miro-inactive",
                  _css: { "--my-link-color": "blue" },
                  // style: { "--my-link-color": "blue" },
                  // style: { color: "red" },
                };
              }}
              activeProps={() => {
                return {
                  className: "miro-active",
                  style: { "--my-link-color": "green" } as Record<
                    string,
                    string
                  >,
                  // style: { color: "green", "--my-link-color": "red" },
                };
              }}
            >
              lalazzz
            </CustomLink>
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
            <CustomLink to="/items" activeOptions={{ exact: true }}>
              Itemzzz
            </CustomLink>
            <CustomLink to="/items/$itemId" params={{ itemId: "1" }}>
              Item1
            </CustomLink>
            <CustomLink
              to="/items/$itemId/variant-a"
              params={{ itemId: "2" }}
              preload="intent"
              preloadDelay={1000}
            >
              Item 2 var a
            </CustomLink>
            <CustomLink to="/items/$itemId/variant-b" params={{ itemId: "2" }}>
              Item 2 var b
            </CustomLink>
            <CustomLink
              to="/items/$itemId/another-layout-c"
              params={{ itemId: "2" }}
            >
              Item 2 var C
            </CustomLink>
            <CustomLink
              to="/items/$itemId/another-layout-d"
              params={{ itemId: "2" }}
            >
              Item 2 var D
            </CustomLink>
            <Box marginInlineStart={4} color="red.500">
              bongs:
            </Box>
            <CustomLink to="/bongs">bongs</CustomLink>
            {Array.from({ length: 2 }, () =>
              Math.random().toString(16).slice(2, 6)
            ).map((bongId) => (
              <CustomLink key={bongId} to="/bongs/$bongId" params={{ bongId }}>
                Bong {bongId}
              </CustomLink>
            ))}
            <CustomLink
              to="/bongs/$bongId/version/$versionId"
              params={{ bongId: "3", versionId: "5" }}
              // params={{ bongId: "4" }}
            >
              bong 3 version 4
            </CustomLink>
            <CustomLink to="/bongs/$bongId/tag" params={{ bongId: "9" }}>
              bong 9 tag
            </CustomLink>
            <CustomLink
              to="/bongs/$bongId/tag/$tagId"
              params={{ bongId: "7", tagId: "7" }}
            >
              bong 7 tag 7
            </CustomLink>
            <Box marginInlineStart={4} color="red.500">
              darns:
            </Box>
            <CustomLink to="/darns">darns</CustomLink>
            {Array.from({ length: 2 }, () =>
              Math.random().toString(16).slice(2, 6)
            ).map((darnId) => (
              <CustomLink key={darnId} to="/darns/$darnId" params={{ darnId }}>
                Darn {darnId}
              </CustomLink>
            ))}
          </HStack>
        )}
        <Box as="hr" my={2} />
        <Outlet />
      </Box>
    </ChakraProvider>
  );
}

export default App;
