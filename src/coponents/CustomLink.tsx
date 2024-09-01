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
  // ParsePathParams,
  // ActiveLinkOptions,
  // ToSubOptions,
  // ToOptions,
} from "@tanstack/react-router";

// type ExtractFunctionType<T> = T extends (...args: any[]) => any ? T : never;
// type ToSearchType<
//   TTo extends RoutePaths<RegisteredRouter["routeTree"]> | undefined,
// > = ReturnType<
//   ExtractFunctionType<
//     TanstackLinkOptions<RegisteredRouter, "", TTo & string>["search"]
//   >
// >;

// type RoutesTo = RoutePaths<RegisteredRouter["routeTree"]>;
// const navLinks = ["/", "/about", "/items"] as RoutesTo[];

// type ReplaceType<T, ReplacedType> = Omit<T, keyof T> & ReplacedType;

// type AsNodeChildren<T> = ReplaceType<T, { children: React.ReactNode }>;
// type AsFunctionChildren<T> = ReplaceType<T, { children: LinkChildrenFN }>;

// type ToParamsType<
//   TTo extends RoutePaths<RegisteredRouter["routeTree"]> | undefined,
// > = TTo extends undefined
//   ? never
//   : ParsePathParams<TTo & string> extends never
//     ? never
//     : Record<ParsePathParams<TTo & string>, string>;

// TanstackLinkProps &
// Omit<ChakraLinkProps, "as" | "children"> & {
//   children: LinkChildren;
//   to?: TTo;
//   // children: TanstackLinkProps["children"];
//   // params: ToParamsType<TTo>;
// };

// & ToParamsType<TTo>;
// } & (TTo extends undefined
//   ? { params?: never }
//   : ParsePathParams<TTo & string> extends never
//     ? { params?: never }
//     : { params: Record<ParsePathParams<TTo & string>, string> });

type LinkChildren = TanstackLinkProps["children"];
type LinkChildrenFN = Exclude<LinkChildren, React.ReactNode>;

type ChakraToTanstackLinkProps<
  TTo extends RoutePaths<RegisteredRouter["routeTree"]> | undefined,
> = TanstackLinkOptions<
  RegisteredRouter,
  "",
  TTo extends undefined ? "" : TTo
> &
  Omit<TanstackLinkProps, "search" | "params" | "to"> &
  Omit<ChakraLinkProps, "as" | "children">;

export function CustomLink<
  TTo extends RoutePaths<RegisteredRouter["routeTree"]> | undefined,
>(props: ChakraToTanstackLinkProps<TTo>) {
  if (typeof props.children === "function") {
    const { children, ...rest } = props;
    return (
      <ChkraLinkBase
        as={(props: { children: LinkChildrenFN }) => {
          return <Box {...props} as={TanstackLink} children={children} />;
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
        {...(props as React.PropsWithChildren)}
        paddingInlineEnd={2}
        borderInlineEnd="1px solid red"
        whiteSpace="nowrap"
        _activeLink={{ fontWeight: "bold", color: "yellow.300" }}
      />
    );
  }
}
