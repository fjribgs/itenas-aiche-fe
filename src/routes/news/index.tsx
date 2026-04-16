import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/news/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='flex flex-col relative mx-2 my-10 md:mx-20 xl:mx-40 h-auto gap-10 min-h-screen justify-center max-sm:mx-7 max-md:mx-12'>
      <div>
        <div className='font-ibm font-normal text-sm 2xl:text-md text-[#10B981]'>LATEST UPDATES</div>
        <div className='font-ibm text-4xl 2xl:text-5xl font-extrabold'>News & Articles</div>
      </div>

      <div className='flex max-lg:flex-col flex-row gap-3'>

        <div className='flex flex-col max-lg:flex-none flex-3 h-110 2xl:h-140 bg-linear-to-b from-white/5 via-[#064E3B]/50 to-blue-800/80 justify-end p-10 gap-3 rounded-3xl'>
          <h2 className='font-nunito font-bold max-lg:text-3xl text-4xl text-white'>AIChE ITENAS Wins Regional Chem-E-Car Award 2026</h2>
          <p className='font-ibm max-lg:text-sm text-gray-300'>Our team secured first place with their innovative hydrogen-cell powered vehicle design, showcasing exceptional engineering prowess at the regional summit.</p>
        </div>

        <div className='flex flex-col max-lg:flex-none flex-2'>

          <div className='flex min-h-25 2xl:min-h-27 rounded-2xl p-4 gap-3 shadow-sm hover:shadow-md'>
            <div className='min-w-27 2xl:min-w-29 rounded-lg bg-gray-400'></div>
            <div className='flex flex-col justify-center gap-1.5'>
              <p className='font-ibm max-lg:text-md text-[11px] 2xl:text-sm text-black/50'>Mar 16, 2026</p>
              <h3 className='font-nunito font-bold leading-4.5 max-lg:text-lg text-md 2xl:text-lg'>Open Recruitment 2026 Results Announced</h3>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}