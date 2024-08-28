import { Box, Button, Heading } from "@chakra-ui/react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { CustomLink } from "../../../coponents/CustomLink";
import { PathInfo } from "../../../coponents/PathInfo";

export const Route = createFileRoute("/content/_tabs/overview")({
  component: Overview,
});

function Overview() {
  const navigate = useNavigate();

  return (
    <Box>
      <Heading size="md">Overview</Heading>
      <CustomLink
        search={{ rootLogin: true }}
        activeOptions={{
          exact: true,
          includeSearch: true,
        }}
      >
        root login
      </CustomLink>
      <PathInfo />
      <Box mt={10}>
        <Box>Lets try button navigation</Box>
        <Button
          m={4}
          onClick={() => navigate({ from: Route.fullPath, to: "../settings" })}
        >
          got to settings
        </Button>
        <Button m={4} onClick={() => navigate({ search: { rootLogin: true } })}>
          activate login mode
        </Button>
      </Box>
    </Box>
  );
}
