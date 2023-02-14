import '@/styles/global.css'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import ThemeProviders from './ThemeProviders'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="mx-auto max-w-7xl bg-zinc-100 dark:bg-zinc-800">
        <ThemeProviders>
          {/* Header */}
          <Header></Header>
          {/* Banner */}
          <Banner></Banner>
          {children}
        </ThemeProviders>
      </body>
    </html>
  )
}
