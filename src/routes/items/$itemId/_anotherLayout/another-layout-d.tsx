import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/items/$itemId/_anotherLayout/another-layout-d"
)({
  component: () => (
    <div>Hello /items/$itemId/_anotherLayout/another-layout-d!</div>
  ),
});
