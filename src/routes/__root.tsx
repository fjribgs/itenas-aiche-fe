import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
  useLocation
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { useEffect } from 'react'

import Header from '../components/Header'
import Footer from '@/components/Footer'

import TanStackQueryDevtools from '../integrations/tanstack-query/devtools'

import appCss from '../styles.css?url'

import type { QueryClient } from '@tanstack/react-query'

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'AICHE SC ITENAS',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),

  shellComponent: RootDocument,

  notFoundComponent: NotFound,
})

function NotFound() {
  return (
    <>
      <div className='flex flex-col h-screen items-center justify-center'>
        <h1 className='font-nunito font-bold text-[120px] bg-linear-to-r bg-clip-text text-transparent from-[#2563EB] to-[#10B981] '>404</h1>
        <p className='relative bottom-8 font-ibm font-medium text-[20px]'>Halaman tidak ditemukan :(</p>
      </div>
      <Footer />
    </>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])
  
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Header />
        {children}
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
            TanStackQueryDevtools,
          ]}
        />
        <Scripts />
        <Footer />
      </body>
    </html>
  )
}
