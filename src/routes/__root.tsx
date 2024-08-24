import React, { Suspense } from "react";
import { createRootRoute } from "@tanstack/react-router";
import App from "../App";
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
  component: () => (
    <>
      <App />
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </>
  ),
});
