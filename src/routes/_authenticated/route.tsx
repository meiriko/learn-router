import { Box } from "@chakra-ui/react";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated")({
  component: AuthWrapper,
  validateSearch: (search): { doLogin?: boolean } => search,
});

function AuthWrapper() {
  const { doLogin } = Route.useSearch();
  if (doLogin) {
    return (
      <Box>
        <Box>in AuthWrapper, you need to authenticate</Box>
      </Box>
    );
  }

  return (
    <Box>
      <Box>AuthWrapper</Box>
      <Outlet />
      <Box>bye AuthWrapper</Box>
    </Box>
  );
}
