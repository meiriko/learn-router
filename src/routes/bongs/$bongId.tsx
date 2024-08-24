import { Box } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/bongs/$bongId")({
  component: BongComponent,
  loader: (p) => {
    console.log(">>>> loading bongid: ", p);
    return "zzz";
  },
});

function BongComponent() {
  const params = Route.useParams();

  return <Box>hello bongz {params.bongId}</Box>;
}
