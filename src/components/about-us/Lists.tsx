interface ListsProps {
    icon: string;
    text: string;
}

export default function Lists({ icon="", text="" }: ListsProps ) {
    return (
        <div className='flex gap-2 md:gap-3.5 items-center'>
            <div className="bg-[#3B82F6]/20 rounded-3xl">
                <img src={`/about-us/${icon}.svg`} alt="" 
                className={`size-4 ${icon==="student" ? "size-5 md:size-7 m-2 sm:m-[5px]" : "m-2.5"}`}/>
            </div>
            <p className='font-nunito font-medium text-[13px] md:text-[16px]'>{text}</p>
        </div>
    ) 
}