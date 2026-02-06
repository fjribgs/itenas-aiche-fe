import { createFileRoute } from '@tanstack/react-router'
import Footer from '@/components/Footer'

export const Route = createFileRoute('/about-us/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
      <div>
        <div className='h-screen'>Hello "/about-us"!</div>
        <Footer />
      </div>
  )
}
