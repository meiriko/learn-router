import { createFileRoute, Outlet } from "@tanstack/react-router";
import {
  addTabProps,
  toTabComponents,
  toTabLabels,
  toTabs,
} from "../../../routeUtils";
import { Box } from "@chakra-ui/react";
import { Tabs, TabsContent } from "../../../coponents/Tabs";
// const tabs = ["overview", "full-details", "settings"] as const;

const tabsMapping = {
  under: { component: UnderDisplay },
  mid: { label: "the-mid", component: MidDisplay },
  over: OverDisplay,
} as const;

const tabs = toTabs(tabsMapping);
const tabComponents = toTabComponents(tabsMapping);
const tabLabels = toTabLabels(tabsMapping);

export const Route = createFileRoute("/bongs/$bongId/tag/$tagId/$tabId")(
  addTabProps(
    {
      component: TabsDisplay,
    },
    "tabId",
    tabs
  )
);

function TabsDisplay() {
  return (
    <Box>
      <Box>Hello /bongs/$bongId/tag/$tagId/$tabId!</Box>
      <Tabs tabs={tabLabels} tabKey="tabId" resetSearch />
      <TabsContent tabsMapping={tabComponents} route={Route} tabKey="tabId" />
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
