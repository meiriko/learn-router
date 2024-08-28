import { Box } from "@chakra-ui/react";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/items/$itemId/_layout1/variant-b")({
  component: LayoutB,
});

function LayoutB() {
  return (
    <Box>
      <Box>Layout B!</Box>

      <Link
        from="/items/$itemId/variant-b"
        to="../variant-a"
        preload="intent"
        // preloadTimeout={2500}
      >
        go to variant A!
      </Link>
    </Box>
  );
}
