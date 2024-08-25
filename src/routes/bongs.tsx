import { Box } from "@chakra-ui/react";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/bongs")({
  component: () => (
    <Box>
      <Box>Bong root</Box>
      <Outlet />
    </Box>
  ),
});
