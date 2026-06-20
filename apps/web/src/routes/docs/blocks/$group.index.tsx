import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/blocks/$group/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/docs/blocks/$group"!</div>;
}
