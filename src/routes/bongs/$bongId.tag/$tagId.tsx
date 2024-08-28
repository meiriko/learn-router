import { Box } from "@chakra-ui/react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PathInfo } from "../../../coponents/PathInfo";

export const Route = createFileRoute("/bongs/$bongId/tag/$tagId")({
  component: TagItem,
});

function TagItem() {
  const params = Route.useParams();
  const search = Route.useSearch();
  const tag = Number(params.tagId);
  return (
    <Box>
      <Box>Tag item with params {JSON.stringify(params)}</Box>
      <Box>Tag item with search {JSON.stringify(search)}</Box>
      <Box
        px={2}
        borderInlineStart="1px solid red"
        as={Link}
        // from="/bongs/$bongId"
        // to="tag/$tagId"
        to="../$tagId"
        params={{ tagId: (tag - 1).toString() }}
        // search={(prev: Record<string, string>) => ({
        //   ...prev,
        //   q: "coming-from-" + tag,
        //   pp: "yes",
        // })}
      >
        goto prev tag
      </Box>
      <Box
        px={2}
        borderInlineStart="1px solid red"
        as={Link}
        from="/bongs/$bongId/tag"
        to="$tagId"
        params={{ tagId: (tag + 1).toString() }}
        // search={{
        //   q: "left-behind-" + tag,
        //   pn: "yes",
        //   miro: ["x", "yy"],
        //   shouldFinish: true,
        //   jobj: { a: "b", c: { d: "e" } },
        // }}
      >
        goto next tag
      </Box>
      <PathInfo />
    </Box>
  );
}
