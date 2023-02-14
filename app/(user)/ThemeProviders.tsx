'use client'
import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'

function ThemeProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      enableSystem={false}
      defaultTheme="light"
      attribute="class"
    >
      {children}
    </ThemeProvider>
  )
}

export default ThemeProviders
