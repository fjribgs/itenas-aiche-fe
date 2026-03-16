import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/news/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='flex flex-col relative mx-2 my-2 md:mx-20 xl:mx-40 gap-2'>

      <div className='font-ibm font-bold text-sm'>LATEST UPDATES</div>
      <div className='font-nunito text-4xl font-extrabold'>News & Articles</div>

      <div className='flex flex-row gap-3'>
        <div className='flex-2'>
          <h2>AIChE ITENAS Wins Regional Chem-E-Car Award 2026</h2>
          <p>Our team secured first place with their innovative hydrogen-cell powered vehicle design, showcasing exceptional engineering prowess at the regional summit.</p>
        </div>
        <div className='flex-1'>
          <p>test</p>
        </div>
      </div>

    </div>
  )
}