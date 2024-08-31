import { createFileRoute, Outlet } from "@tanstack/react-router";
import { toTabsProps } from "../../../routeUtils";
import { Box } from "@chakra-ui/react";
import { Tabs } from "../../../coponents/Tabs";

const tabs = ["overview", "full-details", "settings"] as const;

export const Route = createFileRoute("/bongs/$bongId/tag/$tagId/$tabId")({
  component: TabsDisplay,
  ...toTabsProps("tabId", tabs),
});

function TabsDisplay() {
  return (
    <Box>
      <Box>Hello /bongs/$bongId/tag/$tagId/$tabId!</Box>
      <Tabs tabs={tabs} tabKey="tabId" resetSearch />
      <Outlet />
    </Box>
  );
}
