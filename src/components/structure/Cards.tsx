interface CardsData {
    name: string;
    jabatan: string;
}

export default function StructureCards({ data }: { data: CardsData }) {
    return (
        <div className='flex flex-col font-ibm justify-center items-center gap-4 shadow-lg rounded-2xl p-8'>
            <div className='bg-linear-30 from-[#0EA5E9] to-[#22C55E] p-1 rounded-[99px]'>
            <img src={`public/struktur-organisasi/profile.png`} alt="" />
            </div>

            <div className='flex flex-col items-center'>
            <span className='text-lg font-semibold'>{data.name}</span>

            <span className='text-sm font-medium text-[#0EA5E9]'>{data.jabatan}</span>
            </div>
        </div>
    )
}