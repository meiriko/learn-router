import { Box, Heading, HStack } from "@chakra-ui/react";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import { CustomLink } from "../../coponents/CustomLink";

export const Route = createFileRoute("/content")({
  component: ContentDisplay,
});

function ContentDisplay() {
  return (
    <Box>
      <Heading size="md">Content</Heading>
      <HStack w="full" overflow="hidden">
        <CustomLink to="/content/overview">Overview</CustomLink>
        <CustomLink to="/content/settings">Settings</CustomLink>
      </HStack>
      <Outlet />
    </Box>
  );
}
