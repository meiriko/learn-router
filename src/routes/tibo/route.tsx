import { Box } from "@chakra-ui/react";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import { toDefaultTabProps } from "../../routeUtils";

// const tabs = [
//   { path: "overview", label: "Overview" },
//   { path: "full-details", label: "Full Details" },
//   { path: "settings", label: "Settings" },
// ];

export const Route = createFileRoute("/tibo")({
  component: TiboDisplay,
  ...toDefaultTabProps("tabId"),
});

function TiboDisplay() {
  return (
    <Box>
      <Box>Hello /tibo!</Box>
      <Outlet />
    </Box>
  );
}
