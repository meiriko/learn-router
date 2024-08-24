import { Box } from "@chakra-ui/react";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/darns/")({
  component: DarnRoot,
});

function DarnRoot() {
  return (
    <Box>
      <Box>Darn index</Box>
      <Outlet />
    </Box>
  );
}
