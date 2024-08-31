import { Box } from "@chakra-ui/react";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/tibo/st/sub")({
  component: StSubDisplay,
});

function StSubDisplay() {
  return (
    <Box>
      <Box>tibo ST sub</Box>
      <Outlet />
    </Box>
  );
}
