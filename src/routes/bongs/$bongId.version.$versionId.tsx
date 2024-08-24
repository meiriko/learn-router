import { Box } from "@chakra-ui/react";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/bongs/$bongId/version/$versionId")({
  component: BongVersion,
});

function BongVersion() {
  const props = Route.useParams();
  return (
    <Box>
      <Box>Bong version {JSON.stringify(props)}</Box>
      <Outlet />
    </Box>
  );
}
