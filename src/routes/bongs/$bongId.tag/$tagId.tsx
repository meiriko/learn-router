import { Box } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/bongs/$bongId/tag/$tagId")({
  component: TagItem,
});

function TagItem() {
  const params = Route.useParams();
  return (
    <Box>
      <Box>Tag item with params {JSON.stringify(params)}</Box>
    </Box>
  );
}
