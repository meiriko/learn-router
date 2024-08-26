import { Box } from "@chakra-ui/react";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/items/$itemId/_layout1")({
  component: LayoutWrapperDemo,
});

function LayoutWrapperDemo() {
  return (
    <Box>
      <Box>layout wrapper demo (layout1)</Box>
      <Outlet />
      <Box>end wrapper</Box>
    </Box>
  );
}
