import { Box } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import { addTabProps } from "../../routeUtils";
import { Tabs } from "../../coponents/Tabs";

const tabs = ["overview", "full-details", "settings"] as const;

/*
function toParseTab<K extends string, T extends readonly string[]>(
  tabs: T,
  tabKey: K
): (params: Record<K, string>) => Record<K, T[number]> {
  function isValidTab(tab: string): tab is T[number] {
    return tabs.includes(tab as T[number]);
  }

  return (params: Record<K, string>): Record<K, T[number]> => {
    const tab = params?.[tabKey];
    if (!isValidTab(tab)) {
      const result = { ...params, [tabKey]: tabs[0] } as Record<K, T[number]>;
      return result;
    }
    return params as Record<K, T[number]>;
  };
}

function tabsParser<K extends string, TABS extends readonly string[]>(): (
  // tabKey: K // tabs: TABS,
  params: Record<K, string>
) => Record<K, TABS[number]> {
  return (params: Record<K, string>): Record<K, TABS[number]> => {
    return params as Record<K, TABS[number]>;
  };
}

type TTP<K extends string, TABS extends readonly string[]> = (
  params: Record<K, string>
) => Record<K, TABS[number]>;
*/

// function toValidTab<K extends string, T extends readonly string[]>(
//   tabKey: K,
//   tabs: T
// ) {
//   return ({ params }: { params: Record<K, string> }) => {
//     if (!tabs.includes(params[tabKey] as T[number])) {
//       throw redirect({
//         to: Route.fullPath,
//         params: { [tabKey]: tabs[0] } as Parameters<
//           typeof redirect
//         >[0]["params"],
//       });
//     }
//   };
// }

export const Route = createFileRoute("/tibo/$tabId")(
  addTabProps({ component: TiboTab }, "tabId", tabs)
);

function TiboTab() {
  const params = Route.useParams();
  return (
    <Box>
      <Tabs tabs={tabs} tabKey="tabId" />
      <Box>In Tibo tab {params.tabId} </Box>
    </Box>
  );
}
