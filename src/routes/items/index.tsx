import { Box } from "@chakra-ui/react";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/items/")({
  component: () => (
    <Box>
      <Box>hello items list</Box>
      <Outlet />
    </Box>
  ),
  validateSearch: (search): { itemsXxx?: boolean } => search,
});
