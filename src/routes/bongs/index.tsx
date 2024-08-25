import { Box } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/bongs/")({
  component: BongsIndex,
});

function BongsIndex() {
  return <Box>Bongs index</Box>;
}
