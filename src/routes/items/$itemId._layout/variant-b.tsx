import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/items/$itemId/_layout/variant-b")({
  component: () => <div>Hello /items/_layout/variant-b!</div>,
});
