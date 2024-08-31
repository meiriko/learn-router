import { HStack } from "@chakra-ui/react";
import { CustomLink } from "./CustomLink";

const keepSearchFn = (search: Record<string, unknown>) => search;

export function Tabs({
  tabs,
  tabKey,
  // search,
  resetSearch = false,
}: {
  tabs: readonly string[];
  tabKey: string;
  // search?: Record<string, unknown>;
  resetSearch?: boolean;
}) {
  return (
    <HStack>
      {tabs.map((tab) => (
        <div key={tab}>
          <CustomLink
            params={{ [tabKey]: tab }}
            search={resetSearch ? undefined : keepSearchFn}
          >
            {tab}
          </CustomLink>
        </div>
      ))}
    </HStack>
  );
}
