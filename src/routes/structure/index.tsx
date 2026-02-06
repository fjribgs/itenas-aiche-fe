import { createFileRoute } from '@tanstack/react-router'
import Footer from '@/components/Footer'

export const Route = createFileRoute('/structure/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <div className='h-screen'>Hello "/organizational-structure"!</div>
      <Footer />
    </div>
  )
}
