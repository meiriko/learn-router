import {
  ChakraProvider,
  Box,
  HStack,
  Link as ChkraLinkBase,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import {
  LinkProps as TanstackLinkProps,
  Link as TanstackLink,
  LinkOptions as TanstackLinkOptions,
  Outlet,
  RegisteredRouter,
  RoutePaths,
  ParsePathParams,
  ActiveLinkOptions,
  // ToSubOptions,
  // ToOptions,
} from "@tanstack/react-router";
import React from "react";

type ExtractFunctionType<T> = T extends (...args: any[]) => any ? T : never;
type ToSearchType<
  TTo extends RoutePaths<RegisteredRouter["routeTree"]> | undefined,
> = ReturnType<
  ExtractFunctionType<
    TanstackLinkOptions<RegisteredRouter, "", TTo & string>["search"]
  >
>;
// type M2 = Exclude<ExtractRecordType<M>, M1>;
type MZ = ToSearchType<"/bongs">;
const dbg = {} as MZ;
console.log("dbg: ", dbg);

// type RoutesTo = RoutePaths<RegisteredRouter["routeTree"]>;
// const navLinks = ["/", "/about", "/items"] as RoutesTo[];
type LinkChildren = TanstackLinkProps["children"];
type LinkChildrenFN = Exclude<LinkChildren, React.ReactNode>;
type AsNodeChildren<T extends { children: LinkChildren }> = Omit<
  T,
  "children"
> & { children: React.ReactNode };
type AsFunctionChildren<T extends { children: LinkChildren }> = Omit<
  T,
  "children"
> & { children: LinkChildrenFN };

type ToParamsType<
  TTo extends RoutePaths<RegisteredRouter["routeTree"]> | undefined,
> = TTo extends undefined
  ? never
  : ParsePathParams<TTo & string> extends never
    ? never
    : Record<ParsePathParams<TTo & string>, string>;

type ChakraToTanstackLinkProps<
  TTo extends RoutePaths<RegisteredRouter["routeTree"]> | undefined,
  // > = Omit<TanstackLinkOptions, "params"> &
  // > = TanstackLinkProps<RegisteredRouter, "", TTo extends undefined ? "" : TTo> &
> = TanstackLinkOptions<
  RegisteredRouter,
  "",
  TTo extends undefined ? "" : TTo
> &
  ActiveLinkOptions &
  // > = Omit<TanstackLinkProps, "params"> &
  Omit<ChakraLinkProps, "as" | "children"> & {
    // children: TanstackLinkProps["children"];
    children: LinkChildren;
    to?: TTo;
    // params: ToParamsType<TTo>;
  }; // & ToParamsType<TTo>;
// } & (TTo extends undefined
//   ? { params?: never }
//   : ParsePathParams<TTo & string> extends never
//     ? { params?: never }
//     : { params: Record<ParsePathParams<TTo & string>, string> });

function ChakraLink<
  TTo extends RoutePaths<RegisteredRouter["routeTree"]> | undefined,
  // PType = ChakraToTanstackLinkProps<TTo>,
>(props: ChakraToTanstackLinkProps<TTo>) {
  // props: Omit<TanstackLinkOptions, "params"> &
  //   Omit<ChakraLinkProps, "as" | "children"> & {
  //     children: TanstackLinkProps["children"];
  //     to?: TTo;
  //   } & (TTo extends undefined
  //     ? { params?: never }
  //     : ParsePathParams<TTo & string> extends never
  //       ? { params?: never }
  //       : { params: Record<ParsePathParams<TTo & string>, string> })
  if (typeof props.children === "function") {
    const { children, ...rest } = props as AsFunctionChildren<
      ChakraToTanstackLinkProps<TTo>
    >;
    return (
      <ChkraLinkBase
        as={(props: TanstackLinkProps) => {
          const { params, search, mask, ...rest } = props;
          return (
            <Box
              {...rest}
              mask={mask as any}
              search={search as ToSearchType<TTo>}
              params={params as ToParamsType<TTo>}
              as={TanstackLink}
              children={children}
            />
          );
        }}
        color="var(--my-link-color)"
        {...rest}
        paddingInlineEnd={2}
        borderInlineEnd="1px solid red"
        whiteSpace="nowrap"
        _activeLink={{ fontWeight: "bold", color: "yellow.300" }}
      />
    );
  } else {
    return (
      <ChkraLinkBase
        as={TanstackLink}
        color="var(--my-link-color)"
        {...(props as AsNodeChildren<ChakraToTanstackLinkProps<TTo>>)}
        paddingInlineEnd={2}
        borderInlineEnd="1px solid red"
        whiteSpace="nowrap"
        _activeLink={{ fontWeight: "bold", color: "yellow.300" }}
      />
    );
  }
}

function App() {
  return (
    <ChakraProvider>
      <Box w="100vw" h="100vh" p={4}>
        <HStack w="full" overflow="hidden" flexWrap="wrap">
          <ChakraLink to="/items" search={{ itemsXxx: true }}>
            items
          </ChakraLink>
          <ChakraLink
            to="/bongs/$bongId/tag/$tagId"
            params={{ bongId: "b", tagId: "t2" }}
          >
            go there
          </ChakraLink>
          <ChakraLink to="/">HOME</ChakraLink>
          <ChakraLink
            to="/bongs/$bongId/tag/$tagId"
            params={{ bongId: "b", tagId: "t2" }}
          >
            {({ isActive }) => {
              return `BONG A TAG t2! ${isActive ? "active" : "inactive"}`;
            }}
          </ChakraLink>
          <ChakraLink
            search={{ rootLogin: true }}
            activeOptions={{
              exact: true,
              includeSearch: true,
            }}
          >
            root login
          </ChakraLink>
          {/* <TanstackLink
            to="/bongs/$bongId/tag/$tagId"
            params={{ bongId: "3", tagId: "4" }}
          >
            bong 3 tag4
          </TanstackLink> */}
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
                // style: { "--my-link-color": "red" },
                style: { color: "red" },
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
