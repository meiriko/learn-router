import { Box } from "@chakra-ui/react";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/darns")({
  component: () => (
    <Box>
      <Box>Darn root</Box>
      <Outlet />
    </Box>
  ),
});
