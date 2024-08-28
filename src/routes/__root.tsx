import React, { Suspense } from "react";
import { createRootRoute, Link } from "@tanstack/react-router";
import App from "../App";
import { Box } from "@chakra-ui/react";
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

export const Route = createRootRoute({
  // beforeLoad: () => {
  //   console.log(">>>>>>>>>>>> root >>>>>>>>>>>>>>>");
  // },
  // component: () => (
  //   <>
  //     <div className="p-2 flex gap-2">
  //       <Link to="/" className="[&.active]:font-bold">
  //         Home
  //       </Link>{" "}
  //       <Link to="/about" className="[&.active]:font-bold">
  //         About
  //       </Link>
  //     </div>
  //     <hr />
  //     <Outlet />
  //     <Suspense>
  //       <TanStackRouterDevtools />
  //     </Suspense>
  //   </>
  // ),
  validateSearch: (search): { rootLogin?: boolean } => search,
  component: () => {
    const params = Route.useParams();
    const search = Route.useSearch();
    console.log("root params/search: ", params, search);

    return (
      <>
        {search?.rootLogin ? <Login /> : <App />}
        <Suspense>
          <TanStackRouterDevtools />
        </Suspense>
      </>
    );
  },
});

function Login() {
  return (
    <Box>
      <Box>you need to login (root level)</Box>
      <Link search={{}}>clear</Link>
    </Box>
  );
}
