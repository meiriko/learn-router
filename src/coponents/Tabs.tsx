import { Box, HStack } from "@chakra-ui/react";
import { CustomLink } from "./CustomLink";
import { Route } from "@tanstack/react-router";

const keepSearchFn = (search: Record<string, unknown>) => search;

export function Tabs({
  tabs,
  tabKey,
  // search,
  resetSearch = false,
}: {
  tabs: readonly (string | { label: string; value: string })[];
  tabKey: string;
  // search?: Record<string, unknown>;
  resetSearch?: boolean;
}) {
  return (
    <HStack>
      {tabs.map((tab) => {
        const { label, value } =
          typeof tab === "string" ? { label: tab, value: tab } : tab;
        return (
          <div key={value}>
            <CustomLink
              params={{ [tabKey]: value }}
              search={resetSearch ? undefined : keepSearchFn}
            >
              {label}
            </CustomLink>
          </div>
        );
      })}
    </HStack>
  );
}

function EmptyComp() {
  return undefined;
}

export function TabsContent({
  tabsMapping,
  tabKey,
  route,
}: {
  tabsMapping: Record<string, (() => JSX.Element) | undefined>;
  tabKey: string;
  route: Pick<Route, "useParams">;
}) {
  const tab = route.useParams()[tabKey];
  const Comp = tabsMapping[tab] ?? EmptyComp;
  return (
    <Box>
      <Box>tab: {tab}</Box>
      <Comp />
    </Box>
  );
}
