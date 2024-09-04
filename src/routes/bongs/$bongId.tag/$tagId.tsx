import { Box } from "@chakra-ui/react";
import {
  createFileRoute,
  Link,
  Outlet,
  useBlocker,
} from "@tanstack/react-router";
import { PathInfo } from "../../../coponents/PathInfo";
import { useQuery } from "@tanstack/react-query";
import { useDefaultTab } from "../../../routeUtils";

// const queryClient = new QueryClient();

export const Route = createFileRoute("/bongs/$bongId/tag/$tagId")({
  component: TagItem,
  // loaderDeps: (props) => {
  //   const { search } = props;
  //   return search;
  // },
  // beforeLoad: (props) => {
  //   if (props.search?.tagOpts === "no") {
  //     throw new Error("no tagOpts");
  //   }
  // },
  errorComponent: (props) => {
    return (
      <Box onMouseEnter={() => console.log("stack: ", props.error.stack)}>
        <Box>Something went wrong</Box>
        <Box>
          {props.info ? JSON.stringify(props.info, null, 2) : "no info"}
        </Box>
        <Box>{props.error.message}</Box>
        <Box>{props.error.name}</Box>
        <Box as="pre">{JSON.stringify(props, null, 2)}</Box>
      </Box>
    );
  },
  loader: (props) => {
    const queryKey = ["tags"];
    props.context.queryClient.ensureQueryData({
      queryKey,
      queryFn: () => getTags({ queryKey }, true),
    });
    // return { x: 11, rnd: Date.now() % 1000 };
  },
});

function getTags(
  { queryKey }: { queryKey: (string | undefined)[] },
  fromLoader = false
) {
  return { miro: "was here", key: queryKey[1], fromLoader };
}

function TagItem() {
  useDefaultTab(Route);
  const params = Route.useParams();
  const search = Route.useSearch();
  const deps = Route.useLoaderDeps();
  const loaderData = Route.useLoaderData();
  const tag = Number(params.tagId);

  const query = useQuery({
    queryKey: ["tags", search?.tagOpts],
    queryFn: getTags,
    staleTime: 600,
  });
  useBlocker({
    blockerFn: () => window.confirm("Are you sure you want to leave?"),
    condition: params.tagId === "t",
  });
  // const router = useRouter();
  // useEffect(() => {
  //   // router.invalidate();
  //   setTimeout(router.invalidate, 2000);
  // }, [router]);

  return (
    <Box>
      <Box>Tag item with query {JSON.stringify(query?.data ?? {})}</Box>
      <Box>Tag item with params {JSON.stringify(params)}</Box>
      <Box>Tag item with search {JSON.stringify(search)}</Box>
      <Box>Tag item with deps {JSON.stringify(deps)}</Box>
      <Box>Tag item with loader data {JSON.stringify(loaderData)}</Box>
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
      <Box mt={8}>Below is the outlet</Box>
      <Outlet />
    </Box>
  );
}
