import {
  Box,
  Link as ChkraLinkBase,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import {
  LinkProps as TanstackLinkProps,
  Link as TanstackLink,
  LinkOptions as TanstackLinkOptions,
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

// type RoutesTo = RoutePaths<RegisteredRouter["routeTree"]>;
// const navLinks = ["/", "/about", "/items"] as RoutesTo[];
// type ReplaceTypeByKeys<Type, Key extends keyof Type, ReplacedType> = Omit<
//   Type,
//   Key
// > & { [K in Key]: ReplacedType };
type ReplaceType<T, ReplacedType> = Omit<T, keyof T> & ReplacedType;
type LinkChildren = TanstackLinkProps["children"];
type LinkChildrenFN = Exclude<LinkChildren, React.ReactNode>;

type AsNodeChildren<T> = ReplaceType<T, { children: React.ReactNode }>;
type AsFunctionChildren<T> = ReplaceType<T, { children: LinkChildrenFN }>;
// type AsNodeChildren<T extends { children: unknown }> = ReplaceTypeByKeys<
//   T,
//   "children",
//   React.ReactNode
// >;
// type AsNodeChildren<T extends { children: LinkChildren }> = Omit<
//   T,
//   "children"
// > & { children: React.ReactNode };
// type AsFunctionChildren<T extends { children: LinkChildren }> = Omit<
//   T,
//   "children"
// > & { children: LinkChildrenFN };

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

export function CustomLink<
  TTo extends RoutePaths<RegisteredRouter["routeTree"]> | undefined,
>(props: ChakraToTanstackLinkProps<TTo>) {
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
        {...(props as AsNodeChildren<ChakraToTanstackLinkProps<TTo>>)}
        paddingInlineEnd={2}
        borderInlineEnd="1px solid red"
        whiteSpace="nowrap"
        _activeLink={{ fontWeight: "bold", color: "yellow.300" }}
      />
    );
  }
}
