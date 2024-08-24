import { Box } from "@chakra-ui/react";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/bongs/$bongId/tag")({
  component: BongTag,
});

function BongTag() {
  return (
    <Box>
      <Box>bong tag root</Box>
      <Outlet />
    </Box>
  );
}
