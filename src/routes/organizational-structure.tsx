import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/organizational-structure')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/organizational-structure"!</div>
}
