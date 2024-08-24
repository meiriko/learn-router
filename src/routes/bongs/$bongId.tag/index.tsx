import { Box } from "@chakra-ui/react";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/bongs/$bongId/tag/")({
  component: BongTagIndex,
});

function BongTagIndex() {
  return (
    <Box>
      <Box>Empty bong tag index</Box>
      <Outlet />
    </Box>
  );
}
