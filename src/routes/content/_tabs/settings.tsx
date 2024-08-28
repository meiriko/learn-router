import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/content/_tabs/settings")({
  component: () => <div>Hello /content/_tabs/settings!</div>,
});
