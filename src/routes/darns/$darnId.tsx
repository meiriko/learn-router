import { createFileRoute } from "@tanstack/react-router";
import { Box } from "@chakra-ui/react";

export const Route = createFileRoute("/darns/$darnId")({
  component: DarnComponent,
});

function DarnComponent() {
  const params = Route.useParams();

  return <Box>hello Darn {params.darnId}</Box>;
}
