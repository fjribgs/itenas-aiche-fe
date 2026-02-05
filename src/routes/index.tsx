import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (

    <div className='flex flex-col justify-center items-center h-screen gap-6 text-center bg-linear-to-br from-[#E0E7FF]/50 via-white to-[#D1FAE5]/50'>

      <img src="/aiche-logo-light.svg" alt="" 
        className='w-45'/>

      <div className='flex flex-col gap-1 items-center'>
        <div className='font-ibm text-[10px] font-medium border border-[#10B981]/20 rounded-2xl w-fit px-2 py-1 bg-[#10B981]/10 text-[#10B981] flex gap-1 items-center justify-center'>
          <img src="/pillinfo/sustainability.svg" alt="" />
          <p>ENGINEERING SUSTAINABLE FUTURE</p>
        </div>

        <h1 className='font-nunito font-bold text-[40px]'>AIChE <span className='bg-linear-to-r from-[#10B981] to-[#2563EB] text-transparent bg-clip-text'>SC ITENAS</span></h1>

        <p className='font-ibm text-[11.5px] max-w-88'>Bridging the gap between <b>Industry</b>, <b>Academia</b> & <b>Sustainability</b> through innovation and community.</p>
      </div>

    </div>

  )
}
