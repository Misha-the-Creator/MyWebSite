import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dl')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dl"!</div>
}
