import { Box } from "@chakra-ui/react";
import { createLazyFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/items/$itemId")({
  component: ItemDisplay,
});

function ItemDisplay() {
  const params = Route.useParams();
  return (
    <Box>
      <Box>Hello items (new, route, mira): {params.itemId}!</Box>
      <Link to="../$itemId" params={{ itemId: Number(params.itemId) + 1 }}>
        Next item
      </Link>
      <Link to="../$itemId" params={{ itemId: Number(params.itemId) - 1 }}>
        Prev item
      </Link>
      <Outlet />
    </Box>
  );
}
