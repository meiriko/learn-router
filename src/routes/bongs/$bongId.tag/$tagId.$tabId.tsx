import { createFileRoute, Outlet } from "@tanstack/react-router";
import { toTabsProps } from "../../../routeUtils";
import { Box } from "@chakra-ui/react";
import { Tabs, TabsContent } from "../../../coponents/Tabs";

// const tabs = ["overview", "full-details", "settings"] as const;
const tabsMapping = {
  over: OverDisplay,
  under: UnderDisplay,
  mid: MidDisplay,
  mmm: undefined,
} as const;
const tabs = Object.keys(tabsMapping) as (keyof typeof tabsMapping)[];
const tabNames = tabs.map((tab) => ({ label: `zz-${tab}-zz`, value: tab }));

export const Route = createFileRoute("/bongs/$bongId/tag/$tagId/$tabId")({
  component: TabsDisplay,
  ...toTabsProps("tabId", tabs),
});

function TabsDisplay() {
  return (
    <Box>
      <Box>Hello /bongs/$bongId/tag/$tagId/$tabId!</Box>
      <Tabs tabs={tabNames} tabKey="tabId" resetSearch />
      <TabsContent tabsMapping={tabsMapping} route={Route} tabKey="tabId" />
      <Outlet />
    </Box>
  );
}

function OverDisplay() {
  return <Box>OVERVIEW</Box>;
}

function UnderDisplay() {
  return <Box>UNDER</Box>;
}

function MidDisplay() {
  return <Box>MID</Box>;
}
