import { createFileRoute } from '@tanstack/react-router'
import PillInfo from '@/components/PillInfo'
import Lists from '@/components/about-us/Lists'

interface MisiProps {
  id: number;
  text: string;
}

const misi: MisiProps[] = [
  {
    id: 1,
    text: "Developing the technical competence of members through workshops, seminars, and hands-on projects."
  },
  {
    id: 2,
    text: "Bridging the gap between academia and industry by facilitating internships and company visits."
  },
  {
    id: 3,
    text: "Promoting sustainable engineering practices and environmental awareness within the community."
  }
]

export const Route = createFileRoute('/about-us/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <div className='flex flex-col justify-center text-center items-center overflow-x-hidden'>

        <div className='flex overflow-y-hidden'>

          <img src="/about-us/about-us-bg.webp"  
              className='absolute -left-25 -top-3 w-50 sm:w-65 lg:w-76 2xl:w-105 -rotate-15 opacity-30 rounded-md'/>

          <img src="/about-us/about-us-bg2.webp" 
              className='absolute -right-25 -top-3 w-50 sm:w-65 lg:w-76 2xl:w-105 rotate-15 opacity-30 rounded-md'/>
        </div>
        
    
        <div className='flex flex-col items-center justify-center overflow-y-hidden h-[30vh] lg:h-[40vh]'>

          <PillInfo text='ABOUT US' showIcon={false} />
    
          <div className='flex flex-col leading-9.5 mt-4 2xl:mt-6'>

            <h1 className='font-nunito font-bold text-[40px] sm:text-[50px] 2xl:text-[64px]'>Siapa Kita?</h1>
    
            <p className='font-ibm font-bold text-[20px] 2xl:text-[26px] bg-linear-to-r bg-clip-text text-transparent from-[#2563EB] to-[#10B981] 2xl:mt-3 '>Apa itu AIChE?</p>
          </div>
        </div>

        <div className='flex flex-col px-7 md:px-26 xl:px-44 relative gap-10 mb-10 overflow-y-hidden'>

          <p className='font-ibm font-normal text-[13px] xl:text-[17px] 2xl:text-[22px] md:text-[16px] xl:px-26 2xl:px-40'>AIChE SC ITENAS is a premier student body dedicated to bridging the gap between academia and industry through sustainable engineering practices. We are a community of innovators, thinkers, and future leaders.</p>

          <div className='flex justify-between mx-2 xl:px-40 2xl:px-70'>

            <div className='flex flex-col gap-3'>

                <Lists text="Student-led" icon="student"/>

                <Lists text="Sustainability Focus" icon="sustainability"/>
              </div>

              <div className='flex flex-col gap-3'>

                <Lists text="Industry Connections" icon="industry"/>

                <Lists text="Global Network" icon="global"/>
              </div>
            </div>

            <div className='flex flex-col my-7 xl:my-14 px-2 2xl:my-30 overflow-y-hidden'>

              <h3 className='font-ibm font-bold text-[12px] 2xl:text-[16px] text-[#3B82F6]'>OUR CORE VALUES</h3>

              <h2 className='font-nunito font-bold text-[28px] 2xl:text-[43px]'><span className='text-[#3B82F6]'>Vision</span> & <span className='text-[#10B981]'>Mission</span></h2>

              <div className='flex flex-col xl:flex-row mt-5 2xl:mt-8 gap-7 overflow-y-hidden'>

                <div className='flex flex-col xl:flex-1 items-start justify-start bg-linear-br from-[#EFF6FF]/80 to-[#FFFFFF]/50 px-6 py-5 gap-3 rounded-3xl'>

                  <img src="/about-us/visi.svg"
                    className='bg-[#3B82F6]/20 size-10 p-2 rounded-4xl border-[#EFF6FF]/30 shadow-blue-400 shadow-sm'/>

                  <h4 className='font-ibm font-bold text-[25px] md:text-[28px]'>Visi</h4>

                  <p className='font-ibm font-normal text-left text-[14px] md:text-[16px] 2xl:text-[19px]'>"To be a leading student chapter that fosters innovation, professional development, and sustainable engineering solutions, recognized globally for excellence in chemical engineering education and practice."</p>
                </div>

                <div className='flex flex-col xl:flex-1 items-start justify-start bg-linear-br from-[#ECFDF5]/80 to-[#FFFFFF]/50 px-6 py-5 gap-3 rounded-3xl'>

                  <img src="/about-us/misi.svg"
                    className='bg-[#10B981]/20 size-10 p-2 rounded-4xl border-[#10B981]/30 shadow-green-400 shadow-sm'/>

                  <h4 className='font-ibm font-bold text-[25px] md:text-[28px]'>Misi</h4>

                  <ul className='flex flex-col gap-2'>

                    {misi.map((item) => (

                      <li key={item.id}
                        className='flex gap-2.5'>

                        <div className='bg-[#10B981]/20 border-[#10B981]/50 border p-1 px-2 rounded-4xl h-fit font-ibm font-bold text-[#10B981] text-[9px]'>{item.id}</div>
                        
                        <p className='font-ibm text-[14px] md:text-[16px] 2xl:text-[18px] text-start'>{item.text}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}
