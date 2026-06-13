import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      Я скоро заполню эту страницу, а пока можете посмотреть на разделы выше
    </div>
  );
}
