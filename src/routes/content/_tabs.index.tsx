import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/content/_tabs/")({
  component: () => (
    <div>
      <div>Hello /content/_tabs! (index root)</div>
      <Navigate to="/content/overview" />
      {/* <Outlet /> */}
    </div>
  ),
});
