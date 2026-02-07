import { createFileRoute } from '@tanstack/react-router'
import Footer from '@/components/Footer'
import PillInfo from '@/components/PillInfo'
import Lists from '@/components/about-us/Lists'

export const Route = createFileRoute('/about-us/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <div className='flex flex-col justify-center text-center items-center relative overflow-y-scroll scrollbar-hide'>
    
          <div className='flex flex-col items-center h-[30vh] justify-center'>
            <PillInfo text='ABOUT US' showIcon={false} icon=''/>
    
            <div className='flex flex-col leading-9.5 mt-4'>
              <h1 className='font-nunito font-bold text-[40px] sm:text-[50px] 2xl:text-[64px]'>Siapa Kita?</h1>
    
              <p className='font-ibm font-bold text-[20px] bg-linear-to-r bg-clip-text text-transparent from-[#2563EB] to-[#10B981]'>Apa itu AIChE?</p>
            </div>
          </div>

          <div className='flex flex-col w-screen h-screen px-7 md:px-26 relative gap-10 mb-10'>
            <p className='font-ibm font-normal text-[13px] md:text-[16px]'>AIChE SC ITENAS is a premier student body dedicated to bridging the gap between academia and industry through sustainable engineering practices. We are a community of innovators, thinkers, and future leaders.</p>
            <div className='flex justify-between mx-2'>
              <div className='flex flex-col gap-3'>
                <Lists text="Student-led" icon="student"/>
                <Lists text="Sustainability Focus" icon="sustainability"/>
              </div>
              <div className='flex flex-col gap-3'>
                <Lists text="Industry Connections" icon="industry"/>
                <Lists text="Global Network" icon="global"/>
              </div>
            </div>

            <div className='flex flex-col mt-7'>
              <h3 className='font-ibm font-bold text-[12px] text-[#3B82F6]'>OUR CORE VALUES</h3>
              <h2 className='font-nunito font-bold text-[28px]'><span className='text-[#3B82F6]'>Vision</span> & <span className='text-[#10B981]'>Mission</span></h2>

              <div className='flex flex-col mt-5 gap-7'>
                <div className='flex flex-col items-start justify-start bg-linear-br from-[#EFF6FF]/80 to-[#FFFFFF]/50 px-6 py-5 gap-3 rounded-3xl'>
                  <img src="/about-us/visi.svg" alt="" 
                    className='bg-[#3B82F6]/20 size-10 p-2 rounded-4xl border-[#EFF6FF]/30 shadow-blue-400 shadow-sm'/>
                  <h4 className='font-ibm font-bold text-[25px] md:text-[28px]'>Visi</h4>
                  <p className='font-ibm font-normal text-left text-[14px] md:text-[16px]'>"To be a leading student chapter that fosters innovation, professional development, and sustainable engineering solutions, recognized globally for excellence in chemical engineering education and practice."</p>
                </div>

                <div className='flex flex-col items-start justify-start bg-linear-br from-[#ECFDF5]/80 to-[#FFFFFF]/50 px-6 py-5 gap-3 rounded-3xl'>
                  <img src="/about-us/misi.svg" alt="" 
                    className='bg-[#10B981]/20 size-10 p-2 rounded-4xl border-[#10B981]/30 shadow-green-400 shadow-sm'/>
                  <h4 className='font-ibm font-bold text-[25px] md:text-[28px]'>Misi</h4>
                  <p className='font-ibm font-normal text-left text-[14px] md:text-[16px]'>"To be a leading student chapter that fosters innovation, professional development, and sustainable engineering solutions, recognized globally for excellence in chemical engineering education and practice."</p>
                </div>
              </div>
            </div>
          </div>
    
      </div>
    
      <Footer />
    </>
  )
}
