import { createFileRoute } from '@tanstack/react-router'
import PillInfo from '@/components/PillInfo'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <>
      <div className='flex flex-col justify-center items-center gap-6 h-full text-center bg-linear-to-br from-[#E0E7FF]/50 via-white to-[#D1FAE5]/50 overflow-hidden'>

        <img src="/aiche-logo-light.svg" alt="" 
          className='w-45 sm:w-55 2xl:w-70'/>

        <div className='flex flex-col gap-1 items-center'>
          <PillInfo text='ENGINEERING SUSTAINABLE FUTURE' showIcon={true} icon='/pillinfo/sustainability.svg'/>

          <h1 className='font-nunito font-bold text-[40px] sm:text-[50px] 2xl:text-[64px]'>AIChE <span className='bg-linear-to-r from-[#10B981] to-[#2563EB] text-transparent bg-clip-text'>SC ITENAS</span></h1>

          <p className='font-ibm text-[11.5px] sm:text-[14px] max-w-88 sm:max-w-110 2xl:max-w-140 2xl:text-[19px]'>Bridging the gap between <b>Industry</b>, <b>Academia</b> & <b>Sustainability</b> through innovation and community.</p>
        </div>

      </div>
    </>
  )
}
