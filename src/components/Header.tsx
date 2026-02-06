import { Link, useMatchRoute } from '@tanstack/react-router'

import { useState } from 'react'

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
    path: "/organizational-structure"
  },
  {
    id: 5,
    title: "Kontak",
    path: "/contact"
  }
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const matchRoute = useMatchRoute()

  return (
    <>
      <nav className='flex justify-between px-4 py-4 items-center shadow-sm w-full sticky z-2 top-0 bg-white md:px-[80px] xl:px-[180px]'>

        <Link className='flex items-center gap-3' to='/'>
          <img src='/aiche-logo-light.svg' alt="AIChE Logo" 
            className='w-7 2xl:w-10'/>
          <p className='font-bold font-nunito text-[18px] 2xl:text-[21px]'>AIChE SC ITENAS</p>
        </Link>

        <div className='hidden lg:flex absolute left-1/2 -translate-x-1/2'>
          <ul className='flex gap-[20px] 2xl:gap-[33px]'>
            {menuItems.map((item) => (
              <li key={item.id} className='flex'>
                
                <Link to={item.path}
                  className='font-nunito text-[12px] 2xl:text-[15px] group'>
                  {item.title}

                  <div className={`bg-[#3B82F6] h-0.5 group-hover:w-full ${matchRoute({ to: item.path })
                    ? "w-full"
                    : "w-0"}`}></div>
                </Link>
                
              </li>
            ))}
          </ul>
        </div>

        <div className='flex z-2'>
          <button onClick={() => setIsOpen(!isOpen)} className='lg:hidden'>
            <img src='/sidebar-left.svg' alt="" 
              className={`${isOpen ? "rotate-180" : "rotate-0"} w-5`}/>
          </button>

          <button className='hidden lg:flex font-nunito font-bold bg-linear-to-b to-[#2563EB] from-[#10B981] px-5 py-1.5 text-white rounded-lg text-[12px] 2xl:text-[16px] gap-1 cursor-pointer hover:shadow-lg'
            >
            Join Us
            <img src="/button/right-arrow.svg" alt="" />
          </button>
        </div>

      </nav>

      <aside className={`${isOpen ? 'translate-x-0' : 'translate-x-full'} flex h-screen font-nunito px-7 py-6 z-1 w-[65vw] md:w-[45vw] bg-white fixed right-0 shadow-sm text-lg`}>
        <nav>
          <ul className='flex flex-col gap-3'>
            {menuItems.map((item) => (
              <li key={item.id}>
                <Link to={item.path} 
                  onClick={() => setIsOpen(false)}
                  activeProps={{
                    className:
                      'border-b-2 border-[#3B82F6]',
                  }}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  )
}
// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [groupedExpanded, setGroupedExpanded] = useState<
//     Record<string, boolean>
//   >({})

//   return (
//     <>
//       <header className="p-4 flex items-center bg-gray-800 text-white shadow-lg">
//         <button
//           onClick={() => setIsOpen(true)}
//           className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
//           aria-label="Open menu"
//         >
//           <Menu size={24} />
//         </button>
//         <h1 className="ml-4 text-xl font-semibold">
//           <Link to="/">
//             <img
//               src="/tanstack-word-logo-white.svg"
//               alt="TanStack Logo"
//               className="h-10"
//             />
//           </Link>
//         </h1>
//       </header>

//       <aside
//         className={`fixed top-0 left-0 h-full w-80 bg-gray-900 text-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
//           isOpen ? 'translate-x-0' : '-translate-x-full'
//         }`}
//       >
//         <div className="flex items-center justify-between p-4 border-b border-gray-700">
//           <h2 className="text-xl font-bold">Navigation</h2>
//           <button
//             onClick={() => setIsOpen(false)}
//             className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
//             aria-label="Close menu"
//           >
//             <X size={24} />
//           </button>
//         </div>

//         <nav className="flex-1 p-4 overflow-y-auto">
//           <Link
//             to="/"
//             onClick={() => setIsOpen(false)}
//             className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors mb-2"
//             activeProps={{
//               className:
//                 'flex items-center gap-3 p-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors mb-2',
//             }}
//           >
//             <Home size={20} />
//             <span className="font-medium">Home</span>
//           </Link>

//           {/* Demo Links Start */}

//           <Link
//             to="/demo/prisma"
//             onClick={() => setIsOpen(false)}
//             className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors mb-2"
//             activeProps={{
//               className:
//                 'flex items-center gap-3 p-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors mb-2',
//             }}
//           >
//             <Database size={20} />
//             <span className="font-medium">Prisma</span>
//           </Link>

//           <Link
//             to="/demo/tanstack-query"
//             onClick={() => setIsOpen(false)}
//             className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors mb-2"
//             activeProps={{
//               className:
//                 'flex items-center gap-3 p-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors mb-2',
//             }}
//           >
//             <Network size={20} />
//             <span className="font-medium">TanStack Query</span>
//           </Link>

//           <Link
//             to="/demo/start/server-funcs"
//             onClick={() => setIsOpen(false)}
//             className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors mb-2"
//             activeProps={{
//               className:
//                 'flex items-center gap-3 p-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors mb-2',
//             }}
//           >
//             <SquareFunction size={20} />
//             <span className="font-medium">Start - Server Functions</span>
//           </Link>

//           <Link
//             to="/demo/start/api-request"
//             onClick={() => setIsOpen(false)}
//             className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors mb-2"
//             activeProps={{
//               className:
//                 'flex items-center gap-3 p-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors mb-2',
//             }}
//           >
//             <Network size={20} />
//             <span className="font-medium">Start - API Request</span>
//           </Link>

//           <div className="flex flex-row justify-between">
//             <Link
//               to="/demo/start/ssr"
//               onClick={() => setIsOpen(false)}
//               className="flex-1 flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors mb-2"
//               activeProps={{
//                 className:
//                   'flex-1 flex items-center gap-3 p-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors mb-2',
//               }}
//             >
//               <StickyNote size={20} />
//               <span className="font-medium">Start - SSR Demos</span>
//             </Link>
//             <button
//               className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
//               onClick={() =>
//                 setGroupedExpanded((prev) => ({
//                   ...prev,
//                   StartSSRDemo: !prev.StartSSRDemo,
//                 }))
//               }
//             >
//               {groupedExpanded.StartSSRDemo ? (
//                 <ChevronDown size={20} />
//               ) : (
//                 <ChevronRight size={20} />
//               )}
//             </button>
//           </div>
//           {groupedExpanded.StartSSRDemo && (
//             <div className="flex flex-col ml-4">
//               <Link
//                 to="/demo/start/ssr/spa-mode"
//                 onClick={() => setIsOpen(false)}
//                 className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors mb-2"
//                 activeProps={{
//                   className:
//                     'flex items-center gap-3 p-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors mb-2',
//                 }}
//               >
//                 <StickyNote size={20} />
//                 <span className="font-medium">SPA Mode</span>
//               </Link>

//               <Link
//                 to="/demo/start/ssr/full-ssr"
//                 onClick={() => setIsOpen(false)}
//                 className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors mb-2"
//                 activeProps={{
//                   className:
//                     'flex items-center gap-3 p-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors mb-2',
//                 }}
//               >
//                 <StickyNote size={20} />
//                 <span className="font-medium">Full SSR</span>
//               </Link>

//               <Link
//                 to="/demo/start/ssr/data-only"
//                 onClick={() => setIsOpen(false)}
//                 className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors mb-2"
//                 activeProps={{
//                   className:
//                     'flex items-center gap-3 p-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors mb-2',
//                 }}
//               >
//                 <StickyNote size={20} />
//                 <span className="font-medium">Data Only</span>
//               </Link>
//             </div>
//           )}

//           {/* Demo Links End */}
//         </nav>
//       </aside>
//     </>
//   )
// }
