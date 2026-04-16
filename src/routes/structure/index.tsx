import { createFileRoute } from '@tanstack/react-router'
import StructureCards from '@/components/structure/Cards'
import SmallStructureCards from '@/components/structure/SmallCards'

export const Route = createFileRoute('/structure/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='flex flex-col h-auto min-h-screen py-20 my-16 items-center justify-center gap-16'>
      <div className='flex flex-col gap-3 items-center'>
        <span className='font-ibm font-semibold text-[#0EA5E9] text-sm'>OUR TEAM</span>
        <h2 className='font-ibm font-semibold text-4xl'>Organizational Structure</h2>
        <p className='font-ibm font-normal'>Meet the dedicated student leader driving innovation and sustainability at AIChE SC ITENAS.</p>
      </div>

      <div className='flex flex-col'>
        <StructureCards data={{
          name: "Muhammad Rizky",
          jabatan: "Ketua Umum"
        }}/>
      </div>

      <div className='flex gap-40'>
        <StructureCards data={{
          name: "Sarah Amalia",
          jabatan: "Wakil Ketua"
        }}/>

        <StructureCards data={{
          name: "Dina Pertiwi",
          jabatan: "Sekretaris"
        }}/>
      </div>

      <div className='flex gap-20'>
        <SmallStructureCards data={
          {
            name: "Budi Santoso",
            jabatan: "Head of R&D"
          }
        }/>

        <SmallStructureCards data={
          {
            name: "Ahmad Fauzi",
            jabatan: "Head of PR"
          }
        }/>

        <SmallStructureCards data={
          {
            name: "Rina Kusuma",
            jabatan: "Head of Media"
          }
        }/>

        <SmallStructureCards data={
          {
            name: "Jessica Tan",
            jabatan: "Head of Events"
          }
        }/>
      </div>
    </div>
  )
}
