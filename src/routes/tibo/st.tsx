import { Box } from "@chakra-ui/react";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/tibo/st")({
  component: StDisplay,
});

function StDisplay() {
  return (
    <Box>
      <Box>tibo ST</Box>
      <Outlet />
    </Box>
  );
}
