import { Box } from "@chakra-ui/react";
import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/items/$itemId")({
  component: ItemDisplay,
  validateSearch: (search): { miroWasHere?: string } => search,
});

function ItemDisplay() {
  const params = Route.useParams();
  return (
    <Box>
      <Box>Hello items (new, route, mira): {params.itemId}!</Box>
      <Link
        to="/items/$itemId"
        params={{ itemId: (Number(params.itemId) + 1)?.toString() }}
      >
        Next item
      </Link>
      <Link
        to="/items/$itemId"
        params={{ itemId: "3" }}
        // params={{ itemId: (Number(params.itemId) - 1)?.toString() }}
      >
        Prev item
      </Link>
      <Outlet />
    </Box>
  );
}
