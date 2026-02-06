import { createFileRoute } from '@tanstack/react-router'
import Footer from '@/components/Footer'

export const Route = createFileRoute('/news/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
      <div>
        <div className='h-screen'>Hello "/news"!</div>
        <Footer />
      </div>
  )
}