import { Box } from "@chakra-ui/react";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/items/$itemId/_anotherLayout")({
  component: LayoutWrapperDemo,
});

function LayoutWrapperDemo() {
  return (
    <Box fontSize="1.5em">
      <Box>layout wrapper demo (another layout)</Box>
      <Outlet />
      <Box>end wrapper</Box>
    </Box>
  );
}
