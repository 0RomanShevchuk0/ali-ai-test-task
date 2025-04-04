"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { FC } from "react"

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
})

interface TanstackProviderProps {
  children: React.ReactNode
}

const TanstacProvider: FC<TanstackProviderProps> = ({ children }) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export default TanstacProvider
