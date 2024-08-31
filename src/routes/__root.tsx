import React, { Suspense } from "react";
import { createRootRouteWithContext, Link } from "@tanstack/react-router";
import App from "../App";
import { Box } from "@chakra-ui/react";
import { QueryClient } from "@tanstack/react-query";
// import { TanStackRouterDevtools } from "@tanstack/router-devtools";

const TanStackRouterDevtools = import.meta.env.DEV
  ? React.lazy(() =>
      // Lazy load in development
      import("@tanstack/router-devtools").then((res) => ({
        default: res.TanStackRouterDevtools,
        // For Embedded Mode
        // default: res.TanStackRouterDevtoolsPanel
      }))
    )
  : () => null; // Render nothing in production

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    validateSearch: (search): { rootLogin?: boolean } => search,
    component: () => {
      // const params = Route.useParams();
      const search = Route.useSearch();

      return (
        <>
          {search?.rootLogin ? <Login /> : <App />}
          <Suspense>
            <TanStackRouterDevtools />
          </Suspense>
        </>
      );
    },
  }
);

function Login() {
  return (
    <Box>
      <Box>you need to login (root level)</Box>
      <Link search={{}}>clear</Link>
    </Box>
  );
}
