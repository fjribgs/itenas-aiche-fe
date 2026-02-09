interface PillInfoProps {
    text: string;
    showIcon: boolean;
    icon?: string;
}

export default function PillInfo({ text="", showIcon=true, icon="" }: PillInfoProps) {
    return (
        <div className='font-ibm text-[10px] font-medium border border-[#10B981]/20 rounded-2xl w-fit px-2 py-1 bg-[#10B981]/10 text-[#10B981] flex gap-1 items-center justify-center'>
            <img src={icon} alt="" 
                className={`sm:w-5 ${showIcon ? "" : "hidden"}`}/>
            <p className='sm:text-[12px] 2xl:text-[14px]'>{text}</p>
        </div>
    )
}
