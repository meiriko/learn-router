import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/auth-item")({
  component: () => (
    <div>You are seeing an item that requires authentication</div>
  ),
});
