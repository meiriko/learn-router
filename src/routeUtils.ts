import { redirect } from "@tanstack/react-router";

function asTabsParams<K extends string, TABS extends readonly string[]>() {
  return {
    parse: ((v) => v) as (v: unknown) => Record<K, TABS[number]>,
    stringify: (params: Record<string, string>) => params,
  };
}

function validateTab<K extends string, T extends readonly string[]>(
  tabKey: K,
  tabs: T
) {
  return ({
    params,
    search,
  }: {
    params: Record<K, string>;
    search: Record<string, unknown>;
  }) => {
    if (!tabs.includes(params[tabKey] as T[number])) {
      throw redirect({
        params: { [tabKey]: tabs[0] } as Parameters<
          typeof redirect
        >[0]["params"],
        search,
      });
    }
  };
}

export function toTabsProps<K extends string, T extends readonly string[]>(
  tabKey: K,
  tabs: T
) {
  return {
    beforeLoad: validateTab(tabKey, tabs),
    params: asTabsParams<K, T>(),
  };
}

export function addTabProps<P, K extends string, T extends readonly string[]>(
  props: P,
  tabKey: K,
  tabs: T
) {
  return {
    ...props,
    ...toTabsProps(tabKey, tabs),
  };
}

function navigateToDefaultTab(tabKey: string, defaultTab = "default") {
  return (config: {
    params: Record<string, string>;
    search: Record<string, unknown>;
    location: { pathname: string };
  }) => {
    if (defaultTab && !config.params[tabKey]) {
      throw redirect({
        to: `${config.location.pathname}/$${tabKey}`,
        params: { [tabKey]: defaultTab },
        search: config.search,
      });
    }
  };
}

export function toDefaultTabProps<T>(tabKey: string, defaultTab?: string) {
  return {
    beforeLoad: navigateToDefaultTab(tabKey, defaultTab),
    params: {
      parse: (v: T): T => v,
      stringify: (v: T) => v,
    },
  };
}

export function addDefaultTabProps<P, T>(
  props: P,
  tabKey: string,
  defaultTab?: string
) {
  return {
    ...props,
    ...toDefaultTabProps<T>(tabKey, defaultTab),
  };
}
