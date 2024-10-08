import { Box } from "@chakra-ui/react";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/bongs/$bongId")({
  component: BongComponent,
});

function BongComponent() {
  const params = Route.useParams();

  return (
    <>
      <Box>hello bongz {params.bongId}</Box>
      <Outlet />
    </>
  );
}
