import { Box } from "@chakra-ui/react";
import { useParams, useSearch } from "@tanstack/react-router";

export function PathInfo() {
  const params = useParams({ strict: false });
  const search = useSearch({ strict: false });

  return (
    <Box>
      <Box>path params:</Box>
      <Box as="pre">{JSON.stringify(params, null, 2)}</Box>
      <Box>search params:</Box>
      <Box as="pre">{JSON.stringify(search, null, 2)}</Box>
    </Box>
  );
}
