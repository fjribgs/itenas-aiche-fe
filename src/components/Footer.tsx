import { Link, useMatchRoute } from "@tanstack/react-router";

interface MenuItem {
  id: number;
  title: string;
  path: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    title: "Home",
    path: "/"
  },
  {
    id: 2,
    title: "About Us",
    path: "/about-us"
  },
  {
    id: 3,
    title: "Berita",
    path: "/news"
  },
  {
    id: 4,
    title: "Struktur Organisasi",
    path: "/structure"
  },
  {
    id: 5,
    title: "Kontak",
    path: "/contact"
  }
]

export default function Footer() {
    const matchRoute = useMatchRoute()

    const isContact = matchRoute({ to: '/contact' })

    return (
        <div className="flex">

            <div className={`py-3 w-screen bg-linear-to-br from-[#ECFDF5]/80 to-[#FFFFFF]/50 justify-between items-center px-6 sm:px-22 xl:px-42 ${isContact ? "hidden" : "flex"}`}>
                <p className='font-nunito text-[8px] lg:text-[12px]'>© 2026 AIChE SC ITENAS. All rights reserved.</p>
                <div>
                    <img src="/footer/mail.svg" alt="" 
                    className='w-2 lg:w-3'/>
                </div>
            </div>

            <div className={`py-10 w-screen bg-linear-to-br from-[#ECFDF5]/80 to-[#FFFFFF]/50 justify-between px-6 sm:px-22 xl:px-42 ${isContact ? "flex" : "hidden"}`}>
                <div className="flex gap-14 2xl:gap-28">
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                                <img src="/aiche-logo-light.svg" alt="" 
                                    className="w-6 lg:w-10 2xl:w-14"/>
                                <p className="font-nunito font-bold lg:text-[24px] 2xl:text-[30px]">AIChE SC ITENAS</p>
                            </div>
                            <div className="flex mt-3">
                                <p className="font-ibm text-[10px] lg:text-[13px] 2xl:text-[16px] max-w-50 lg:max-w-70 2xl:max-w-90">Empowering the next generation of chemical engineers through innovation, sustainability, and global collaboration.</p>
                            </div>
                            <div className="flex gap-3 items-center mt-4">
                                <button className="bg-gray-300 hover:bg-gray-400 p-2 rounded-4xl cursor-pointer">
                                    <img src="/footer/insta.svg" alt="" />
                                </button>
                                <button className="bg-gray-300 hover:bg-gray-400 p-2 rounded-4xl cursor-pointer">
                                    <img src="/footer/linkedin.svg" alt="" 
                                        className="w-4"/>
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 mt-6 lg:hidden">
                            <h2 className="font-ibm font-medium">Stay Connected</h2>
                            <div className="flex gap-2">
                                <img src="/footer/mail.svg" alt="" 
                                    className="w-3"/>
                                <p className="text-[13px] font-ibm">contact@aiche-itenas.org</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 w-auto">
                        <div>
                            <h2 className="font-ibm font-medium 2xl:text-[22px]">Quick Links</h2>
                            <ul className="pt-3 flex flex-col gap-1 2xl:gap-2.5">
                                {menuItems.map((item) => (
                                    <li key={item.id}
                                        className="font-ibm text-[13px] 2xl:text-[16px]">

                                        <Link to={item.path}>
                                            {item.title}
                                        </Link>

                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex-col gap-1 hidden lg:flex">
                    <h2 className="font-ibm font-medium 2xl:text-[22px]">Stay Connected</h2>
                    <div className="flex gap-2 mt-3">
                        <img src="/footer/mail.svg" alt="" 
                            className="w-3 2xl:w-6"/>
                        <p className="text-[13px] 2xl:text-[16px] font-ibm">contact@aiche-itenas.org</p>
                    </div>
                </div>
            </div>
        </div>
    )
}