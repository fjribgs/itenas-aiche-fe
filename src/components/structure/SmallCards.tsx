interface CardsData {
    name: string;
    jabatan: string;
}

export default function SmallStructureCards({ data }: { data:CardsData }) {
    return (
        <div className='flex font-ibm justify-center items-center gap-4 shadow-lg rounded-2xl p-4'>
            <div className='p-1 rounded-[99px]'>
              <img src={`public/struktur-organisasi/profile.png`} alt="" className='w-15'/>
            </div>

            <div className='flex flex-col items-start'>
              <span className='text-md font-semibold'>{data.name}</span>

              <span className='text-sm font-medium text-[#0EA5E9]'>{data.jabatan}</span>
            </div>
        </div>
    )
}