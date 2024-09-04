import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/tibo/settings")({
  component: () => <div>Hello /tibo/settings!</div>,
});
