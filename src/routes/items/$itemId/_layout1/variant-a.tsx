import { Box } from "@chakra-ui/react";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/items/$itemId/_layout1/variant-a")({
  component: LayoutA,
  loader: () => {
    console.log("loading LayoutA ", Date.now() % 1000);
  },
  beforeLoad: () => {
    console.log("before loading LayoutA", Date.now() % 1000);
  },
});

function LayoutA() {
  return (
    <Box>
      <Box>Layout A</Box>
      <Link from="/items/$itemId/variant-a" to="../variant-b">
        go to variant B
      </Link>
      <hr />
    </Box>
  );
}
